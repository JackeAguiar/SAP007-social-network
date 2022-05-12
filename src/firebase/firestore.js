import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { auth } from './auth-firebase.js';
import { db } from './config-firebase.js';

export const addPosts = async (message, theme) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      userEmail: auth.currentUser.email,
      message,
      data: new Date().toLocaleDateString('pt-BR'),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      like: [],
      theme,
    });
    return console.log('Document written with ID: ', docRef);
  } catch (e) {
    return console.error('Error adding document: ', e);
  }
};

export const showPosts = async () => {
  const arrayPosts = [];
  const sortPosts = query(collection(db, 'posts'), orderBy('data'));
  const querySnapshot = await getDocs(sortPosts);
  querySnapshot.forEach((post) => {
    const posts = post.data();
    const postId = post.id;
    posts.id = postId;
    arrayPosts.push(posts);
  });
  return arrayPosts;
};

export const likes = async (postId, user) => {
  const likesPosts = doc(db, 'posts', postId);
  try {
    await updateDoc(likesPosts, {
      like: arrayUnion(user)
    });
  } catch (error) {
    return error
  }
}

export const deslike = async (post, user) => {
  const likesPosts = doc(db, 'posts', post.id);
  try {
await updateDoc(likesPosts, {
  unlike: arrayRemove(user)
});
  } catch (error) {
    return error
  }
}

