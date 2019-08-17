import axios from 'axios';
import { Credentials, Company } from '../types';
import indexedDBService from './indexedDB-service';

class FirebaseCloudFunctionsService {
    private baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async signup(credentials: Credentials, company: Company): Promise<any> {
        try {
            await axios.post(
                `${this.baseUrl}/signup`,
                {
                    ...credentials,
                    ...company,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                },
            );

            return;
        } catch (err) {
            throw new Error(err.response.data.message);
        }
    }

    public async buyQueries(queries: number, data: any): Promise<void> {
        try {
            const userAuthObj = await indexedDBService.getAuthUserObject();
            await axios.post(
                `${this.baseUrl}/purchase`,
                {
                    queries,
                    ...data,
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        authorization: `${userAuthObj.stsTokenManager.accessToken}`,
                    },
                },
            );

            return;
        } catch (err) {
            throw new Error(err.response.data.message);
        }
    }
}

export default new FirebaseCloudFunctionsService('https://us-central1-arquivei-challenge.cloudfunctions.net/app');
