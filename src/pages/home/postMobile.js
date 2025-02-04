import {
  addPosts,
} from '../../firebase/firestore.js';
import {
  subirFileStore,
} from '../../firebase/storage.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeedMobile');

  const templateFeed = `
    <section class="topicsPost">
    <input type="checkbox" id="critica" class="critica" value="Critica">
    <label  class="topic" for="critica">Crítica</label>  
    <input type="checkbox" id="ondeAssistir"  class="ondeAssistir" value="Onde Assistir">
    <label class="topic" for="ondeAssistir">Onde Assistir</label>
    <input type="checkbox" id="resenha" class="resenha" value="Resenha">
    <label class="topic" for="resenha">Resenha</label>
    </section>
    <section class="menuPostMobile">
    
    <img class="imgUser imgPostMobile" src="images/img/Usuaria.png">
    
    <p>Como foi a sessão cinema?</p>
    <a href="#feed" class="btnFeed">X</a>
    <textarea id="inputPost" class="inputPost"></textarea>
    <input type="file" accept=".png, .jpg, .jpeg" class="inputFile"><img src="images/img/addFile.png" class="addFile"></input>
    <p id="error" class="error"></p>
    <button type="submit" class="btnAddPost">Postar</button>
    </section>

    `;
  container.innerHTML = templateFeed;

  const imgAddFile = container.querySelector('.addFile');
  const inputFile = container.querySelector('.inputFile');

  const btnPost = container.querySelector('.btnAddPost');

  const message = container.querySelector('.inputPost');

  const themesCri = container.querySelector('.critica');
  const themesOn = container.querySelector('.ondeAssistir');
  const themesRes = container.querySelector('.resenha');

  const errorPost = container.querySelector('.error');

  imgAddFile.addEventListener('click', () => {
    inputFile.click();
  });

  btnPost.addEventListener('click', async (e) => {
    e.preventDefault();
    const valueMessage = message.value;
    const imgPosts = container.querySelector('.inputFile').files[0];
    const errorMessage = 'É necessário preencher o campo de mensagem.';
    const errorTheme = 'É necessário adicionar um tema de postagem.';
    const errorCarac = 'A mensagem é muito grande';
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
    } else if (valueMessage.length > 1036) {
      errorPost.innerHTML = errorCarac;
    } else if (imgPosts === null) {
      await addPosts(valueMessage, theme, '');
    } else {
      const subirImgPost = await subirFileStore(imgPosts, 'imgPosts');
      await addPosts(valueMessage, theme, subirImgPost)
        .then(() => {
          window.location.hash = '#feed';
        });
    }
  });

  return container;
};
