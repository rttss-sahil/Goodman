
import firebase from 'firebase';

export const config = {
    apiKey: 'AIzaSyA9TMLfKNuOXQqk1OHTzpkT5ndtiMd65pU',
    authDomain: "goodman-rttss.firebaseapp.com",
    projectId: "goodman-rttss",
    databaseURL: "https://goodman-rttss-default-rtdb.firebaseio.com/",
    storageBucket: "goodman-rttss.appspot.com",
    messagingSenderId: "1045108696296",
    appId: "1:1045108696296:web:696bb444081af28d11955d",
    measurementId: "G-XG3P1VQVXM"
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export default f = {
    firebase,
    auth: firebase.auth(),
    database: firebase.database(),
    storage: firebase.storage()
}