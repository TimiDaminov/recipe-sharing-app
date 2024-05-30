
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWdVwOIGvbY3jL_O5iHr1PBE-oB_MVER4",
  authDomain: "cook-book-d5d82.firebaseapp.com",
  projectId: "cook-book-d5d82",
  storageBucket: "cook-book-d5d82.appspot.com",
  messagingSenderId: "624988366390",
  appId: "1:624988366390:web:40b5a0dacf5f36a2211a97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 

export { db, storage };
