// import "../firebase/config-firebase"

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
  // const email = container.querySelector("#email");
  // const password = container.querySelector("#senha");
  // const checkPassword = container.querySelector("#checkSenha");*/

  // container.addEventListener("submit", (e) => {
  //   e.preventDefault();

  // })

  const inputs = container.querySelector("#emailRegister");
  const button = container.querySelector("#buttonRegister");
  const email = container.querySelector("#emailRegister");


  function checkInputs(inputs) {
    const filled = true;
    if (inputs.value === "") {
      filled = false;
    }
    return filled;
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(email)){
      return false
    }else{
      return true
    }
   }

  inputs.addEventListener("change", function () {
    if (checkInputs(inputs) && validateEmail(email)) {
      button.disabled = false;    
    } else {
      button.disabled = true;
  }})

  
  // const inpEmail = container.querySelector("#emailRegister")
  // inpEmail.addEventListener("keypress",emailBlockingButton())

  // function emailBlockingButton() {
  //   // const emailValid = isEmailValid();
  //   // container.querySelector("#buttonRegister").disabled = !emailValid;
  //   const email = container.querySelector("#emailRegister").value

  //   if(email === ""){
  //     container.querySelector("#buttonRegister").classList.add("false")
  //     console.log('false')
  //   }else{
  //     container.querySelector("#buttonRegister").classList.add("true")
  //     console.log('true')
  //   }
  // }


  // function isEmailValid(){   
  //   const email = container.querySelector("#emailRegister").value;
  //   if (!email){
  //     return false;
  //   }
  //   return validateEmail(email);
  // }

   

  return container;
};