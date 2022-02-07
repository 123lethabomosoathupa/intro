var guessNumber=document.getElementById("Number")
var guess=document.getElementById("guessNumber")
guess.onclick=guessValue

function guessValue(){

    var 
    var correctNumber=guessNumber.value

    if (correctNumber===9){
    alert("Correct Number!!!")
    }
    else{
     alert("Incorrect")
    }
}
