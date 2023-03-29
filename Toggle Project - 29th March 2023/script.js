// let data = [
//   {
//     id: 1,
//     title: "This is the first post",
//     content:
//       "Cillum aliqua eu nisi eu voluptate eu nisi reprehenderit dolore aliqua consequat nulla. Quis irure occaecat qui consectetur consequat non ex. Mollit adipisicing Lorem qui eiusmod magna Lorem magna aute est.",
//     date: new Date(),
//   },
//   {
//     id: 2,
//     title: "This is the second post",
//     content:
//       "Exercitation ipsum Lorem ipsum quis commodo ad duis duis. Aliqua tempor et velit fugiat ad duis officia consequat ad officia. Pariatur aliquip do officia do non fugiat pariatur. Nisi ut in quis sit eu amet esse incididunt excepteur veniam dolor eu consequat elit. Ex tempor adipisicing enim aliquip quis dolor nostrud veniam amet in. Dolor esse deserunt ut magna cillum reprehenderit eiusmod enim pariatur cupidatat ad ullamco ut. Ipsum dolore nulla non aliqua pariatur dolor do velit.",
//     date: new Date(),
//   },
//   {
//     id: 3,
//     title: "This is the third post",
//     content:
//       "Dolor minim ad enim magna voluptate. Quis sint esse fugiat non minim Lorem. Officia adipisicing quis duis anim aliquip elit ex velit labore labore eu dolore. Aute quis reprehenderit ad incididunt consequat ut occaecat do sint quis in qui anim.",
//     date: new Date(),
//   },
// ];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    let content = data
      .map(
        (blog) =>
          `<div id=${blog.id}>
          <h1 class="light-h1">${blog.title}</h1>
          <p class="light-p">${new Date()}</p>
          <p class="light-p">${blog.body}</p>
      </div>`
      )
      .join("");

    document.getElementById("blogPosts").innerHTML = content;
  });

document.getElementById("toggleButton").addEventListener("click", () => {
  console.log(document.getElementsByTagName("link")[0]);
  if (
    document.getElementsByTagName("link")[0].getAttribute("href") ==
    "styles.css"
  ) {
    document
      .getElementsByTagName("link")[0]
      .setAttribute("href", "darkCss.css");
  } else {
    document.getElementsByTagName("link")[0].setAttribute("href", "styles.css");
  }
  //   if (document.querySelector("body").getAttribute("class") == "light-body") {
  //     document.querySelector("body").setAttribute("class", "dark-body");
  //   } else {
  //     document.querySelector("body").setAttribute("class", "light-body");
  //   }

  //   document.querySelectorAll("h1").forEach((item) => {
  //     if (item.getAttribute("class") == "light-h1") {
  //       item.setAttribute("class", "dark-h1");
  //     } else {
  //       item.setAttribute("class", "light-h1");
  //     }
  //   });

  //   document.querySelectorAll("p").forEach((item) => {
  //     if (item.getAttribute("class") == "light-p") {
  //       item.setAttribute("class", "dark-p");
  //     } else {
  //       item.setAttribute("class", "light-p");
  //     }
  //   });
});
