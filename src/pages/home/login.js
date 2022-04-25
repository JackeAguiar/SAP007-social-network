export default () => {
  const container = document.createElement('div');
  container.classList.add('containerLogin');

  const templateLogin = `
       <form>
      <label for="email">Email:</label>
      <input type="email" placeholder="exemple@gmail.com" id="email" class="email inputs-log" required></input>
    
      <label for="password">Senha:</label>
      <input type="password" placeholder="Digite uma senha de 6 a 8 digitos" maxlength="8" id="password" class="password inputs-log" required></input>

      <button class="button-login" id="button-login">Log-In</button>
      <a href="/#cadastro">
      <button class="button-register" id="button-register">Cadastrar-se</button>
      </a>
       </form>
    `;
  container.innerHTML = templateLogin;
  return container;
};
