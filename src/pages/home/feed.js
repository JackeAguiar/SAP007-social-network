// import { template } from '@babel/core';
import {
  addPosts,
} from '../../firebase/firestore.js';
import {
  auth,
  notLogged
} from '../../firebase/auth-firebase.js';

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
          <p id="error" class="error"></p>
          <input type="checkbox" class="inputDesk" id="critica" name="theme" value="critica">
          <label  class="topicDesk" for="critica">Crítica</label>  
          <input type="checkbox" class="inputDesk" id="ondeAssistir" name="theme" value="ondeAssistir">
          <label class="topicDesk" for="ondeAssistir">Onde Assistir</label>
          <input type="checkbox" class="inputDesk" id="resenha" name="theme" value="resenha" >
          <label class="topicDesk" for="resenha">Resenha</label>
          <img src="./pages/img/addFile.png" class="addFile">
          <input type="file" accept=".png, .jpg, .jpeg" class="inputFile"></input>
          <button type="submit" class="btnAddPostDesk">Postar</button>
         </section>

         <a href="#postMobile" class="btn">
         <img class="imgPosteAqui" src="./pages/img/postAqui.png">
         </a>
         <ul class="postsFeed">
         </ul>
      `;
  container.innerHTML = templateFeed;

  const imgAddFile = container.querySelector('.addFile');
  const inputFile = container.querySelector('.inputFile');
  const btnClean = container.querySelector('.btnClean');
  const message = container.querySelector('.inputPost');
  const btnPost = container.querySelector('.btnAddPostDesk');
  const errorPost = container.querySelector('.error');
  const themesCri = container.querySelector('#critica');
  const themesOn = container.querySelector('#ondeAssistir');
  const themesRes = container.querySelector('#resenha');
  const btnOut = document.querySelector('.btnOut');
  const nav = document.getElementById('nav');
  const btnMobile = document.getElementById('btnMobile');
  const btnMenu = document.getElementById('btnMobile');

  function toggleMenu() {
    nav.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);

  themesCri.addEventListener('click', () => {
    if (themesCri.checked === true) {
      console.log(themesCri.value);
    } else {
      return false;
    }
  });

  themesOn.addEventListener('click', () => {
    if (themesOn.checked === true) {
      console.log(themesOn.value);
    } else {
      return false;
    }
  });

  themesRes.addEventListener('click', () => {
    if (themesRes.checked === true) {
      console.log(themesRes.value);
    } else {
      return false;
    }
  });

  const user = auth.currentUser;
  const name = user.displayName;
  const userPhoto = user.photoURL;
  console.log(name);
  console.log(userPhoto);

  imgAddFile.addEventListener('click', () => {
    inputFile.click();
  });

  btnClean.addEventListener('click', () => {
    message.value = '';
  });

  btnPost.addEventListener('click', async (e) => {
    e.preventDefault();
    const valueMessage = message.value;
    const errorMessage = 'É necessário preencher o campo de mensagem.';
    const errorTheme = 'É necessário adicionar um tema de postagem.';
    // const themes = container.getElementsByName('theme');

    if ((valueMessage === ' ' || !valueMessage)) {
      errorPost.innerHTML = errorMessage;
    } else if ((themesCri.checked === false && themesOn.checked === false && themesRes.checked === false)) {
      errorPost.innerHTML = errorTheme;
    } else {
      await addPosts(valueMessage);
    }
  });

  btnOut.addEventListener('click', (e) => {
    e.preventDefault();
    notLogged()
      .then(() => {
        window.location.hash = '#login';
        nav.classList.remove('active');
        btnMenu.classList.add('out');
      }).catch((error) => {
        error
      });
  });

  return container;
}