function formValidation()
{
var uname = document.registration.username;
var passid = document.registration.passid;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

if(allLetter(uname))
{
if(passid_validation(passid,7,12))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
}
}
}
return false;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
window.location ="login.html"
return true;}
}
