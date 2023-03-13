import {doc, setDoc} from 'firebase/firestore';
import {db}  from './config';

export async function createUserWithEmailAndPassword(userId, data){
    return setDoc(doc(db, 'users', userId), data);
}