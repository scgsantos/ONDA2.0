import users from "../json/users.json" assert { type: "json" };

const loginBox = document.getElementById("loginBox");
const loginForm = document.getElementById("login");
const error = document.createElement("p");
error.className = "error";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("l_user").value;
  const password = document.getElementById("l_pwd").value;
  var session = "";

  if (username === "" || password === "") {
    error.innerText = "Preencha todos os campos";
  } else {
    users.clients.forEach(function (obj) {
      if (obj.username == username && obj.password == password) {
        session = username;
        window.location = "./index.html";
      }
    });
    if (session == "") error.innerText = "Username e/ou password errados";
  }
  loginBox.appendChild(error);
});
