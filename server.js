function Register(event){
    // alert('Working')
    event.preventDefault()    

    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {UserName: UserName, UserNumber: UserNumber, UserEmail: UserEmail, 
        UserPassword: UserPassword, UserConfirmPassword: UserConfirmPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("DataList")) || [];
   
    var flag = false;

   for(var i=0; i < DataFromLS.length; i++){
    if(DataFromLS[i].email === UserEmail)
    flag = true;
    }

    if(flag === true){
    alert("Email is Already Present")
    }
    else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 
        && UserNumber.length < 1 && UserConfirmPassword.length < 1) {
            alert("must fill all field")
    }
            else if (UserPassword.length < 8) {
            alert("password is atleast 8 digit")
        }
        else if(UserPassword != UserConfirmPassword){
            alert("Password Mismatch")
        }
        else
         {
            DataFromLS.push(Data);
            localStorage.setItem("Data", JSON.stringify(DataFromLS));
            // console.log(DataFromLS, "DataFromLS");
            document.getElementById("UserName").value = '';
            document.getElementById("UserNumber").value = '';
            document.getElementById("UserEmail").value = '';
            document.getElementById("UserPassword").value = '';
            document.getElementById("UserConfirmPassword").value = '';
            alert("registration done");
        }
        
}













// function Register(event) {

//     event.preventDefault()
//     //get data from html to js
//     var UserName = document.getElementById("UserName").value;
//     var UserNumber = document.getElementById("UserNumber").value;
//     var UserEmail = document.getElementById("UserEmail").value;
//     var UserPassword = document.getElementById("UserPassword").value;
//     var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

//     var data = { UserName: UserName, UserNumber: UserNumber, UserEmail: UserEmail, UserPassword: UserPassword, UserConfirmPassword: UserConfirmPassword }


//     // sotre data from Localstorage to Js
//     var DataFromLS = JSON.parse(localStorage.getItem("DataLS")) || [];
//     // console.log(DataFromLS, "DataFromLS");


// flag = false

//     for (var i = 0; i < DataFromLS.length; i++) {
//         if (DataFromLS[i].email === UserEmail)
//             flag = true;
//     }

//     if (flag === true) {
//         alert("Email  already present")
//     }
//     else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 && UserNumber.length < 1 && UserConfirmPassword.length < 1) {
//         alert("must fill all field")
//     }
//     else if (UserPassword.length < 8) {
//         alert("password is atleast 8 digit")
//     }
//     else if(UserPassword != UserConfirmPassword){
//         alert("Password Mismatch")
//     }
//     else
//      {
//         DataFromLS.push(data);
//         localStorage.setItem("data", JSON.stringify(DataFromLS));
//         // console.log(DataFromLS, "DataFromLS");
//         document.getElementById("UserName").value = '';
//         document.getElementById("UserNumber").value = '';
//         document.getElementById("UserEmail").value = '';
//         document.getElementById("UserPassword").value = '';
//         document.getElementById("UserConfirmPassword").value = '';
//         alert("registration done");
//     }
    
// }



