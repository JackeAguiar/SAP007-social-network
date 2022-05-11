// import {
//     auth,
//   } from '../../firebase/auth-firebase.js';

export function getAllPosts(user) {
    const container = document.createElement('li');
    container.classList.add('containerPosts');
    // const user = auth.currentUser;
    // const name = user.displayName;
    // const dates = data.getMonth()
    // const userPhoto = user.photoURL;

    const templateAllPosts = `
        
            <img class="imgUser" src="images/img/add.png">
            <h1>${user.user}</h1>
            <p>${user.data}</p>
            <p>${user.message}</p><br>
            <p>${user.theme}</p><br>
            <p>${user.likes}</p><br>
            <button>
            <img class="popLike" src="images/img/popTimeLogo.png">
            </button>
        
    `
    container.innerHTML = templateAllPosts;
    return container;
}