// Step 1. Detect button click
document
  .getElementsByTagName("button")[0]
  .addEventListener("click", searchBook);

function searchBook() {
  // Step 2. Read the user input
  let bookName = document.getElementById("bookName").value;
  // Step 3. Connect to the API
  // Step 4. Convert JSON to JS Object
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
    .then((response) => response.json())
    .then((data) => {
      // Step 5. Display books on the screen
      let output = ``;
      data.items.forEach((book) => {
        let temp = `<div class="book">
          <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="" />
          <h2>${book.volumeInfo.title}</h2>
          <h3>${book.volumeInfo.authors.toString()}</h3>
        </div>`;
        output += temp;
      });
      document.getElementById("books").innerHTML = output;
    });
  //   let myRequest = new XMLHttpRequest();
  //   myRequest.open(
  //     "GET",
  //     "https://www.googleapis.com/books/v1/volumes?q=" + bookName
  //   );
  //   myRequest.send();
  //   myRequest.onreadystatechange = () => {
  //     if (myRequest.readyState === 4 && myRequest.status === 200) {
  //       let data = JSON.parse(myRequest.responseText);
  //       let output = ``;
  //       data.items.forEach((book) => {
  //         let temp = `<div class="book">
  //           <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="" />
  //           <h2>${book.volumeInfo.title}</h2>
  //           <h3>${book.volumeInfo.authors.toString()}</h3>
  //         </div>`;
  //         output += temp;
  //       });
  //       document.getElementById("books").innerHTML = output;
  //     }
  //   };
}
