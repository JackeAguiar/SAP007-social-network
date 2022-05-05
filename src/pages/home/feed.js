export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFeed');

  const templateFeed = `
         <h1>Conseguimos <3</h1>
      `;
  container.innerHTML = templateFeed;
  return container;
};
