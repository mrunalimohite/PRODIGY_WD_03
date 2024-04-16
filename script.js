const btn = document.querySelectorAll(".btn");
const popup = document.querySelector(".popup");
const newGame = document.getElementById("new-game");
const msg = document.getElementById("msg");
const playTurn = document.getElementById("player");

//x will play fist
let xTurn = true;
let count = 0;

btn.forEach((element) => {
    element.addEventListener("click", ()=> {
        if (xTurn) {
            xTurn = false;

            playTurn.innerHTML = 'O Turn';
            playTurn.classList.remove('x')
            playTurn.classList.add('o')

            element.innerHTML = "X";
            element.classList.remove('o');
            element.classList.add('x');
        } else {
            xTurn = true;

            playTurn.innerHTML = 'X Turn';
            playTurn.classList.remove('o')
            playTurn.classList.add('x')

            element.innerHTML = "O";
            element.classList.remove('x');
            element.classList.add('o');
        }

        element.disabled = true;

        count += 1;
        if(count == 9) {
            drawmatch();
        }

        checkwin();
    })
})

const disableBtn = () => {
    btn.forEach((element) => {
        element.disabled = true;
    })

    popup.classList.remove("hide");
}

const enableBtn = () => {
    btn.forEach((element) => {
        element.innerHTML = "";
        element.disabled = false;
    })

    popup.classList.add("hide");
}

const winMatch = (player) => {
    disableBtn();
    if (player == "X") {
        msg.innerText = "X Wins";
    } else {
        msg.innerText = "O Wins";
    }
};

const drawmatch = () => {
    disableBtn();
    msg.innerText = "The Match is Drew"
}

newGame.addEventListener("click", () => {
    count = 0;
    enableBtn();

    xTurn = true;
    playTurn.innerText = "X Turn";
    playTurn.classList.remove('o');
    playTurn.classList.add('x')
});

const checkwin = () => {
    const winningPattern = [    
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];

        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if(element1 == element2 && (element2 == element3)) {
                winMatch(element1);
            }
        }
    };
}

