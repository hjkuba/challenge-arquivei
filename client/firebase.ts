import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBTv-eWrygfDX5qIqZWSRQygGR5Vpm7JsY',
    authDomain: 'arquivei-challenge.firebaseapp.com',
    databaseURL: 'https://arquivei-challenge.firebaseio.com',
    projectId: 'arquivei-challenge',
    storageBucket: '',
    messagingSenderId: '991708908524',
    appId: '1:991708908524:web:d62c126a15e0e3d1',
};

firebase.initializeApp(config);

export default firebase;
