var textage = document.getElementById("Age")
var textname = document.getElementById("UserID")
var output = document.getElementById("Output")


var submit = document.getElementById("submitBtn");
submit.addEventListener("click", displayName)
//submit.addEventListener("click", disp)


function displayName(){
    var userName = textname.value;
    var userAge = textage.value;
    output.innerHTML = "Welcome to our web page " + userName + ", you are " + userAge; 


}
