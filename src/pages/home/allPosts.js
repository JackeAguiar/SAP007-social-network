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
            <p class="userName">${user.user}</p>
            <p class="postDate">${user.data}</p>
            <div class="break"> <p class="postTheme">${user.theme}</p></div>
            <p class="postMessage">${user.message}</p>
            <p class="postLikes">${user.likes}</p>
            <button class="btnPopLike">
            <img class="popLike" src="images/img/popTimeLogo.png">
            </button>
        
    `
    container.innerHTML = templateAllPosts;
    return container;
}