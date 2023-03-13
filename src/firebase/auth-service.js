// Todos los métodos de autenticación
import {signInWithPopup,
    signOut,
     createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      getAdditionalUserInfo
   } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from './config';
import { createUserProfile } from './users-service';


 export const signInWithGoogle = async () => {
     const navigate = useNavigate();
     try{
         const result = await signInWithPopup(auth, googleProvider);
         console.log(result);
       
         const { isNewUser } = getAdditionalUserInfo(result);
       
         if(isNewUser){
           
           

            await createUserProfile(result.user.uid, {
                email: result.user.email,
                name: result.user.displayName,
                password: '',
                rol: 'user',
            })
         }

     }catch(error){
         console.error(error);

     }
 };



export const registerWithEmailAndPassword = async (email,
    password,
    extraData
    ) => {
   try{
       const result = await createUserWithEmailAndPassword(auth, email, password);
       console.log("REGISTER EMAIL AND PASSWORD", result);
       await createUserProfile(result.user.uid, {
           email,
           ...extraData
       });
   }catch(error){
       console.error(error);
   }
};

export const loginWithEmailAndPassword = async (email, password) => {
   try{
       const result = await signInWithEmailAndPassword(auth, email, password);
       console.log('LOGIN', result);
   }catch(error){
       console.error(error);
   }
};

// export const signInWithEmailAndPassword = async () => {};

export const logout = async () => {
   try{
       await signOut(auth);
   }catch(error){}
};