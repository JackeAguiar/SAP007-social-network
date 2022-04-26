import "./pages/firebase/config-firebase.js";
import login from "./pages/home/login.js";
import home from "./pages/home/mainHome.js";
import register from "./pages/home/register.js";

const main = document.querySelector("#main")

const init = () => {
        main.innerHTML="";
        switch (window.location.hash) {
            case "#login":
                main.appendChild(login());
                break;
            case "#register":
                main.appendChild(register());
                break;
            default:
                main.appendChild(home());
        }
    

}

window.addEventListener("load", () => {
    init()
})

window.addEventListener("hashchange", () => {
    init()
})