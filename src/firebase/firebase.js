var firebaseConfig = {
    apiKey: "AIzaSyBlj5V9BZ6IyU_6sFeqUZtENpos-5UQaFM",
    authDomain: "share-post-app.firebaseapp.com",
    projectId: "share-post-app",
    storageBucket: "share-post-app.appspot.com",
    messagingSenderId: "236461700447",
    appId: "1:236461700447:web:ce5bdb0373cb37656af2ea"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider ,db ,storage}