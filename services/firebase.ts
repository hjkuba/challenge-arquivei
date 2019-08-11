import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Company, Credentials } from '../types';

const config = {
    apiKey: 'AIzaSyBTv-eWrygfDX5qIqZWSRQygGR5Vpm7JsY',
    authDomain: 'arquivei-challenge.firebaseapp.com',
    databaseURL: 'https://arquivei-challenge.firebaseio.com',
    projectId: 'arquivei-challenge',
    storageBucket: '',
    messagingSenderId: '991708908524',
    appId: '1:991708908524:web:d62c126a15e0e3d1',
};

let firebaseApp: firebase.app.App = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

class FirebaseService {
    private firebaseAuth: firebase.auth.Auth;
    private firebaseDatabase: firebase.firestore.Firestore;

    public constructor() {
        this.firebaseAuth = firebaseApp.auth();
        this.firebaseDatabase = firebaseApp.firestore();
    }

    public get currentUser(): firebase.User | null {
        return this.firebaseAuth.currentUser;
    }

    private async insertCompanyInfo(userId: string, company: Company): Promise<Company> {
        try {
            return await this.firebaseDatabase
                .collection('users')
                .doc(userId)
                .set(company)
                .then((): Company => company);
        } catch (err) {
            throw err;
        }
    }

    public async createCompany(credentials: Credentials, company: Company): Promise<Company> {
        try {
            const userCredentials = await this.firebaseAuth.createUserWithEmailAndPassword(
                credentials.email,
                credentials.password,
            );

            const { user } = userCredentials;

            if (!user) throw new Error('User not found');

            return await this.insertCompanyInfo(user.uid, company);
        } catch (err) {
            throw err;
        }
    }

    public async signinUser(credentials: Credentials): Promise<firebase.auth.UserCredential> {
        try {
            return await this.firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
        } catch (err) {
            throw err;
        }
    }
}

export default new FirebaseService();
