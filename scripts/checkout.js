let payment =  document.getElementsByClassName("payment")[0];
let form = document.getElementsByClassName("main")[0];
let namee = document.getElementById("fname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let adr = document.getElementById("adr");
let zip = document.getElementById("zip");
let cname = document.getElementById("cname");
let ccnum = document.getElementById("ccnum");
let expmonth = document.getElementById("expmonth");
let expyear = document.getElementById("expyear");
let cvv = document.getElementById("cvv");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (namee != null || email != null || mobile != null || adr != null || zip != null) {
        payment.style.display = "block";
    } 
});
payment.addEventListener("submit", (e) => {
     e.preventDefault();
    if (cname != null || ccnum != null || expmonth != null || expyear != null || cvv != null) {
        window.location.href = "finish.html";
    } 
})