const xhr = new XMLHttpRequest();

xhr.open("GET", "happyUsers.json", true);

xhr.onload = function(){
    
    const user = JSON.parse(this.responseText);
    
    const username = document.getElementById("username").innerText = `${user.username}`; 

    const doc = document.getElementById("doc").innerHTML = `<span class="pull-left"><strong>Joined</strong></span> ${user.registrationDate}`;

    const fullname = document.getElementById("fullname").innerHTML = `<span class="pull-left"><strong>Full name</strong></span> ${user.firstName} ${user.lastName}`;

    const email = document.getElementById("email").innerHTML = `<span class="pull-left"><strong>Email</strong></span> ${user.email}`;

    const age = document.getElementById("age").innerHTML = `<span class="pull-left"><strong>Age</strong></span> ${getAge(user.dateOfBirth)}`;
     
};

xhr.send();


let d = new Date();
let month = d.getMonth()+1;

localStorage.setItem("lastLogin", month + "." +d.getDate()+ "." + d.getFullYear());
localStorage.setItem("imageLink", "sotiris.jpg");

const img = document.querySelector("#img-profile");
img.setAttribute("src", localStorage.getItem("imageLink"));


const lastLogin = document.getElementById("lastLogin").innerHTML = '<span class="pull-left"><strong>Last seen</strong></span> '+ localStorage.getItem("lastLogin");



