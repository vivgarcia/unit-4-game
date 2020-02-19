//generate randomNumber and display to the DOM
var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$('#randomNumber').html(randomNumber);

//define variables
var ruby = Math.floor(Math.random() * 12) + 1;
var citrine = Math.floor(Math.random() * 12) + 1;
var amethyst = Math.floor(Math.random() * 12) + 1;
var carnelian = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var totalScore = 0;
//write score to the DOM
$("#totalScore").text(totalScore);
//functions for game play
function gamePlay(){
    if(totalScore === randomNumber){
        alert("You won!");
        wins++;
        $("#winsCounter").text(wins);
    }else if(totalScore >= randomNumber){
        console.log("you went over");
        losses++;
        $("#lossesCounter").text(losses);
    }
}
//assign gems click functions and add their numbers to total score
$("#rubyGem").on("click", function(){
    totalScore = totalScore + ruby;
    $("#totalScore").text(totalScore);
    gamePlay();
})

$("#citrineGem").on("click", function(){
    totalScore = totalScore + citrine;
    $("#totalScore").text(totalScore);
    gamePlay();
})

$("#amethystGem").on("click", function(){
    totalScore = totalScore + amethyst;
    $("#totalScore").text(totalScore);
    gamePlay();
})

$("#carnelianGem").on("click", function(){
    totalScore = totalScore + carnelian;
    $("#totalScore").text(totalScore);
    gamePlay();
})

