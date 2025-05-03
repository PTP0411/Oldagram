const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let igPost = document.querySelector("#post")

function renderPost() {
    let allPost = ""

    posts.map((element, id) =>{
        allPost += `
        <div class = "info"> 
            <img class  = "avatar" src = "${element.avatar}">
            <div>
                <div><span class = "name bold">${element.name}</span></div>
                    <span class="location">${element.location}</span>
                </div>
        </div>

        <section>
            <img class="img" src="${element.post}">
        </section>

        <section class = "like-commnent">
            <!-- Like, comment, share -->
            <img class = "icon heart" 
                src="images/icon-heart.png" 
                alt = "Icon heart"
                id = "heart-${id}"
                onclick = "addRemoveLikes(${id})">

            <img class = "icon" 
                src = "images/icon-comment.png" 
                alt = "Icon comment">

            <img class = "icon" 
                src = "images/icon-dm.png" 
                alt = "Icon dm">

            <!-- Like counts -->
            <p class = "like-count bold" id = "likes-${id}">${element.likes} likes</p>
            <!-- Comment -->
            <div class = "comment">
                <p class = "other bold">${element.username} 
                <span class= "small">${element.comment}</span>
                </p>
            </div>
        </section>
        `
    })
    igPost.innerHTML = allPost
}

renderPost();

function addRemoveLikes(id){
    const iconLikes = document.querySelector(`#heart-${id}`);
    const likesCountEL = document.querySelector(`#likes-${id}`);
    let likes = posts[id].likes;
   
    iconLikes.classList.toggle("like-yes");
  
    
    if (iconLikes.classList.contains("like-yes")) {
          likes += 1;
          likesCountEL.textContent = likes + " likes";
          iconLikes.src = "images/heart-icon-red.png";
      } else {
          likesCountEL.textContent = likes + " likes";
          iconLikes.src = "images/icon-heart.png";
      }
}
