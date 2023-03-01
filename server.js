function Register(event){

    event.preventDefault()

//get data from html to js
var UserName = document.getElementById("Name").value;
var UserNumber = document.getElementById("Number").value;
var UserEmail = document.getElementById("Email").value;
var UserPassword = document.getElementById("Password").value;
var UserConfirmPassword = document.getElementById("ConfirmPassword").value;

var data = { UserName : Name, UserNumber : Number, UserEmail : Email, UserPassword : Password, UserConfirmPassword: ConfirmPassword  }

// sotre data into localstorage

var DataFromLS = JSON.parse(localStorage.getItem("DataLS")) || [];
// console.log(DataFromLS, "DataFromLS");

DataFromLS.push(data);

localStorage.setItem("DataFromLS", JSON.stringify(DataFromLS));
console.log(DataFromLS, "DataFromLS");






}