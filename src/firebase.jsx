import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyC1x_I1VxUbCXoypf269dniqHUxVP2CSHk",
  authDomain: "farooq-olx-clone.firebaseapp.com",
  databaseURL: "https://farooq-olx-clone.firebaseio.com",
  projectId: "farooq-olx-clone",
  storageBucket: "farooq-olx-clone.appspot.com",
  messagingSenderId: "455612945717",
  appId: "1:455612945717:web:eb13c9b6ab2c1db2c2687c",
  measurementId: "G-R6R42CKLFH"
};

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyC1x_I1VxUbCXoypf269dniqHUxVP2CSHk",
//   authDomain: "farooq-olx-clone.firebaseapp.com",
//   databaseURL: "https://farooq-olx-clone.firebaseio.com",
//   projectId: "farooq-olx-clone",
//   storageBucket: "farooq-olx-clone.appspot.com",
//   messagingSenderId: "455612945717",
//   appId: "1:455612945717:web:eb13c9b6ab2c1db2c2687c",
//   measurementId: "G-R6R42CKLFH"
// });

// const auth = firebase.auth();


firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// export {auth};

