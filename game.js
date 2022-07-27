// alert("hello");

var gamePattern = [];
var userclickedPattern = [];
// var randomNumber;

var buttonColours = [
    "red", "blue", "green", "yellow"
];

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userclickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
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

// $(".btn").on("click",function(){
//     playSound($(this).attr("id"));
// });

// nextSequence();

// function buttonAnimation(currentKey) {
//     var activeButton = document.querySelector("." + currentKey);
//     activeButton.classList.add("pressed");

//     setTimeout(function() {
//         activeButton.classList.remove("pressed");
//     }, 100);
// }