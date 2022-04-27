import "../firebase/config-firebase.js"

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerRegister');

  const template = `
  <form>
  <label for="nome">Nome:</label>
  <input type="text" id="name" class="inputs-log" placeholder="Nome de usuário" required></input>

  <label for="e-mail">E-mail:</label>
  <input type"email" id="emailRegister" class="inputs-log" placeholder="exemplo@gmail.com" required></input>

  <label for="senha">Senha:</label>
  <input type="password" id="password" class="inputs-log" placeholder="Digite uma senha de 6 a 8 dígitos" required></input>

  <label for="check-Senha">Confirmar senha:</label>
  <input type="password" id="checkPassword" class="inputs-log" placeholder="Digite novamente sua senha" required></input>
  
  <button class="button-register-cas" id="buttonRegister" disabled="disabled" type="button">Cadastrar</button>
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

  // const inputs = container.querySelector("#emailRegister");
  // const button = container.querySelector("#buttonRegister");
  // const email = container.querySelector("#emailRegister");


  // function checkInputs(inputs) {
  //   const filled = true;
  //   if (inputs.value === "") {
  //     filled = false;
  //   }
  //   return filled;
  // };

  // function validateEmail(email) {
  //   const re = /\S+@\S+\.\S+/;
  //   if(re.test(email)){
  //     return gitfalse
  //   }else{
  //     return true
  //   }
  //  }

  // inputs.addEventListener("change", function () {
  //   if (checkInputs(inputs) && validateEmail(email)) {
  //     button.disabled = false;    
  //   } else {
  //     button.disabled = true;
  // }})

  
  

   

  return container;
};