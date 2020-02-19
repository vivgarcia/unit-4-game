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
function someFunction(){
    if(totalScore === randomNumber){
        console.log("won");
    }else if(totalScore >= randomNumber){
        console.log("hey");
    }
}
//assign gems click functions and add their numbers to total score
$("#rubyGem").on("click", function(){
    totalScore = totalScore + ruby;
    $("#totalScore").text(totalScore);
    someFunction();
})

$("#citrineGem").on("click", function(){
    totalScore = totalScore + citrine;
    $("#totalScore").text(totalScore);
})

$("#amethystGem").on("click", function(){
    totalScore = totalScore + amethyst;
    $("#totalScore").text(totalScore);
})

$("#carnelianGem").on("click", function(){
    totalScore = totalScore + carnelian;
    $("#totalScore").text(totalScore);
})

