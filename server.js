function Register(event) {

    event.preventDefault()
    //get data from html to js
    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var data = { UserName: UserName, UserNumber: UserNumber, UserEmail: UserEmail, UserPassword: UserPassword, UserConfirmPassword: UserConfirmPassword }


    // sotre data from Localstorage to Js
    var DataFromLS = JSON.parse(localStorage.getItem("DataLS")) || [];
    // console.log(DataFromLS, "DataFromLS");

    flag = false

    for (var i = 0; i < DataFromLS.length; i++) {
        if (DataFromLS[i].email == UserEmail)
            flag = true;
    }

    if (flag === true) {
        alert("Email  already present")
    }
    else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 && UserNumber.length < 1 && UserConfirmPassword.length < 1) {
        alert("must fill all field")
    }
    else if (UserPassword.length < 8) {
        alert("password must be more than 8 digit")
    }
    else if(UserConfirmPassword.length == UserPassword){
        alert("Password Mismatch")
    }
    else
     {
        DataFromLS.push(data);
        localStorage.setItem("DataFromLS", JSON.stringify(DataFromLS));
        console.log(DataFromLS, "DataFromLS");
        alert("registration done");
        document.getElementById("UserName").value = '';
        document.getElementById("UserNumber").value = '';
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
        document.getElementById("UserConfirmPassword").value = '';
        alert("registration done");
    }



}