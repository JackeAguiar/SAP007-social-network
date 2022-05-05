import {
    getFirestore,
    collection,
    addDoc
} from "firebase/https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { async } from "regenerator-runtime";


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

export async function addPosts(userEmail, message) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            Tema: " ",
            userEmail,
            message,
            date: new Date().toLocaleDateString('pt-br'),
        })
        return docRef.id;
    } catch (e) {
        return null;
    }
}