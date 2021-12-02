import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQJCv9cFs2yJJjtESizWKCJP1m6dWhK5Q",
  authDomain: "discord-clone-27307.firebaseapp.com",
  projectId: "discord-clone-27307",
  storageBucket: "discord-clone-27307.appspot.com",
  messagingSenderId: "567117260284",
  appId: "1:567117260284:web:111d8473db21d045323e79",
  measurementId: "G-ZTK26H5842"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebassApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
