import clients from "../json/clients.json" assert { type: "json" };

const registoBox = document.getElementById("registoBox");
const registoForm = document.getElementById("registo");
const error = document.createElement("p");
error.className = "error";

registoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("r_user").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("r_pwd").value;
  const passwordRepeat = document.getElementById("pwd_repeat").value;

  var session = "";
  var existingUser = "";

  if (
    username === "" ||
    name === "" ||
    password === "" ||
    passwordRepeat === ""
  ) {
    error.innerText = "Preencha todos os campos";
  } else {
    clients.forEach(function (obj) {
      if (obj.username === username) existingUser = obj.username;
    });
    if (existingUser == username) error.innerText = "Username indisponível";
    else if (password !== passwordRepeat)
      error.innerText = "Passwords não correspondem";
    else {
      session = username;
      window.location = "./index.html";
    }
  }
  registoBox.appendChild(error);
});
