
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyCYl9dfdyA6t4UrhJAtK3AMHJTPGWduKvQ",
  authDomain: "webcarros-e996a.firebaseapp.com",
  projectId: "webcarros-e996a",
  storageBucket: "webcarros-e996a.appspot.com",
  messagingSenderId: "689647346732",
  appId: "1:689647346732:web:44e7b9c2d562c2f3cb9d89"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };