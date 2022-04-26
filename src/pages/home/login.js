export default () => {
  const container = document.createElement('div');
  container.classList.add('containerLogin');

  const templateLogin = `
       <form>
      <label for="email">Email:</label>
      <input type="email" placeholder="exemple@gmail.com" id="emailLogin" class="email inputs-log" required></input>
    
      <label for="password">Senha:</label>
      <input type="password" placeholder="Digite uma senha de 6 a 8 digitos" maxlength="8" id="password" class="password inputs-log" required></input>

      <button class="button-login" id="buttonLogin">Log-In</button>
      <button class="google" id="google">GOOGLE</button>
       </form>
      
       <a href="/#register">
       <button class="button-register-lo" id="buttonRegister">Cadastrar-se</button>
       </a>
    `;
  container.innerHTML = templateLogin;
  return container;
};
