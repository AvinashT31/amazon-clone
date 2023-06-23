function Register(event){

    event.preventDefault() ;
    
    
    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {Name: UserName, Number: UserNumber, Email: UserEmail, 
        Password: UserPassword, ConfirmPassword: UserConfirmPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("Amazon-Data")) || [];

    var flag = false;

   for(var i=0; i<DataFromLS.length; i++){
    if(DataFromLS[i].Email === UserEmail){
    console.log(DataFromLS, "DataFromLS");
    flag = true;
    }
   }

   if(flag === true){
    alert("Email is already Present")
   }
   else if(UserName.length < 1, UserNumber < 1, UserEmail < 1, UserPassword < 1, UserConfirmPassword < 1 )
   {
    alert("must fill all field")
   }
   else if(UserPassword.length < 8)
   {
    alert("password must be 8 digit")
   }
   else if(UserPassword != UserConfirmPassword)
   {
    alert("Password Mismatch")
   }
   else
   {
    DataFromLS.push(Data); 
    localStorage.setItem("Amazon-Data", JSON.stringify(DataFromLS));   
    document.getElementById("UserName").value = '';
    document.getElementById("UserNumber").value = '';
    document.getElementById("UserEmail").value = '';
    document.getElementById("UserPassword").value = '';
    document.getElementById("UserConfirmPassword").value = '';
    console.log(DataFromLS, "DataFromLS");
    alert('Registration Done');
    window.location.href="/Login.html";
   }  
   
   
}


function login(event){
    
    event.preventDefault() ;
    // alert("Working");

    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById ("UserPassword").value;

    var DataFromLS = JSON.parse(localStorage.getItem("Amazon-Data"));

    var flag = false;

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword){
            flag = true;
        } 
    }

    if(flag === true){
        document.getElementById("UserEmail").value =  '';
        document.getElementById ("UserPassword").value = '';

        var User = {};
        User["Current-user-email"] = UserEmail;
        console.log(User, "User")
        localStorage.setItem("current-user", JSON.stringify(User));

        window.location.href = "/index.html";
        alert("login Successfully");
    }
    else{
        alert("check your credential or please create your account");
    }  
       
}

var GettingEmail;


function forgetPassword(event){

    event.preventDefault();
    // alert("working");

    var Useremail = document.getElementById("UserEmail").value;
    var GettingEmail = Useremail
    console.log(GettingEmail, "GettingEmail");

    var DataFromLS = JSON.parse(localStorage.getItem("Amazon-Data"));
    console.log(DataFromLS, "DataFromLS");
 
    flag = false;

   for(var i=0; i < DataFromLS.length; i++){
    if(DataFromLS[i].Email === Useremail){
         flag = true;
    }
   }
   console.log(Useremail, "Useremail");

   if(flag === true){

    var Password = `<label>Enter Your New Password</label><input type="password" id="password"/><br><button onclick = "NewPassword()">Set New Password</button>`
    var DivFromHTML = document.getElementById("change");
    console.log(Password, "Password");
    DivFromHTML.innerHTML = Password;
    alert("Set new Password")

   }
   else{
    alert("please check your email first");
   }

}


function NewPassword(){
    alert("working");

    var UserPassword = document.getElementById("password").value;
    console.log(UserPassword, "UserPassword");

    var DataFromLS = JSON.parse(localStorage.getItem("Amazon-Data"));
    console.log(DataFromLS, "DataFromLS");

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            DataFromLS[i].Password = UserPassword;
        }
    }
    // console.log(dataFromLS, "data");

    localStorage.setItem("Amazon-Data", JSON.stringify(DataFromLS));
    GettingEmail = '';
        window.location.href = "/login.html";
    alert("password Change Successfully");

}































