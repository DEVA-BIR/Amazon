// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARmBS541hyo0fuV-t0-9d52sQcTcTNY0o",
  authDomain: "clone-1f6d2.firebaseapp.com",
  projectId: "clone-1f6d2",
  storageBucket: "clone-1f6d2.firebasestorage.app",
  messagingSenderId: "297814355036",
  appId: "1:297814355036:web:08e1668cb72dacb598ca99",
  measurementId: "G-E1LDSS6CS2"
  };
  /*// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARmBS541hyo0fuV-t0-9d52sQcTcTNY0o",
  authDomain: "clone-1f6d2.firebaseapp.com",
  projectId: "clone-1f6d2",
  storageBucket: "clone-1f6d2.firebasestorage.app",
  messagingSenderId: "297814355036",
  appId: "1:297814355036:web:08e1668cb72dacb598ca99",
  measurementId: "G-E1LDSS6CS2"
};*/ 
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const app = initializeApp(firebaseConfig);
  //const db = firebaseApp.firestore();
  const db = getFirestore(firebaseApp); 
  //const auth = firebase.auth();
  export const auth = getAuth(app);
  //export {db,auth};
 
export { firestore }; 
/* */



