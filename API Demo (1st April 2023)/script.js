// let adviceButton = document.getElementById("adviceButton");
// adviceButton.addEventListener("click", fetchAdvice);

// function fetchAdvice() {
//   fetch("https://randomuser.me/api")
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data.results[0].name.first);
//       let userName = document.createElement("h1");
//       userName.innerText = data.results[0].name.first;
//       let userPhoto = document.createElement("img");
//       userPhoto.setAttribute("src", data.results[0].picture.medium);
//       let user = document.createElement("div");
//       user.appendChild(userName);
//       user.appendChild(userPhoto);
//       document.getElementById("userData").appendChild(user);
//     });
// }

// https://jsonplaceholder.typicode.com/posts

let postsButton = document.getElementById("postsButton");
postsButton.addEventListener("click", fetchPosts);

function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   for (i = 0; i < data.length; i++) {
      //     let postTitle = document.createElement("h1");
      //     postTitle.innerText = data[i].title;
      //     let postContent = document.createElement("p");
      //     postContent.innerText = data[i].body;
      //     let post = document.createElement("div");
      //     post.appendChild(postTitle);
      //     post.appendChild(postContent);
      //     document.getElementById("allPosts").appendChild(post);
      //   }
      //   data.forEach((element) => {
      //     let postTitle = document.createElement("h1");
      //     postTitle.innerText = element.title;
      //     let postContent = document.createElement("p");
      //     postContent.innerText = element.body;
      //     let post = document.createElement("div");
      //     post.appendChild(postTitle);
      //     post.appendChild(postContent);
      //     document.getElementById("allPosts").appendChild(post);
      //   });
      document.getElementById("allPosts").innerHTML += data
        .map(
          (item) =>
            // `<div class="post"><h1>${item.title}</h1><p>${item.body}</p></div>`
            `<div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.body}</p>
                        <a href="#" class="btn btn-primary">Read Post</a>
                    </div>
                </div>
            </div>`
        )
        .join("");
    });
}
