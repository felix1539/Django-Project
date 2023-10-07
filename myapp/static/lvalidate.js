

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "roy" && password == "password#123"){
alert ("Login successfully");
window.location = "home.html";
return false;
}
else{
window.location = "login.html";
return false;
}
}
