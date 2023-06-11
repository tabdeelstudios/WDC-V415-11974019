// function setCookie(cname, cvalue, expiry) {
//   const date = new Date();
//   date.setTime(date.getTime() + expiry * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// cname=cvalue;expiry;path=/

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let temp = decodedCookie.split(";");
//   for (let i = 0; i < temp.length; i++) {
//     let c = temp[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       console.log(c.substring(name.length, c.length));
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

function setStorage(lname, lvalue) {
  localStorage.setItem(lname, lvalue);
}

function getStorage(lname) {
  console.log(localStorage.getItem(lname));
}
