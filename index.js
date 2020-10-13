// make random numbers from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1

// roll the dice
document.querySelector(".img1").src="images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src="images/dice" + randomNumber2 + ".png";

// display who won
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!"
}
