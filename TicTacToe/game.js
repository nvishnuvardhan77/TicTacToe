const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const newGame = document.querySelector("#new");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const status = document.querySelector("#status");
const scoreEls = {
  X: document.querySelector("#scoreX"),
  O: document.querySelector("#scoreO"),
  D: document.querySelector("#scoreD"),
};

let turnX = true;
let count = 0;
let overlayTimer;
const scores = { X: 0, O: 0, D: 0 };

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    const mark = turnX ? "X" : "O";
    box.innerText = mark;
    box.classList.add(mark.toLowerCase(), "pop");
    box.setAttribute("aria-label", `Cell ${i + 1}, ${mark}`);
    box.disabled = true;
    count++;

    const line = getWinningLine();
    if (line) {
      showWinner(mark, line);
    } else if (count === 9) {
      showDraw();
    } else {
      turnX = !turnX;
      status.innerText = `${turnX ? "X" : "O"}'s turn`;
    }
  });
});

const resetGame = () => {
  clearTimeout(overlayTimer);
  turnX = true;
  count = 0;
  boxes.forEach((box, i) => {
    box.disabled = false;
    box.innerText = "";
    box.className = "box";
    box.setAttribute("aria-label", `Cell ${i + 1}, empty`);
  });
  status.innerText = "X's turn";
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const addScore = (key) => {
  scores[key]++;
  scoreEls[key].innerText = scores[key];
};

const showOverlay = (text) => {
  msg.innerText = text;
  overlayTimer = setTimeout(() => {
    msgContainer.classList.remove("hide");
    newGame.focus();
  }, 700);
};

const showWinner = (winner, line) => {
  line.forEach((i) => boxes[i].classList.add("win"));
  addScore(winner);
  status.innerText = `${winner} wins`;
  disableBoxes();
  showOverlay(`Congratulations, Winner is ${winner}`);
};

const showDraw = () => {
  addScore("D");
  status.innerText = "Draw";
  disableBoxes();
  showOverlay("The Game is a Draw!");
};

const getWinningLine = () => {
  for (let pattern of winning) {
    const [a, b, c] = pattern;
    const v = boxes[a].innerText;
    if (v !== "" && v === boxes[b].innerText && v === boxes[c].innerText) {
      return pattern;
    }
  }
  return null;
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);