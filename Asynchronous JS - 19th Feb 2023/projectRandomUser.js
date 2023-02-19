// let allUsers = [
//   {
//     name: "John",
//     image:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     dob: "17-08-1990",
//     email: "john@hello.com",
//   },
//   {
//     name: "Bob",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
//     dob: "31-04-1990",
//     email: "bob@hello.com",
//   },
//   {
//     name: "Sarah",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     dob: "15-02-1999",
//     email: "sarah@hello.com",
//   },
//   {
//     name: "Julia",
//     image:
//       "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     dob: "11-01-1996",
//     email: "julia@hello.com",
//   },
// ];

function generateRandomUser() {
  fetch("https://randomuser.me/api").then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.getElementById("userName").innerText =
        data.results[0].name.first;
      document.getElementById("userEmail").innerText = data.results[0].email;
      document.getElementById("userDOB").innerText = data.results[0].dob.date;
      document
        .getElementById("userImg")
        .setAttribute("src", data.results[0].picture.medium);
    })
  );

  //   let random = Math.floor(Math.random() * allUsers.length);
}
