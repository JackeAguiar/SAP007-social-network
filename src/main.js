import './firebase/config-firebase.js';
import login from './pages/home/login.js';
import home from './pages/home/mainHome.js';
import register from './pages/home/register.js';
import feed from './pages/home/feed.js';
import postMobile from './pages/home/postMobile.js';
import forgotPassword from './pages/home/forgotPassword.js';
import {
  logged,
} from './firebase/auth-firebase.js';

const main = document.querySelector('#main');

const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#forgotPassword':
      main.appendChild(forgotPassword());
      break;
    case '#feed':
      logged((log) => {
        if (log) {
          main.appendChild(feed());
        } else {
          window.location.hash = '#home';
        }
      });
      break;
    case '#postMobile':
      logged((log) => {
        if (log) {
          main.appendChild(postMobile());
        } else {
          window.location.hash = '#home';
        }
      });
      break;
    default:
      main.appendChild(home());
  }
};

window.addEventListener('load', () => {
  init();
});

window.addEventListener('hashchange', () => {
  init();
});
