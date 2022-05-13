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
  deleteDoc,
} from './exports.js';
import { auth } from './auth-firebase.js';
import { db } from './config-firebase.js';

export const addPosts = async (message, theme) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      userEmail: auth.currentUser.email,
      message,
      data: new Date().toLocaleString(),
      uid: auth.currentUser.uid,
      user: auth.currentUser.displayName,
      likes: [],
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

export const likes = async (postId, uid) => {
  const likesPosts = doc(db, 'posts', postId);
  try {
    return await updateDoc(likesPosts, {
      likes: arrayUnion(uid),
    });
  } catch (e) {
    return null;
  }
};

export const deslike = async (postId, uid) => {
  const likesPosts = doc(db, 'posts', postId);
  try {
    return await updateDoc(likesPosts, {
      likes: arrayRemove(uid),
    });
  } catch (e) {
    return null;
  }
};

// eslint-disable-next-line no-return-await
export const deletePost = async (postId) => await deleteDoc(doc(db, 'posts', postId));

export const editPosts = async (postId, message) => {
  const editPost = doc(db, 'posts', postId);
  return updateDoc(editPost, {
    message,
  });
};
