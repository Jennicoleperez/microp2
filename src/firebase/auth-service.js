import {
    signInWithPopup, 
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {auth, googleProvider} from './config';

export const signInWithGoogle = async () => {
    try {
       const result = await signInWithPopup(auth, googleProvider); 
       console.log(result);
    } catch (error) {
        console.error(error);
    }
};
export const registerWithEmailAndPassword = async (email, contrasena, extraData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, contrasena );
        console.log("Register email and password", result);
        await createUserProfile(result.user.uid);
    } catch (error) {
        console.log(error);
        
    }
};

export const logout = async (callback) => {
    try {
      await signOut(auth);
  
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error("Salida fallida", { error });
    }
  };