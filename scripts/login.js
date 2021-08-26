var popup = document.querySelector(".offer_popup");
var popup1 = document.querySelector(".offer_popup1");
var loginn = document.querySelector("#loginn");
var finishh = document.querySelector("#finishh");
var show = document.querySelector("#show");
var loginnn = document.querySelector("#loginnn");



show.addEventListener("click", () => {
  popup.style.display = "block";
});

loginn.addEventListener("click", () => {
  popup.style.display = "none";
  popup1.style.display = "block";
});

loginnn.addEventListener("click", () => {
  popup.style.display = "none";
  popup1.style.display = "block";
});




function login() {
  let form = document.getElementById("loginform")
  let email = form.inputcontroll.value;
  let password = form.inputcontroll1.value;

  let userdata = JSON.parse(localStorage.getItem('data'));

  for (let i = 0; i < userdata.length; i++) {
    var bool = false;
    let u = userdata[i].email;
    let p = userdata[i].password;

    if (email === u && password === p) {
      bool = true;
      alert('login successful');
      popup1.style.display = "none";
      show.innerHTML = "Logout";
      break;
    }
  }
  if (bool == false) {
    alert('Invalid Credentials');
  }
}
