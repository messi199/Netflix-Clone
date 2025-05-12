
import { initializeApp } from "firebase/app";
import {getAuth, 
    createUserWithEmailAndPassword,
     EmailAuthProvider, 
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyD_4owd0akU0f5X7b6oIdwi3ZxMWGQPevU",
  authDomain: "netflix-clone-1047b.firebaseapp.com",
  projectId: "netflix-clone-1047b",
  storageBucket: "netflix-clone-1047b.firebasestorage.app",
  messagingSenderId: "714211560101",
  appId: "1:714211560101:web:e2d64a2c0fa621db309b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        AuthProvider: "local",
        email,
       });
    }catch(error)
    {
      console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    if (error.code) {
      toast.error(error.code.split('/')[1].split('-').join(' '));
    } else {
      toast.error("An unexpected error occurred.");
    }
  }
};


const logout = ()=>{
    signOut(auth);
}


export{auth, db, login, signup, logout};