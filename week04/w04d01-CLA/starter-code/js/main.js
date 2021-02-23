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

  player1 = [];
  player2 = [];
  flag = true;

  characterP1 = "🐼";
  characterP2 = "🐶";

  html = {
    boxesDiv: document.getElementById("boxes"),
    boxes: null,
    characterButton: document.getElementById("card-front-btn"),
    front: document.getElementById("front"),
    back: document.getElementById("back"),
    charactersChoice: document.querySelectorAll(".playerChose"),
  };

  start() {
    console.log("START MAIN");

    this.html.charactersChoice.forEach((player, idx) =>
      player.addEventListener("click", (event) => {
        if (idx == 0) {
          this.characterP1 = event.target.innerText;
          document.getElementById("characterP1").innerText = this.characterP1;
          document.getElementById("characterP1-1").innerText = this.characterP1;
        } else {
          this.characterP2 = event.target.innerText;
          document.getElementById("characterP2").innerText = this.characterP2;
          document.getElementById("characterP2-2").innerText = this.characterP2;
        }
      })
    );

    this.html.characterButton.addEventListener("click", () => {
      this.html.front.classList.toggle("active");
      this.html.back.classList.toggle("inActive");
    });

    this.html.boxes = Array(9)
      .fill("")
      .map((element, idx) => {
        const html = document.createElement("div");
        html.classList.add("box");
        html.id = `${idx + 1}`;
        return html;
      });

    this.html.boxes.forEach((box) => this.html.boxesDiv.appendChild(box));

    this.html.boxes.forEach((box, idx) => {
      box.addEventListener("click", () => {
        if (this.flag) {
          this.changeColor("circle-p1", "#333");
          this.changeColor("circle-p2", "green");
          box.innerHTML = `<h4 id = "c${idx + 1}">${this.characterP1}</h4>`;
          this.flag = !this.flag;
          this.player1.push(parseFloat(box.getAttribute("id")));
          this.winnerFunc(this.player1, this.characterP1 + " is win");
        } else {
          this.changeColor("circle-p1", "green");
          this.changeColor("circle-p2", "#333");
          box.innerHTML = `<h4 id = "c${idx + 1}" >${this.characterP2}</h4>`;
          this.flag = !this.flag;
          this.player2.push(parseFloat(box.getAttribute("id")));
          this.winnerFunc(this.player2, this.characterP2 + " is win");
        }
      });
    });
  }

  changeColor(id, color) {
    document.getElementById(id).style.background = color;
  }

  checkWin = (a, b) => {
    console.log("checkWin", a, b);
    return a.includes(b[0]) && a.includes(b[1]) && a.includes(b[2]);
  };

  winnerDance = (win) => {
    win.forEach((ele) => {
      document.querySelector(`#c${ele}`).classList.add("dance");
    });
  };

  winnerFunc = (array, displayM) => {
    this.winningCombinations.forEach((element) => {
      if (this.checkWin(array, element)) {
        swal(displayM);
        this.winnerDance(element);
      }
    });
  };

  // <<<<<< CALSS ENDS HERE >>>>>>>>
}

var TTT = new Game();

TTT.start();
