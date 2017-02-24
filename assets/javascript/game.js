var loss = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19)
var gemArray = [];
var adder = 0;

$(document).ready(function(){
  function gemFunc() {
    for (var i = 0; i < 4; i++){
    var gem = Math.floor(Math.random() * 12) + 1 ;
    gemArray.push(gem);
  }
};

gemFunc();
$('.targetScore').html(crystalValue);

$('.pic1').on("click", function(){
  var gem1value = (gemArray[0]);
  adder = adder + gem1value;
  $('.score').html(adder);
  checkIt();
});

$('.pic2').on("click", function(){
  var gem2value = (gemArray[1]);
  adder = adder + gem2value;
  $('.score').html(adder);
  checkIt();
});

$('.pic3').on("click", function(){
  var gem3value = (gemArray[2]);
  adder = adder + gem3value;
  $('.score').html(adder);
  checkIt();
});

$('.pic4').on("click", function(){
  var gem4value = (gemArray[3]);
  adder = adder + gem4value;
  $('.score').html(adder);
  checkIt();
});

function checkIt(){
  if (crystalValue === adder) {
    $("#winLossMessage").html("You win! Play again!");
    win = win + 1;
    $("#wins").html(win);
    reset();
  }
  else if (crystalValue < adder) {
    $("#winLossMessage").html("You lose! Try again!");
    loss = loss + 1;
    console.log(loss);
    $("#losses").html(loss);
    reset();
  }
};

function reset(){
  gemArray.length = 0;
  gemFunc();
  crystalValue = Math.floor(Math.random() * (102)+ 19)
  $('.targetScore').html(crystalValue);
  adder = 0;
  $('.score').html(adder);
  console.log(gemArray)
}

});