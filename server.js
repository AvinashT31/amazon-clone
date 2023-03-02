function Register(event){

    event.preventDefault() ;
    
    
    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {Name: UserName, Number: UserNumber, Email: UserEmail, 
        Password: UserPassword, ConfirmPassword: UserConfirmPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("DataList")) || [];

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
    localStorage.setItem("DataList", JSON.stringify(DataFromLS));   
    document.getElementById("UserName").value = '';
    document.getElementById("UserNumber").value = '';
    document.getElementById("UserEmail").value = '';
    document.getElementById("UserPassword").value = '';
    document.getElementById("UserConfirmPassword").value = '';
    console.log(DataFromLS, "DataFromLS");
    alert('Working');
   }  
   
   
}








































