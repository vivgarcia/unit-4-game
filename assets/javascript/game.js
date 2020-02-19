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

$("#rubyGem").on("click", function(){
    console.log(ruby);
})

$("#citrineGem").on("click", function(){
    console.log(citrine);
})

$("#amethystGem").on("click", function(){
    console.log(amethyst);
})

$("#carnelianGem").on("click", function(){
    console.log(carnelian);
})