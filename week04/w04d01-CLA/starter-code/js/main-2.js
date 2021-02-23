class Game {
  winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [1, 5, 9],
    [3, 5, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];

  player1 = {
    character: "🐼",
    score: 0,
    moves: [],
  };

  player2 = {
    character: "🐶",
    score: 0,
    moves: [],
  };

  round = 1;

  isOn = false;

  html = {
    boxesDiv: document.getElementById("boxes"),
    boxes: null,
    startButton: document.getElementById("card-front-btn"),
    front: document.getElementById("front"),
    back: document.getElementById("back"),
    charactersChoice: document.querySelectorAll(".playerChose"),
  };

  start() {
    console.log("START MAIN-2");

    this.initCharactersChoice();

    this.initStartButton();

    this.initBoxes();

    this.initBoard();
  }

  initCharactersChoice() {
    this.html.charactersChoice.forEach((player, idx) =>
      player.addEventListener("click", (event) => {
        if (idx == 0) {
          this.player1.character = event.target.innerText;
          document.getElementById(
            "characterP1"
          ).innerText = this.player1.character;
          document.getElementById(
            "characterP1-1"
          ).innerText = this.player1.character;
        } else {
          this.player2.character = event.target.innerText;
          document.getElementById(
            "characterP2"
          ).innerText = this.player2.character;
          document.getElementById(
            "characterP2-2"
          ).innerText = this.player2.character;
        }
      })
    );
  }

  initStartButton() {
    this.html.startButton.addEventListener("click", () => {
      this.html.front.classList.toggle("active");
      this.html.back.classList.toggle("inActive");
      this.isOn = true;
    });
  }

  initBoxes() {
    this.html.boxes = Array(9)
      .fill("")
      .map((element, idx) => {
        const html = document.createElement("div");
        html.classList.add("box");
        html.id = `${idx + 1}`;
        return html;
      });

    this.html.boxes.forEach((box) => this.html.boxesDiv.appendChild(box));
  }

  initBoard() {
    this.html.boxesDiv.addEventListener("click", (event) => {
      if (!this.isOn) {
        swal("Start the game you fool!");
      } else if (this.round >= 9) {
        swal(" Game is a TIE!");
        this.initBoxes();
        this.round = 1;
      } else if (this.round % 2 === 1) {
        this.changeColor("circle-p1", "#333");
        this.changeColor("circle-p2", "green");
        event.target.innerHTML = `<h4 id = "c${event.target.id}">${this.player1.character}</h4>`;
        this.round++;
        this.player1.moves.push(parseFloat(event.target.getAttribute("id")));
        if (this.checkIsWinner(this.player1)) {
          this.player1.score++;
          this.initBoxes();
        }
      } else if (this.round % 2 === 0) {
        this.changeColor("circle-p1", "green");
        this.changeColor("circle-p2", "#333");
        event.target.innerHTML = `<h4 id = "c${event.target.id}" >${this.player2.character}</h4>`;
        this.round++;
        this.player2.moves.push(parseFloat(event.target.getAttribute("id")));
        if (this.checkIsWinner(this.player2)) {
          this.player2.score++;
          this.initBoxes();
        }
      }
    });
  }

  changeColor(id, color) {
    document.getElementById(id).style.background = color;
  }

  checkWin = (a, b) => {
    return a.includes(b[0]) && a.includes(b[1]) && a.includes(b[2]);
  };

  winnerDance = (win) => {
    win.forEach((ele) => {
      document.querySelector(`#c${ele}`).classList.add("dance");
    });
  };

  checkIsWinner = (player) => {
    this.winningCombinations.forEach((element) => {
      if (this.checkWin(player.moves, element)) {
        swal(player.character + "  is the winner!");
        this.winnerDance(element);
      }
    });
  };

  // <<<<<< CALSS ENDS HERE >>>>>>>>
}

var TTT = new Game();

TTT.start();
