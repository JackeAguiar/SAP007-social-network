import {
  userLogIn,
  googleLogIn,
} from '../../firebase/auth-firebase.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerLogin');

  const templateLogin = `
       <form class="formLogIn">
      <label for="email">Email:</label>
      <input type="email" placeholder="exemple@gmail.com" id="emailLogin" class="email inputs-log" required></input>
    
      <label for="password">Senha:</label>
      <input type="password" placeholder="Digite uma senha de 6 a 8 digitos" maxlength="8" id="password" class="password inputs-log" required></input>
      <img class="seePassword" src="images/img/seePassword.png">
      <p id="erro"></p>
      <a href="#feed">
      <button class="button-login" id="buttonLogin">Log-In</button>
      </a>
      <a href="#feed" class="linkGoogle">
      <button class="google" id="google">Ou click aqui e faça seu Log-In com<img alt="Google sign-in" 
      src="images/img/googleG.webp" class="btnGoogleImg"/></button>
      </a>
      <a href="#forgotPassword" class="fPassword">
      Esqueceu sua senha?
      </a>
      </form>
      
       <a href="#register" class="linkRegister">
       <button class="button-register-lo" id="buttonRegister">Cadastrar-se</button>
       </a>
       `;
  container.innerHTML = templateLogin;

  const btnMenu = document.getElementById('btnMobile');
  const email = container.querySelector('#emailLogin');
  const password = container.querySelector('#password');
  const erroMsg = container.querySelector('#erro');
  const btnGoogle = container.querySelector('#google');
  const imgVisi = container.querySelector('.seePassword');

  imgVisi.addEventListener('click', (e) => {
    e.preventDefault();
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });

  container.addEventListener('submit', (e) => {
    e.preventDefault();
    userLogIn(email.value, password.value)
      .then(() => {
        window.location.hash = '#feed';
        btnMenu.classList.remove('out');
      })
      .catch((error) => {
        const errorCode = error.code;
        erroMsg.classList.add('error');
        switch (errorCode) {
          case 'auth/user-not-found':
            erroMsg.innerHTML = 'Email não cadastrado';
            break;
          case 'auth/wrong-password':
            erroMsg.innerHTML = 'Senha incorreta';
            break;
          default:
            erroMsg.innerHTML = 'Não foi possível realizar o log-in';
        }
        const errorMessage = error.message;
        return errorMessage;
      });
  });

  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogIn()
      .then(() => {
        window.location.hash = '#feed';
        btnMenu.classList.remove('out');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return errorMessage;
      });
  });

  return container;
};
