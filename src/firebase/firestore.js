import {
    collection,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { auth } from './auth-firebase.js';
import { db } from './config-firebase.js';

export const addPosts = async (message) => {
    try {
        const docRef = await addDoc(collection(db, 'posts'), {
            userEmail: auth.currentUser.email,
            message,
            data: new Date(),
            uid: auth.currentUser.uid,
            user: auth.currentUser.displayName,
            like: [],
        });
        return console.log('Document written with ID: ', docRef);
    } catch (e) {
        return console.error('Error adding document: ', e);
    }
};
