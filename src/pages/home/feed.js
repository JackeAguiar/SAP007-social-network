import { addPosts } from "../../firebase/firestore.js";

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeed');

  const templateFeed = `

         <section class="postDesktop">
          <div class="containerImgUserDesk">
            <img class="imgUser" src="./pages/img/add.png">
          </div>
          <p>Como foi a sessão cinema?</p>
          <button class="btnClean">X</button>
          <textarea id="inputPost" class="inputPost"></textarea>
          <input type="checkbox" class="inputDesk" id="critica">
          <label  class="topicDesk" for="critica">Crítica</label>  
          <input type="checkbox" class="inputDesk" id="ondeAssistir">
          <label class="topicDesk" for="ondeAssistir">Onde Assistir</label>
          <input type="checkbox" class="inputDesk" id="resenha">
          <label class="topicDesk" for="resenha">Resenha</label>
          <img src="./pages/img/addFile.png" class="addFile">
          <input type="file" accept=".png, .jpg, .jpeg" class="inputFile"></input>
          <button type="submit" class="btnAddPostDesk">Postar</button>
         </section>

         <a href="#postMobile" class="btn">
         <img class="imgPosteAqui" src="./pages/img/postAqui.png">
         </a>
      `;
  container.innerHTML = templateFeed;

  const imgAddFile = container.querySelector('.addFile');
  const inputFile = container.querySelector('.inputFile');
  const btnClean = container.querySelector('.btnClean');
  const inputTextArea = container.querySelector('.inputPost');

  imgAddFile.addEventListener('click', () => {
    inputFile.click();
  });

  btnClean.addEventListener('click', () => {
    inputTextArea.value = '';
  });

  return container;
};
<<<<<<< HEAD

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
=======
>>>>>>> 531d8217abe15e962fc74d8f036debbcec8b2d1f
