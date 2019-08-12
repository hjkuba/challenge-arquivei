import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Company, Credentials, Promotion } from '../types';

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

    public async checkAuthentication(): Promise<firebase.User | null> {
        return new Promise((resolve): void => {
            this.firebaseAuth.onAuthStateChanged((user): void => {
                if (user) {
                    return resolve(user);
                }

                resolve(null);
            });
        });
    }

    public async signinUser(credentials: Credentials): Promise<firebase.auth.UserCredential> {
        try {
            return await this.firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
        } catch (err) {
            throw err;
        }
    }

    public async signOut(): Promise<void> {
        return await this.firebaseAuth.signOut();
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

    public async fetchCompanyInfo(userId: string): Promise<Company> {
        try {
            return await this.firebaseDatabase
                .collection('users')
                .doc(userId)
                .get()
                .then((snapshot): firebase.firestore.DocumentData | undefined => snapshot.data())
                .then(
                    (data): Company => {
                        if (!data) {
                            throw new Error('Company not found');
                        }

                        return data as Company;
                    },
                );
        } catch (err) {
            throw err;
        }
    }

    public async fetchPromotion(): Promise<Promotion> {
        try {
            return await this.firebaseDatabase
                .collection('promotions')
                .doc('first2000')
                .get()
                .then((snapshot): firebase.firestore.DocumentData | undefined => snapshot.data())
                .then((data): any => {
                    if (!data) {
                        throw new Error('Promotion not found');
                    }

                    return data as Promotion;
                });
        } catch (err) {
            throw err;
        }
    }

    public async insertQueries(uid: string, queries: number): Promise<void> {
        try {
            await this.firebaseDatabase
                .collection('users')
                .doc(uid)
                .update({
                    totalQueries: firebase.firestore.FieldValue.increment(queries),
                    currentQueries: firebase.firestore.FieldValue.increment(queries),
                });
        } catch (err) {
            throw err;
        }
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
}

export default new FirebaseService();
