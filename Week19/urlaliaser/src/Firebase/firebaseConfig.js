import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyBXPaUQS8SEBBk3rti9u7cwjnFD5dNhuQU",
  authDomain: "urlaliaser.firebaseapp.com",
  projectId: "urlaliaser",
  storageBucket: "urlaliaser.appspot.com",
  messagingSenderId: "800599824228",
  appId: "1:800599824228:web:1e1d264632a83f3db94c71"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;