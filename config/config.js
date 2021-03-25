import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA9TMLfKNuOXQqk1OHTzpkT5ndtiMd65pU",
    authDomain: "goodman-rttss.firebaseapp.com",
    projectId: "goodman-rttss",
    storageBucket: "goodman-rttss.appspot.com",
    messagingSenderId: "1045108696296",
    appId: "1:1045108696296:web:696bb444081af28d11955d",
    measurementId: "G-XG3P1VQVXM"
};


firebase.initializeApp(firebaseConfig);



export default configs = {
    f: firebase,
    database: firebase.database(),
    auth: firebase.auth(),
    storage: firebase.storage(),

}