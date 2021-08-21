 const popup = document.querySelector(".offer_popup");
  const popup1 = document.querySelector(".offer_popup1");
  const loginn = document.querySelector("#loginn");
  const finishh = document.querySelector("#finishh");

  window.onload = function () {
    setTimeout(function () {
      popup.style.display = "block";
    }, 1000);
  };

  loginn.addEventListener("click", () => {
    popup.style.display = "none";
    popup1.style.display = "block";
  });
  finishh.addEventListener("click", () => {
    popup1.style.display = "none";
  });


function login() {
    let form = document.getElementById("loginform")
    let email = form.inputcontrol.value;
    let password = form.inputcontrol1.value;

    let userdata = JSON.parse(localStorage.getItem('data'));

    for (let i = 0; i < userdata.length; i++) {
        var bool = false;
        let u = userdata[i].email;
        let p = userdata[i].password;
        // console.log(u);
        // console.log(p);
        if (email === u && password === p) {
            bool = true;
            window.location.href = 'index.html';
            alert('login successful')
            break;
        }
    }
    if (bool == false) {
        alert('Invalid Credentials');
    }
}
 function login() {
    let form = document.getElementById("loginform");
    let email = form.inputcontrol.value;
    let password = form.inputcontrol1.value;

    let userdata = JSON.parse(localStorage.getItem("data"));

    for (let i = 0; i < userdata.length; i++) {
      var bool = false;
      let u = userdata[i].email;
      let p = userdata[i].password;
      if (email === u && password === p) {
        bool = true;
        alert("login successful");
        break;
      }
    }
    if (bool == false) {
      alert("Invalid Credentials");
    }
  }