function validation(e)
{
    // Validation for fullname............
    let fname = document.getElementById('Fname').value;
    var fnameRegex = /^[a-zA-Z]+$/;
    if(fname.length < 4)
    {
        e.preventDefault();
        alert("Atleast 4 characters required in fullname")
    }
    else if(!fname.match(fnameRegex))
    {
        e.preventDefault(e);
        alert("Number is not allowed in fullname")
    }

    // Validation for username............
    let username = document.getElementById('Username').value;
    var usernameerr = /^[a-zA-Z0-9_]+$/;
    if(username.length < 4)
    {
        e.preventDefault();
        alert("Atleast 4 characters required in username")
    }
    else if(!username.match(usernameerr))
    {
        e.preventDefault(e);
        alert("Special characters are not allowed in username")
    }

    // Validation for password............
    let password = document.getElementById('password').value;
    var passworderr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if(password.length < 6)
    {
        e.preventDefault();
        alert("Atleast 6 characters required in password")
    }
    else if(!password.match(passworderr))
    {
        e.preventDefault(e);
        alert("Password must contain atleast one uppercase, one lowercase, one number and one special character")
    }

    // Validation for confirm password............
    let cpassword = document.getElementById('cpassword').value;
    let pass = document.getElementById('password').value;
    if(cpassword != pass)
    {
        e.preventDefault(e);
        alert("Password and confirm password must be same")
    }

    // Validation for phone no............
    let phone = document.getElementById('phoneno').value;
    var phoneerr = /^[+0-9]+$/;
    if(!phone.match(phoneerr))
    {
        e.preventDefault(e);
        alert("Only numbers are allowed in phone no")
    }
    else if(phone.length != 10)
    {
        e.preventDefault(e);
        alert("Phone no must contain 10 digits")
    }

    // Validation for email............
    let email = document.getElementById('email').value;
    var emailerr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!email.match(emailerr))
    {
        e.preventDefault(e);
        alert("Invalid email")
    }

    // Validation for Gender............
    let gender = document.getElementsByName('gender').value;
    if(!gender[0].checked && !gender[1].checked)
    {
        e.preventDefault();
        alert("Select your gender");
    } 

    // Validation for State............
    let state = document.getElementById('state').value;
    if(state.value === "Default")
    {
        e.preventDefault();
        alert("Select your state");
    }

    // Validation for Agree............ 
    let agree = document.getElementById('agreement');
    if(!agree.checked)
    {
        e.preventDefault();
        alert("Accept the terms and conditions");
    }

}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>
{
    e.preventDefault();
    validation(e);
});