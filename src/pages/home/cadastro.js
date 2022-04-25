export default () => {
  const container = document.createElement('div');
  container.classList.add('containerCadastro');

  const template = `
  <form>
  <label for="nome">Nome:</label>
  <input type="text" id="name" class="inputs-log" placeholder="Nome de usuário" required></input>

  <label for="e-mail">E-mail:</label>
  <input type"email" id="e-mail" class="inputs-log" placeholder="exemplo@gmail.com" required></input>

  <label for="senha">Senha:</label>
  <input type="password" id="senha" class="inputs-log" placeholder="Digite uma senha de 6 a 8 dígitos" required></input>

  <label for="check-Senha">Confirmar senha:</label>
  <input type="password" id="checkSenha" class="inputs-log" placeholder="Digite novamente sua senha" required></input>
  
  <button class="botaoLogIn" id="botaoLogIn">Cadastrar</button>
  </form>
  `;

  container.innerHTML = template;
  return container;
};
