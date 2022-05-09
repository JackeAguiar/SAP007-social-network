import { addPosts } from "../../firebase/firestore.js";
//import { auth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeed');

  const templateFeed = `
<<<<<<< HEAD
         <h1>Conseguimos <3</h1>
      `;
  container.innerHTML = templateFeed;
=======

         <section class="postDesktop">
          <div class="containerImgUserDesk">
            <img class="imgUser" src="./pages/img/add.png">
          </div>
          <p>Como foi a sessão cinema?</p>
          <button class="btnClean">X</button>
          <textarea id="inputPost" class="inputPost"></textarea>
          <p id="error" class="error"></p>
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
  const message = container.querySelector('.inputPost')
  const btnPost = container.querySelector('.btnAddPostDesk')
  const errorPost = container.querySelector('.error')

  imgAddFile.addEventListener('click', () => {
    inputFile.click();
  });

  btnClean.addEventListener('click', () => {
    message.value = '';
  });

  btnPost.addEventListener('click', async (e) => {
    e.preventDefault()

    const valueMessage = message.value;
    const errorMessage = "É necessário preencher o campo de mensagem."

    if (valueMessage === " " || !valueMessage) {
      errorPost.innerHTML = errorMessage
    } else {
      await addPosts(valueMessage);
    }
  });

>>>>>>> 531d8217abe15e962fc74d8f036debbcec8b2d1f
  return container;
};