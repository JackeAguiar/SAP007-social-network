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

  const btnFPassword = container.querySelector('.btnFPassword');
  const email = container.querySelector('#redPassword');
  const check = container.querySelector('.redCheck');

  btnFPassword.addEventListener('click', (e) => {
    e.preventDefault();
    forgetPassword(email.value)
      .then(() => {
        check.innerHTML = 'Check sua caixa de mensagens do email inserido';
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
  return container;
};
