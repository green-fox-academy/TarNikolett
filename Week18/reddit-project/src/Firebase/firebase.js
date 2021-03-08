import firebase from 'firebase/app';


var firebaseConfig = {
  apiKey: "AIzaSyCwLVlMaLUE74Y3xK9sBxA-NAoquYaIT-Y",
  authDomain: "reddit-98d9a.firebaseapp.com",
  projectId: "reddit-98d9a",
  storageBucket: "reddit-98d9a.appspot.com",
  messagingSenderId: "933569076611",
  appId: "1:933569076611:web:0adc565ab0c63609e76ab6"
};

firebase.initializeApp(firebaseConfig);

export { firebase };