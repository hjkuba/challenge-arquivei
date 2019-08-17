import firebaseConfig from '../firebase-config.json';

class IndexedDBService {
    private dbName: string;
    private storeName: string;
    private objectName: string;

    public constructor(dbName: string, storeName: string, objectName: string) {
        this.dbName = dbName;
        this.storeName = storeName;
        this.objectName = objectName;
    }

    private async getIndexedDB(): Promise<IDBDatabase> {
        const openDBRequest = indexedDB.open(this.dbName);

        return new Promise((resolve, reject): void => {
            openDBRequest.onsuccess = (): void => {
                resolve(openDBRequest.result);
            };

            openDBRequest.onerror = (): void => {
                reject(openDBRequest.error);
            };
        });
    }

    private async getObjectFromStore(key: string, objectStore: IDBObjectStore): Promise<any> {
        const getObjectRequest = objectStore.get(key);

        return new Promise((resolve, reject): void => {
            getObjectRequest.onsuccess = (): void => {
                resolve(getObjectRequest.result.value);
            };

            getObjectRequest.onerror = (): void => {
                reject(getObjectRequest.error);
            };
        });
    }

    public async getAuthUserObject(): Promise<any> {
        try {
            const db = await this.getIndexedDB();
            const transaction = db.transaction([this.storeName]);
            const objStore = transaction.objectStore(this.storeName);
            const obj = await this.getObjectFromStore(this.objectName, objStore);
            return obj;
        } catch (err) {
            throw err;
        }
    }
}

export default new IndexedDBService(
    'firebaseLocalStorageDb',
    'firebaseLocalStorage',
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
);
