var trainSpeed = 250;
var trainPosition = 0;
var animation=0;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);


var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var startButton = document.getElementById("startButton")
startButton.addEventListener("click",speedUp);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 60) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
        trainPosition = 0;
        document.getElementById("train").style.left="0px"
    }
}

function stopTrain() {
    if (trainPosition < 660) {
        clearInterval(animation);
        console.log("Whew! That was close!");
        trainPosition = 0

    }
}