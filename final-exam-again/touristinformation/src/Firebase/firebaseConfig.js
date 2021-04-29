import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyC2mK8xLpZhXpfMHGEg3NMgfb_7fBdoz1A",
  authDomain: "final-exam-383d5.firebaseapp.com",
  projectId: "final-exam-383d5",
  storageBucket: "final-exam-383d5.appspot.com",
  messagingSenderId: "768499680901",
  appId: "1:768499680901:web:3ff2b0b17b222f19404bec"
};

firebase.initializeApp(firebaseConfig);

export default firebase;