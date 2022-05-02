export default () => {
    const container = document.createElement('div');
    container.classList.add('containerFeedMobile');
  
    const templateFeed = `
    <section class="topicsPost">
    <input type="checkbox" id="critica">
    <label  class="topic" for="critica">Crítica</label>  
    <input type="checkbox" id="ondeAssistir">
    <label class="topic" for="ondeAssistir">Onde Assistir</label>
    <input type="checkbox" id="resenha">
    <label class="topic" for="resenha">Resenha</label>
    </section>
    <section class="menuPostMobile">
    <div class="containerImgUser">
    <img class="imgUser" src="./pages/img/add.png">
    </div>
    <label for="inputPost">Como foi a sessão cinema?</label>
    <textarea id="inputPost" class="inputPost"></textarea>
    <img src="./pages/img/addFile.png" class="addFile">
    <input type="file" accept=".png, .jpg, .jpeg" class="inputFile"></input>
    <button type="submit" class="btnAddPost">Postar</button>
    </section>

    `;
    container.innerHTML = templateFeed;
    return container;
  };