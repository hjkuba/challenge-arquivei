import axios from 'axios';
import { Credentials, Company } from '../types';
import indexedDBService from './indexedDB-service';

class FirebaseCloudFunctionsService {
    private baseUrl: string;
    private headers: Record<string, string>;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.headers = {
            'Content-type': 'application/json',
        };
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
                    headers: this.headers,
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
                        ...this.headers,
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
