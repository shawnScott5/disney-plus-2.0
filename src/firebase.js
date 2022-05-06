import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDxlAPAsLu4XU-Am8z4jyf8Q3DL0_mlZCg",
    authDomain: "disneyplus-clone-79e56.firebaseapp.com",
    projectId: "disneyplus-clone-79e56",
    storageBucket: "disneyplus-clone-79e56.appspot.com",
    messagingSenderId: "648369739554",
    appId: "1:648369739554:web:bf92aeeb983b2bcd57f77b",
    measurementId: "G-P7MSG2EGNL"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;