import {
    auth,
} from '../../firebase/auth-firebase.js';
import {
    likes,
    deslike,
    deletePost,
    editPosts,
} from '../../firebase/firestore.js';


export function getAllPosts(post) {

    const container = document.createElement('li');
    container.classList.add('containerPosts');
    const userPost = post.user === auth.currentUser.displayName;
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
            ${userPost ? `
            <div class="postUser">
            <button class="btnDelet"><img class="imgDelet" src="images/img/delet.png"></button>
            <button class="btnEdit"><img class="imgEdit" src="images/img/edit.png"></button>
            </div>
            ` : ''}
            `

    container.innerHTML = templateAllPosts;

    const btnPopLike = container.querySelector(".btnPopLike");
    const contLikes = container.querySelector(".postLikes");

    
    btnPopLike.addEventListener('click', (e) => {
        e.preventDefault()
        const userLikes = post.likes
        const postId = post.id
        
        if (!userLikes.includes(auth.currentUser.uid)) {
            likes(postId, auth.currentUser.uid)
            .then(() => {
                userLikes.push((auth.currentUser.uid))
                const addLikeNum = Number(contLikes.innerHTML) + 1;
                contLikes.innerHTML = addLikeNum
            })
        } else {
            deslike(postId, auth.currentUser.uid)
            .then(() => {
                userLikes.splice(auth.currentUser.uid);
                const addLikeNum = Number(contLikes.innerHTML) - 1;
                contLikes.innerHTML = addLikeNum;
            })
        }
    })
    
    if(userPost){
        const btnDelet = container.querySelector(".btnDelet");
        btnDelet.addEventListener('click', (e) => {
            e.preventDefault()
            const confirme = confirm("Deseja realmente excluir sua postagem?")
            if(confirme === true){
                deletePost(post.id)
            }else{
                console.log(confirme)
            }
        })
    }
    
    if(userPost){
        const btnEdit = container.querySelector(".btnEdit");
        btnEdit.addEventListener('click', (e) => {
            e.preventDefault()
            editPosts(post.id)
        })

    }

    return container;
}