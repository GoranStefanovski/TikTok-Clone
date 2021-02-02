import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVs07TonrIiStL8JT8H7HwbzQTxh5wVgM",
  authDomain: "tiktokclone-fb460.firebaseapp.com",
  projectId: "tiktokclone-fb460",
  storageBucket: "tiktokclone-fb460.appspot.com",
  messagingSenderId: "1057375211753",
  appId: "1:1057375211753:web:b08a0d3851eca626f2e078",
  measurementId: "G-014WDJMNGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;