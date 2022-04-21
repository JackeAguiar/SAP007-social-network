import ""


export default () => {
  const container = document.createElement('div');
  container.classList.add('containerCadastro');

  const template = `
  <label for="nome">Nome:</label>
  <input type="text" id="name" class="inputs-log" placeholder="Nome de usuário"></input>

  <label for="e-mail">E-mail:</label>
  <input type"text" id="email" class="inputs-log" placeholder="exemplo@gmail.com"></input>

  <label for="senha">Senha:</label>
  <input type="password" id="senha" class="inputs-log" placeholder="Digite uma senha de 6 a 8 dígitos"></input>

  <label for="check-Senha">Confirmar senha:</label>
  <input type="password" id="checkSenha" class="inputs-log" placeholder="Digite novamente sua senha"></input>
  
  <button class="botaoCadastro" id="botaoCadastro">Cadastrar</button>
  `;

  container.innerHTML = template;

  const name = container.querySelector("#name");
  const email = container.querySelector("#email");
  const password = container.querySelector("#senha");
  const checkPassword = container.querySelector("#checkSenha");

  container.addEventListener("submit", (e) => {
    e.preventDefault();

  })


  return container;
};
