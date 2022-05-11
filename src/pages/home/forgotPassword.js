import {
  forgetPassword,
} from '../../firebase/auth-firebase.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerFPasswword');

  const templateFPassword = `
  <form class="formFPassword">
  <label for="redPassword">Insira seu Email: </label>
  <input id="redPassword" class="inputPassword" type="text">
  <button class="btnFPassword" type="submit">Recupere Senha</button>
  <p class="redCheck"></p>
  </form>
  `;

  container.innerHTML = templateFPassword;

  const email = container.querySelector('#redPassword');
  const check = container.querySelector('.redCheck');
  const btnFPassword = container.querySelector('.btnFPassword');

  // função de recuperar a senha
  btnFPassword.addEventListener('click', (e) => {
    e.preventDefault();
    forgetPassword(email.value)
      .then(() => {
        check.innerHTML = 'Check sua caixa de mensagens do email inserido';
      })
      .catch((error) => {
        const errorCode = error.code;
        check.classList.add('error');
        switch (errorCode) {
          case 'auth/user-not-found':
            check.innerHTML = 'Email não cadastrado';
            break;
          default:
            check.innerHTML = 'Não foi possível redefinir senha';
        }
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  return container;
};
