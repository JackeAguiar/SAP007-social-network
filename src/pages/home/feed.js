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
