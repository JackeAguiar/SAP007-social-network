import { addPosts } from "../../firebase/firestore.js";

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeed');

  const templateFeed = `
         <h1>Conseguimos <3</h1>

         <a href="#postMobile" class="btn">
         <img class="imgPosteAqui" src="./pages/img/postAqui.png">
         </a>
      `;
  container.innerHTML = templateFeed;
  return container;
};

const 



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