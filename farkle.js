let diceArr = [];
let scoreText = document.getElementById("score");
let score = 0;
let imgs = document.getElementsByTagName("img");

function initializeDice() {
  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    diceArr[i].id = "die" + (i + 1);
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
  }
}

/*Rolling dice values*/
function rollDice() {
  Array.from(imgs).forEach((img) => img.classList.remove("animate__rotateIn"));
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
    }
  }
  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  let diceImage;
  for (var i = 0; i < 6; i++) {
    switch (diceArr[i].value) {
      case 1:
        diceImage = "./images/1.png";
        break;
      case 2:
        diceImage = "./images/2.png";
        break;
      case 3:
        diceImage = "./images/3.png";
        break;
      case 4:
        diceImage = "./images/4.png";
        break;
      case 5:
        diceImage = "./images/5.png";
        break;
      case 6:
        diceImage = "./images/6.png";
        break;
    }
    document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
  }
}

function diceClick(img) {
  let i = img.getAttribute("data-number");

  img.classList.toggle("transparent");
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1;
  } else {
    diceArr[i].clicked == 0;
  }
  handleScore();
}

function handleScore() {
  let ones = [];
  let twos = [];
  let threes = [];
  let fours = [];
  let fives = [];
  let sixes = [];
  let tempScore = [];
  for (var i = 0; i < 6; i++) {
    switch (diceArr[i].value) {
      case 1:
        ones.push(1);
        break;
      case 2:
        twos.push(2);
        break;
      case 3:
        threes.push(3);
        break;
      case 4:
        fours.push(4);
        break;
      case 5:
        fives.push(5);
        break;
      case 6:
        sixes.push(6);
        break;
    }
  }
  switch (ones.length) {
    case 1:
      tempScore[0] = 100;
      break;
    case 2:
      tempScore[0] = 200;
      break;
    case 3:
      tempScore[0] = 1000;
      break;
    case 4:
      tempScore[0] = 2000;
      break;
    case 5:
      tempScore[0] = 3000;
      break;
    case 6:
      tempScore[0] = 4000;
      break;
    default:
      tempScore[0] = 0;
  }
  switch (twos.length) {
    case 3:
      tempScore[1] = 200;
      break;
    case 4:
      tempScore[1] = 400;
      break;
    case 5:
      tempScore[1] = 600;
      break;
    case 6:
      tempScore[1] = 800;
      break;
    default:
      tempScore[1] = 0;
  }
  switch (threes.length) {
    case 3:
      tempScore[2] = 300;
      break;
    case 4:
      tempScore[2] = 600;
      break;
    case 5:
      tempScore[2] = 900;
      break;
    case 6:
      tempScore[2] = 1200;
      break;
    default:
      tempScore[2] = 0;
  }
  switch (fours.length) {
    case 3:
      tempScore[3] = 400;
      break;
    case 4:
      tempScore[3] = 800;
      break;
    case 5:
      tempScore[3] = 1200;
      break;
    case 6:
      tempScore[3] = 1600;
      break;
    default:
      tempScore[3] = 0;
  }
  switch (fives.length) {
    case 1:
      tempScore[4] = 50;
      break;
    case 2:
      tempScore[4] = 100;
      break;
    case 3:
      tempScore[4] = 500;
      break;
    case 4:
      tempScore[4] = 1000;
      break;
    case 5:
      tempScore[4] = 1500;
      break;
    case 6:
      tempScore[4] = 2000;
      break;
    default:
      tempScore[4] = 0;
  }
  switch (sixes.length) {
    case 3:
      tempScore[5] = 600;
      break;
    case 4:
      tempScore[5] = 1200;
      break;
    case 5:
      tempScore[5] = 1800;
      break;
    case 6:
      tempScore[5] = 2400;
      break;
    default:
      tempScore[5] = 0;
  }
  score = tempScore.reduce((a, b) => a + b + 0);
  scoreText.innerText = score;
  return score;
}

function handleBankScore() {
  scoreText.innerText = 0;
  Array.from(imgs).forEach((img) => img.classList.remove("transparent"));
  scoreText.classList.remove("animate__zoomIn");
  scoreText.classList.add("animate__flipInY");
  setTimeout(function () {
    location.reload();
  }, 1000);
}
