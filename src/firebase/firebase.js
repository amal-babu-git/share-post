
import firebase from "firebase";


var firebaseConfig = {
    
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider ,db ,storage}