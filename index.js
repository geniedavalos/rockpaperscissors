  var userHand = "";
  var cpuHand = "";

// CPU randomly generated number and spit out one move when user plays
  function playGame() {
    var randomCPUNumber = Math.floor(Math.random() * 3); // 1-3
    if (randomCPUNumber === 0) {
      cpuHand = "rock";
      document.getElementById("cpuHand").setAttribute("class", "far fa-hand-rock fa-8x");
    } else if (randomCPUNumber === 1) {
      cpuHand = "paper";
      document.getElementById("cpuHand").setAttribute("class", "far fa-hand-paper fa-8x");
    } else if (randomCPUNumber === 2) {
      cpuHand = "scissors";
      document.getElementById("cpuHand").setAttribute("class", "far fa-hand-scissors fa-8x");
    }
    evaluateWin();
  }

// Functions for buttons - User Side
  function userClickRock() {
    document.getElementById("userHand").classList.remove("fa-hand-paper");
    document.getElementById("userHand").classList.add("fa-hand-rock");
    userHand = "rock";
    playGame();
  }

  function userClickPaper() {
    document.getElementById("userHand").classList.remove("fa-hand-paper");
    document.getElementById("userHand").classList.add("fa-hand-paper");
    userHand = "paper";
    playGame();
  }

  function userClickScissors() {
    document.getElementById("userHand").classList.remove("fa-hand-paper");
    document.getElementById("userHand").classList.add("fa-hand-scissors");
    userHand = "scissors";
    playGame();
  }

// Game logic
  function evaluateWin() {
    if (cpuHand === "rock" && userHand === "rock") {
      document.getElementById("title").innerHTML = "Tie! Try again!";
    } else if (cpuHand === "paper" && userHand === "paper") {
      document.getElementById("title").innerHTML = "Tie! Try again!";
    } else if (cpuHand === "scissors" && userHand === "scissors") {
      document.getElementById("title").innerHTML = "Tie! Try again!";
    } else if (cpuHand === "rock" && userHand === "paper") {
      document.getElementById("title").innerHTML = "You won 🚩";
    } else if (cpuHand === "rock" && userHand === "scissors") {
      document.getElementById("title").innerHTML = "🚩 Computer Won!";
    } else if (cpuHand === "paper" && userHand === "scissors") {
      document.getElementById("title").innerHTML = "You won 🚩";
    } else if (cpuHand === "paper" && userHand === "rock") {
      document.getElementById("title").innerHTML = "🚩 Computer Won!";
    } else if (cpuHand === "scissors" && userHand === "rock") {
      document.getElementById("title").innerHTML = "You won 🚩";
    } else if (cpuHand === "scissors" && userHand === "paper") {
      document.getElementById("title").innerHTML = "🚩 Computer Won!";
    } else {
      alert("Error! Try again!");
    }
  }
