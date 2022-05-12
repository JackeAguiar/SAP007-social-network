import {
    auth,
} from '../../firebase/auth-firebase.js';
import {
    likes,
    deslike,
} from '../../firebase/firestore.js';


export function getAllPosts(post) {
    const container = document.createElement('li');
    container.classList.add('containerPosts');
    // const user = auth.currentUser;
    // const name = user.displayName;
    // const dates = data.getMonth()
    // const userPhoto = user.photoURL;

    const templateAllPosts = `
        
            <img class="imgUser" src="images/img/add.png">    
            <p class="userName">${post.user}</p>
            <p class="postDate">${post.data}</p>
            <div class="break"> <p class="postTheme">${post.theme}</p></div>
            <p class="postMessage">${post.message}</p>
            <p class="postLikes">${post.likes}</p>
            <button class="btnPopLike">
            <img class="popLike" src="images/img/popTimeLogo.png">
            </button>
            
            `

    container.innerHTML = templateAllPosts;
    
    const btnPopLike = container.querySelector(".btnPopLike")

    btnPopLike.addEventListener('click', (e) => {
        e.preventDefault()
        const userLikes = post.likes
        const postId = post.id
        
        if(!userLikes.includes(auth.currentUser.uid)){
            likes(postId, auth.currentUser.uid)
            .then(() => {
                userLikes.push((auth.currentUser.uid))
            console.log(userLikes)
            })
        }else{
            deslike(postId, auth.currentUser.uid)
            .then(() => {
                const numberOfLikes = userLikes.indexOf(auth.currentUser.uid)
                userLikes.splice(numberOfLikes, 1)
            })
        }
    })

    return container;
}