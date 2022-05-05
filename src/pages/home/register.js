import {
  userRegister,
} from '../../firebase/auth-firebase.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerRegister');

  const template = `
  <form class="formRegister">
  <label for="nome">Nome:</label>
  <input type="text" id="name" class="inputs-log" placeholder="Nome de usuário" required></input>
  <label for="e-mail">E-mail:</label>
  <input type"email" id="emailRegister" onchance="emailBlockingButton()" class="inputs-log" placeholder="exemplo@gmail.com" required></input>
  <label for="senha">Senha:</label>
  <input type="password" id="password" class="inputs-log" placeholder="Digite uma senha de 6 a 8 dígitos" required></input>
  <label for="check-Senha">Confirmar senha:</label>
  <input type="password" id="checkPassword" class="inputs-log" placeholder="Digite novamente sua senha" required></input>
  <p id="erro"></p>
  <a href="#feed">
  <button class="button-register-cas" id="buttonRegister" >Cadastrar</button>
  </a>
  </form>
  `;

  container.innerHTML = template;

  // const name = container.querySelector("#name");
  const email = container.querySelector('#emailRegister');
  const password = container.querySelector('#password');
  const erroMsg = container.querySelector('#erro');
  const checkPassword = container.querySelector('#checkPassword');
  // const btnRegister = container.querySelector("#buttonRegister")

  container.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value === checkPassword.value) {
      userRegister(email.value, password.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          const errorCode = error.code;
          erroMsg.classList.add('error');
          switch (errorCode) {
            case 'auth/email-already-in-use':
              erroMsg.innerHTML = 'Este email já está em uso';
              break;
            case 'auth/invalid-email':
              erroMsg.innerHTML = 'Email inválido';
              break;
            case 'auth/weak-password':
              erroMsg.innerHTML = 'Digite uma senha com no mínimo 6 caracteres';
              break;
            default:
              erroMsg.innerHTML = 'Não foi possível realizar o cadastro';
          }
          const errorMessage = error.message;
          return errorMessage;
        });
    } else {
      erroMsg.innerHTML = 'As senhas precisam ser iguais';
    }
  });

  //   function emailBlockingButton() {
  //     const email = container.querySelector("#emailRegister").value
  //     if (!email) {
  //       document.querySelector("#buttonRegister").disabled = true
  //     }else if (validateEmail(email)){
  //       document.querySelector("#buttonRegister").disabled = false
  //     }
  //     else{
  //       document.querySelector("#buttonRegister").disabled = true
  //     }
  //   }
  //   emailBlockingButton()

  //   function validateEmail(email) {
  //     var re = /\S+@\S+\.\S+/;
  //     return re.test(email);
  //   }

  return container;
};
