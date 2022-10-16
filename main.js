let regexForEmail = /[\w]+[@][\w]+[.][a-z]/

var balance = 1000
function deposit(){
    var amountEntered = Number(userInput.value)
    if(amountEntered<0){
        alert("Thief")
    }else{
        balance = amountEntered + balance
        alert("Deposit Successful and your new balance is $" + balance)
    }
    
}
function makdep(){
    window.location.href = "deposit.html"
}
function trans(){
    window.location.href = "transfer.html"
}
balance = 1000;
function transfer(){
    var amountEntered = Number(userInput.value)
    console.log(userInput.value);
    if(amountEntered>balance){
        document.getElementById("say").innerHTML = `Insufficient Fund!`
        document.getElementById("say2").style.display = "none"
    } else if((balance - amountEntered) == 0){
        document.getElementById("say").innerHTML = `Insufficient Fund!`
        document.getElementById("say2").style.display = "none"
    }
    else if(amountEntered<0){
        document.getElementById("say").innerHTML = `Out of bounds!`
        document.getElementById("say2").style.display = "none"
    }else if(amountEntered=="" || userID.value == ""){
        alert("Fill the required field!")
    }else{
        balance = balance - amountEntered
        document.getElementById("say2").style.display = "block" 
        document.getElementById("say2").innerHTML = `You've successfully transferred $${amountEntered} to ${userID.value} and your current balance is $${balance}!<br>Go back to <a href='dashboard.html'>dashboard</a>`
        document.getElementById("say").style.display = "none"
        localStorage.setItem("balance", acctBalance)
    } 
}
function logOut() {
    window.location.href  = "logout.html"
}

var span = document.getElementById("close");
function closeIt() {
if  (confirm ('Do you want to close this modal?')) {
    modal.style.display = "none";
} 
}

var allCandidates = []
if (localStorage.bankCustomers){
    allCandidates = JSON.parse(localStorage.getItem("bankCustomers"))
}
function signUp() {
    var newCandidate = {
        firstname : firstName.value,
        lastname : lastName.value,
        phonenumber : phoneNumber.value,
        email : eMail.value,
        address : homeAddress.value,
        password : passWord.value,
        confirmpassword : confirmPassword.value, 
        AccountNo : "REX" + Math.round(Math.random()* 1000000),
    }    
    allCandidates.push(newCandidate);
    all = JSON.stringify(allCandidates);
    localStorage.setItem("bankCustomers", all);
    console.log(allCandidates);
    if (newCandidate.firstname=="" && newCandidate.lastname=="" && newCandidate.email=="" && newCandidate.password== ""  &&newCandidate.address=="" && newCandidate.confirmpassword=="" && newCandidate.phonenumber== ""){
        alert("Error! Kindly enter your details!")
    }
    else if (newCandidate.lastname=="") {
         alert("Enter your Last Name")
    } else if (newCandidate.email=="") {
        alert("Enter your valid email address")
    } else if (newCandidate.password=="") {
        alert("Enter Password")
    } else if (newCandidate.password.length<6) {
        alert("Password must not be less than six characters")
    } else if (newCandidate.phonenumber=="") {
        alert("Enter Phone Number")
    } else if (newCandidate.address=="") {
        alert("Enter Your Address")
    }  else if (newCandidate.firstName=="") {
        alert("Enter your First Name")
    } else if (newCandidate.confirmpassword!=newCandidate.password) {
        alert("Password does not match")
    } else if (regexForEmail.test(newCandidate.email)==false) {
        alert("E-mail not valid!\nEnter valid email address!")
    } else{
        window.location.href = 'login.html'
    }     
}


invalid2.style.display = "none"
invalid.style.display = "none"
let myLocalStorage = JSON.parse(localStorage.getItem("bankCustomers"))
const logIn = () =>{

    let currentUsers = {
         userEmail : userMail.value,
         userPsw : psword.value
    }
    let myCurrentUser = myLocalStorage.find((val, _)=> val.email == userMail.value && val.password == psword.value)
       localStorage.setItem("currentUsers", JSON.stringify(myCurrentUser));
    console.log(myCurrentUser);
        if (myCurrentUser) {
            location.href = "dashboard.html"
            alert(`Login successful! ${myCurrentUser.firstname} ${myCurrentUser.lastname}.`)
        }  else if (currentUsers.userEmail == "") {
            document.getElementById("invalid1").innerHTML = `Enter your valid email address`
            invalid1.style.display = "block"
            invalid.style.display = "none"
            invalid2.style.display = "none"
        } else if (currentUsers.userPsw == "") {
            document.getElementById("invalid1").innerHTML = `Enter your password!`
            invalid1.style.display = "block"
            invalid.style.display = "none"
            invalid2.style.display = "none"
        } else if (currentUsers.userEmail!==myCurrentUser) {
            invalid.style.display = "block"
            invalid1.style.display = "none"
        } else if (currentUsers.userPsw!==myCurrentUser) {
            invalid.style.display = "block"
            invalid1.style.display = "none"
        } if (currentUsers.userEmail == "" && currentUsers.userPsw == "") {
            document.getElementById("invalid1").innerHTML = `Kindly enter your e-mail and password!`
        } else if(myCurrentUser == "") {
            invalid2.style.display = "block"   
            invalid.style.display = "none"
            invalid1.style.display = "none"
        }
    
}


function show(){
    let date = new Date()
    let user = JSON.parse(localStorage.getItem("currentUsers"))
    let gotBalance = localStorage.getItem("balance")
    if (date.getHours()<12) {
        demo1.innerHTML = `Good Morning!<p style:"font-family:dancing;">${user.lastname} ${user.firstname}</p>`
        // userBalance.innerHTML = `${gotBalance}`
    } else if (date.getHours()<17) {
        demo1.innerHTML = `Good Afternoon!<p style:"font-family:dancing;">${user.lastname} ${user.firstname}</p>`
        // userBalance.innerHTML = `${gotBalance}`
    } else if (date.getHours()>=17) {
        demo1.innerHTML = `Good Evening!<p style:"font-family:dancing;">${user.lastname} ${user.firstname}</p>`
        // userBalance.innerHTML = `${gotBalance}`
    }
    console.log(gotBalance);
}


function dispOut(){
    let user = JSON.parse(localStorage.getItem("currentUsers"))
    demo.innerHTML = ` ${user.firstname}`
}

var loadFile =  function (event)
         {
            var image = document.getElementById('output');
            let a = document.getElementById('imagecontainer').style.backgroundColor;
            let b = document.getElementById('file2').style.display;
             if (a = 'rgb(127, 188, 238)' , b = 'block', confirm ('Do you want to upload this picture to your REX BANK ACCOUNT?')) {
                document.getElementById('imagecontainer').style.backgroundColor = 'transparent',
                image.src = URL.createObjectURL(event.target.files[0]);
                document.getElementById('file2').style.display = 'none';               
             }else {
                alert('No file chosen');
                return false;
             }
        } 