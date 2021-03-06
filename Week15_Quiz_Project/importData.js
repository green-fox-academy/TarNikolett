import firebase from 'firebase';
import fs from 'fs';
import '@firebase/firestore';

//CSERÉLD LE A SAJÁT APPOD CONFIG OBJECTJÉRE!
const firebaseConfig = {
    apiKey: "AIzaSyAn137Q_upvBYG_F9s-3fFbc148QrOOBn0",
    authDomain: "quiz-4ae47.firebaseapp.com",
    projectId: "quiz-4ae47",
    storageBucket: "quiz-4ae47.appspot.com",
    messagingSenderId: "672733233990",
    appId: "1:672733233990:web:9eceaf422e1df1fe1ddb47"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const fileName = './quiz_app.hu.json';
let content = [];

fs.readFile(fileName, function read(err, data) {
  if (err) {
    throw err;
  }

  content = JSON.parse(data);

  for (let question of content.questions)
    db.collection('questions')
        .add(question)
        .then(() => {
          console.log('Document written');
         })
        .catch((error) => {
          console.error('Error adding document: ', error);
         });
});
