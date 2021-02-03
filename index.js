var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceimg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceimg1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceimg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceimg2);

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
