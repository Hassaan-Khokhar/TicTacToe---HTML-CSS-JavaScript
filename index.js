const tictactoe = document.querySelector(".tictactoe");

const boxes = document.querySelectorAll(".box")

const win = document.getElementById("winner")

const resetbtn = document.getElementById("resetbtn")

let currentplayer = "X"
let count = 0

let winningcondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function play (event) {
    if (event.target.className !== "tictactoe") {
        if (event.target.innerText == "") {
            event.target.innerText = currentplayer
            count++
            winner()
            currentplayer = (currentplayer === "X") ? "O" : "X"
        }
    }

    if (count === 9){
        win.innerText = "Match Draw"
        resetbtn.style.display = "block"
    }
    
}

tictactoe.addEventListener("click", play);






function winner(){
    
    winningcondition.forEach((item) =>{
        let index0 = item[0]
        let index1 = item[1]
        let index2 = item[2]
        let val0 =  boxes[index0].innerText
        let val1 =  boxes[index1].innerText
        let val2 =  boxes[index2].innerText
        // console.log(index0, val0, index1, val1, index2, val2)
        if(val0 != "" && val1 != "" && val2 != ""){
            if(val0 == val1 && val1 == val2){
                count = 
                boxes[index0].classList.add("winnerClass")
                boxes[index1].classList.add("winnerClass")
                boxes[index2].classList.add("winnerClass")
                win.innerText = "Winner is " + val1;
                resetbtn.style.display = "block"
                tictactoe.removeEventListener("click", play)
            } 
        }
    })
}

resetbtn.addEventListener("click", ()=>{
    count = 0
    currentplayer = "X"
    win.innerText = ""
    boxes.forEach(item =>{
        item.innerText = ""
        item.classList.remove("winnerClass")
    }) 
    tictactoe.addEventListener("click", play);
    resetbtn.style.display = "none"
})