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
            window.location.href = 'indexok.html';
            alert('login successful')
            break;
        }
    }
    if (bool == false) {
        alert('Invalid Credentials');
    }
}