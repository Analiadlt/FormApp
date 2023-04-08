// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6B0YrVpx_91rRMy9IASfxqJ9V4p5qIE",
  authDomain: "formapp-b00ee.firebaseapp.com",
  projectId: "formapp-b00ee",
  storageBucket: "formapp-b00ee.appspot.com",
  messagingSenderId: "897822938491",
  appId: "1:897822938491:web:d664ed9acc97343c5f19de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(); // le indico que mi DB está en Firestore.

export const addCollectionsAndDocuments = async (user, responses) => {
  const userRef = doc(db, "users", user);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    try {
      await setDoc(userRef, responses);
      console.log("done! ");
    } catch (error) {
      console.log("fatal error! ");
    }
  }
  console.log(userRef);
};

export const getDocument = async (user) => {
  const collectionRef = doc(db, "users", user);
  const querySnapShot = await getDoc(collectionRef);

  if (querySnapShot) {
    return querySnapShot.data();
  } else {
    console.log("Fatal error!");
  }
};
