import {
  addPosts,
  showPosts,
} from '../../firebase/firestore.js';
import {
  auth,
  notLogged,
} from '../../firebase/auth-firebase.js';
import {
  getAllPosts,
} from './allPosts.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeed');

  const templateFeed = `

         <section class="postDesktop">
          <div class="containerImgUserDesk">
            <img class="imgUser" src="images/img/add.png">
          </div>
          <p>Como foi a sessão cinema?</p>
          <button class="btnClean">X</button>
          <textarea id="inputPost" class="inputPost"></textarea>
          <p id="error" class="error"></p>
          <input type="checkbox" class="inputDesk" id="critica" name="theme" value="Critica">
          <label  class="topicDesk" for="critica">Crítica</label>  
          <input type="checkbox" class="inputDesk" id="ondeAssistir" name="theme" value="Onde Assistir">
          <label class="topicDesk" for="ondeAssistir">Onde Assistir</label>
          <input type="checkbox" class="inputDesk" id="resenha" name="theme" value="Resenha" >
          <label class="topicDesk" for="resenha">Resenha</label>
          <img src="images/img/addFile.png" class="addFile">
          <input type="file" accept=".png, .jpg, .jpeg" class="inputFile"></input>
          <button type="submit" class="btnAddPostDesk">Postar</button>
         </section>

         <a href="#postMobile" class="btnPostHere">
         <img class="imgPosteAqui" src="images/img/postAqui.png">
         </a>
         <ul class="sectionPosts">
         </ul>
      `;
  container.innerHTML = templateFeed;

  const imgAddFile = container.querySelector('.addFile');
  const inputFile = container.querySelector('.inputFile');

  const message = container.querySelector('.inputPost');
  const errorPost = container.querySelector('.error');
  const areaPosts = container.querySelector('.sectionPosts');

  const nav = document.getElementById('nav');

  const themesCri = container.querySelector('#critica');
  const themesOn = container.querySelector('#ondeAssistir');
  const themesRes = container.querySelector('#resenha');

  const btnOut = document.querySelector('.btnOut');
  const btnPost = container.querySelector('.btnAddPostDesk');
  const btnClean = container.querySelector('.btnClean');
  const btnMobile = document.getElementById('btnMobile');
  const btnMenu = document.getElementById('btnMobile');

  // ativar e desativar o menu hamburguer
  function toggleMenu() {
    nav.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);

  const user = auth.currentUser;
  const name = user.displayName;
  const userPhoto = user.photoURL;
  console.log(name);
  console.log(userPhoto);

  // função de imagem input file
  imgAddFile.addEventListener('click', () => {
    inputFile.click();
  });

  // funçaõ de limpar o textArea
  btnClean.addEventListener('click', () => {
    message.value = '';
  });

  // mandar mensagem para firestore
  btnPost.addEventListener('click', async (e) => {
    e.preventDefault();
    const valueMessage = message.value;
    const errorMessage = 'É necessário preencher o campo de mensagem.';
    const errorTheme = 'É necessário adicionar um tema de postagem.';
    const arrayTheme = [];

    if (themesCri.checked === true) {
      arrayTheme.push(themesCri.value);
    }

    if (themesOn.checked === true) {
      arrayTheme.push(themesOn.value);
    }

    if (themesRes.checked === true) {
      arrayTheme.push(themesRes.value);
    }

    const theme = arrayTheme.join(' | ');

    if ((valueMessage === ' ' || !valueMessage)) {
      errorPost.innerHTML = errorMessage;
    } else if
    ((themesCri.checked === false && themesOn.checked === false && themesRes.checked === false)) {
      errorPost.innerHTML = errorTheme;
    } else {
      await addPosts(valueMessage, theme);
    }
  });

  // funçaõ de sair
  btnOut.addEventListener('click', (e) => {
    e.preventDefault();
    notLogged()
      .then(() => {
        window.location.hash = '#login';
        nav.classList.remove('active');
        btnMenu.classList.add('out');
      }).catch((error) => error);
  });

  const showAllPosts = async () => {
    const timeline = await showPosts();
    timeline.forEach((post) => {
      const postFeeds = getAllPosts(post);
      areaPosts.prepend(postFeeds);
    });
  };
  showAllPosts();
  return container;
};
