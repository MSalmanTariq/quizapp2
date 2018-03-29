function signup_page() {


    window.open("signup.html", "_self");

}
function login_page() {


    window.open("login.html", "_self");

}


function signup() {
    var username1 = document.getElementById("usern");
    var password1 = document.getElementById("passw");
    var email1 = document.getElementById("email");
    var rollnum1 = document.getElementById("rolln");
    var batchnum1 = document.getElementById("batchn");



    if (username1.value !== "" && password1.value !== "" && email1.value !== "" && rollnum1.value !== "" && batchnum1.value !== "") {
        /* alert("Done"); */
        var getuser = JSON.parse(localStorage.getItem('user'));
        if (getuser != null) {
            for (var i = 0; i < getuser.length; i++) {
                if (getuser[i].username == username1.value.toLowerCase() || getuser[i].email == email1.value) {
                    alert("Sorry! User already register with same username or email!, Try Again");
                    return;
                }
            }



        }

        else {
            getuser = [];

        }

        var user = {
            username: username1.value.toLowerCase(),
            password: password1.value,
            email: email1.value,
            rollnum: rollnum1.value,
            batchnum: batchnum1.value

        }
        getuser.push(user);
        getuser = JSON.stringify(getuser);
        localStorage.setItem('user', getuser);
        alert("Congrats " + username1.value + "! You are successfully registered, Now you can Login on this site!");
        username1.value = "";
        password1.value = "";
        email1.value = "";
        rollnum1.value = "";
        batchnum1.value = "";
        window.open("login.html", "_self");


    }
    else {
        alert("Required feild/s is/are empty, Please fill all required feilds");
    }
}


function login() {
    var username2 = document.getElementById("log_in1");
    var password2 = document.getElementById("log_in2");

    if (username2.value !== "" && password2.value !== "") {
        var getuser = JSON.parse(localStorage.getItem('user'));
        if (getuser != null) {
            for (var i = 0; i < getuser.length; i++) {
                if (getuser[i].username == username2.value.toLowerCase()) {
                    if (getuser[i].password == password2.value) {
                        alert("Successfully Login as " + username2.value);
                        return;
                    }
                    else {
                        alert(username2.value + " Your password is Incorrect!, Try Again");
                        return;
                    }

                }
            }

            alert(username2.value + " you are not registered on this site, Use SIGN UP option to register yourself!");




        }

        else {
            alert("No user registered on Site! (DATABASE EMPTY), Use SIGN UP option to register yourself!");
            window.open("signup.html", "_self");
            return;
        }


    }
    else {
        alert("Required feild/s is/are empty, Please fill all required feilds");
    }
}