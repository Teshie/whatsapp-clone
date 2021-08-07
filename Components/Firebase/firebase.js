import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdecuzb1DNSxgruUAgTiObt7wt837MJfg",
  authDomain: "whatsapp-clone-6d9ff.firebaseapp.com",
  projectId: "whatsapp-clone-6d9ff",
  storageBucket: "whatsapp-clone-6d9ff.appspot.com",
  messagingSenderId: "512697251824",
  appId: "1:512697251824:web:7f4f3e05ea1ca2a117cf35",
  measurementId: "G-VKMQ31JT66",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app(); //if firebase is initialized, then use the initialized firebase, otherwise initialize firebase app
const db = app.firestore(); //initialize firestore database
const auth = firebase.auth(); //initialize firebase authentication
const provider = new firebase.auth.GoogleAuthProvider(); //initialize google authentication

export { db, auth, provider }; //export database, authentication and provider for global usage
