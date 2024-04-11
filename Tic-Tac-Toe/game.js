let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".restart");
let newGameBtn = document.querySelector("#new-btn");
let msgConatainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, //playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  enableboxes();
  msgConatainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgConatainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};


// Function to handle square clicks
function handleSquareClick(event) {
    const boxes = event.target;
    if (boxes.innerText === '') {
        boxes.innerText = 'X'; // Display 'X' (you can alternate between 'X' and 'O')
        moveCount++;
        if (moveCount === 9) {
            drawCheck(); // Check for a draw
        }
    }
}

// Function to check for a draw
function drawCheck() {
    if (moveCount === 9) {
        // Generate a random number from 1 to 9
        const randomboxes = Math.floor(Math.random() * 8) + 1;
        // Reset the corresponding square (adjust your square IDs accordingly)
        document.getElementById(`sqr${randomboxes}`).innerText = '';
        alert('It\'s a draw!'); // Display a message
    }
}


newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
