import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Company, Credentials, Promotion } from '../types';
import firebaseConfig from '../firebase-config.json';

const firebaseApp: firebase.app.App = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

class FirebaseService {
    private firebaseAuth: firebase.auth.Auth;
    private firebaseDatabase: firebase.database.Database;

    public constructor() {
        this.firebaseAuth = firebaseApp.auth();
        this.firebaseDatabase = firebaseApp.database();
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

    public async fetchCompanyInfo(userId: string): Promise<any> {
        try {
            return await this.firebaseDatabase
                .ref(`users/${userId}`)
                .once('value')
                .then((snapshot): any => snapshot.val())
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

    public async fetchPromotion(): Promise<any> {
        try {
            return await this.firebaseDatabase
                .ref('promotions/first2000')
                .once('value')
                .then((snapshot): any => snapshot.val())
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
}

export default new FirebaseService();
