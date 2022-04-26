import {userRegister} from "../firebase/auth-firebase.js";

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerRegister');

  const template = `
  <form>
  <label for="nome">Nome:</label>
  <input type="text" id="name" class="inputs-log" placeholder="Nome de usuário" required></input>

  <label for="e-mail">E-mail:</label>
  <input type"email" id="emailRegister" onchance="emailBlockingButton()" class="inputs-log" placeholder="exemplo@gmail.com" required></input>

  <label for="senha">Senha:</label>
  <input type="password" id="password" class="inputs-log" placeholder="Digite uma senha de 6 a 8 dígitos" required></input>

  <label for="check-Senha">Confirmar senha:</label>
  <input type="password" id="checkPassword" class="inputs-log" placeholder="Digite novamente sua senha" required></input>
  
  <button class="button-register-cas" id="buttonRegister" >Cadastrar</button>
  </form>
  `;

  container.innerHTML = template;

  // const name = container.querySelector("#name");
  const email = container.querySelector("#emailRegister");
  const password = container.querySelector("#password");
  // const checkPassword = container.querySelector("#checkSenha");*/

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userRegister(email.value, password.value);

  })





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
