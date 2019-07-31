let d = new Date();
let month = d.getMonth()+1;

localStorage.setItem("username", "andreas");
localStorage.setItem("doc", "7.31.2019");
localStorage.setItem("lastLogin", month + "." +d.getDate()+ "." + d.getFullYear());
localStorage.setItem("firstname", "Andreas");
localStorage.setItem("lastname", "Patsimas");
localStorage.setItem("email", "andreas-patsim@hotmail.com");
localStorage.setItem("age", 26);
localStorage.setItem("imageLink", "sotiris.jpg");

const img = document.querySelector("#img-profile");
img.setAttribute("src", localStorage.getItem("imageLink"));

const username = document.getElementById("username").innerText = localStorage.getItem("username");
const doc = document.getElementById("doc").innerHTML = '<span class="pull-left"><strong>Joined</strong></span> '+ localStorage.getItem("doc");
const lastLogin = document.getElementById("lastLogin").innerHTML = '<span class="pull-left"><strong>Last seen</strong></span> '+ localStorage.getItem("lastLogin");
const fullname = document.getElementById("fullname").innerHTML = '<span class="pull-left"><strong>Full name</strong></span> '+ localStorage.getItem("firstname") 
+ " " + localStorage.getItem("lastname");


