var carBMW= documnt.getElementById("5series")
var carNissan= document.getElementById("350z")
var carMazda= document.getElementById("Mazda3")
var car1 = [

    brand: "BMW";
    model: "5 series";
    price: 400000; 
    condition: "new";
    milage: 12

    ]
var car2= [

    brand: "Nissan";
    model: "350z";
    price: 200000; 
    condition: "used";
    milage: 60000
    
     ]
var car1 = 
[

    brand: "Mazda";
    model: "3";
    price: 300000; 
    condition: "new";
    milage: 12
    
 ]
carBMW.addEventListener("click",infoBmw)
carMazda.addEventListener("click")
function infoBmw(){
output.innerHTML= car1

}
          