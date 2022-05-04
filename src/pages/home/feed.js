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