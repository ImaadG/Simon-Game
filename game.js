var gamePattern = [];
var userclickedPattern = [];
var state = false;
var level = 0;

var buttonColours = [
    "red", "blue", "green", "yellow"
];
    
$(function(){
    $(document).on("keydown", function(){
        if (state===false){
            nextSequence();
        }
        state = true;
        });
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userclickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userclickedPattern.length-1);
});

// Check if user input matches game input

function checkAnswer(currentLevel){
    if (userclickedPattern[currentLevel]===gamePattern[currentLevel]) {
        // console.log("success");
        if (userclickedPattern.length=== gamePattern.length) setTimeout(function(){nextSequence()}, 1000);
    }
    else {
        // console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass()
        }, 200);

        $("h1").html("Game Over, Press Any Key to Restart");
        startOver();

    }
}

function startOver(){
    level = 0;
    state = false;
    gamePattern = [];
}

function nextSequence() {
    userclickedPattern = [];
    level++;
    $("h1").html("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // animatePress(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    // audio.play().delayClass(100);
    audio.play();
    
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);

    // ^ In a nutshell
    // setTimeout( function(){ *jQuery Code* }, 100);
}