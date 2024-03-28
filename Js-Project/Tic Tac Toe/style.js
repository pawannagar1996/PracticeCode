
const boxes = document.querySelectorAll(".box")
const reset = document.querySelector("#reset")
const playAgain = document.querySelector("#playAgain")
const msg = document.querySelector("#msg")
const coverImg = document.querySelector(".cover-img")
const h2ShowTurn = document.querySelector("h2")

let turnO = true //playerO , player X

h2ShowTurn.innerHTML = `Turn : Player 1`
const winPatterns = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log(box)
       if(turnO){
box.innerHTML="O";
box.style.backgroundColor="var(--oBackgroundColor)";
turnO = false;


       }else{
        box.innerHTML="X";
        box.style.backgroundColor="var(--xBackgroundColor)";
turnO = true;
       }

       box.disabled = true;

       checkWinner()

       let turn = turnO ? "Turn : Player 1" : "Turn : Player 2" ;
       h2ShowTurn.innerHTML = turn
    })
})

const checkWinner = () => { 
for (const pattern of winPatterns) {
    // console.log("pattern " , pattern[0],pattern[1],pattern[2]);
    // console.log("pattern " , boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if(posVal1 != "" && posVal2 != "" && posVal3 != ""){

if( posVal1 === posVal2 && posVal2 === posVal3){
    console.log("winner");
showWinner(posVal1)

   
    // console.log("boxes ",boxes.disabled == true )
    // console.log(boxes )
    // boxes.disabled = true
}
    }
}
}

const showWinner = (winner) =>{
    coverImg.classList.remove("hide");
    console.log(winner)
    if(winner == "O"){
        msg.innerHTML = `Player 1 (${winner}) Winner `
    }
    else{msg.innerHTML =` Player 2 (${winner}) Winner `}
}