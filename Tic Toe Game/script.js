let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let h2 = document.querySelector("h2");
let gameBox = document.querySelector(".game");

let turn = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        resetBtn.addEventListener("click",()=>{
            box.innerText = "";
            box.disabled = false;
            h2.style.display = "none";
            gameBox.style.height = "530px"
        })
        checkWinner();
    })
})

let checkWinner = ()=>{
    for(let pattern of winPattern){

        let value1 = box[pattern[0]].innerText;
        let value2 = box[pattern[1]].innerText;
        let value3 = box[pattern[2]].innerText;

        if(value1 !== "" && value1 === value2 && value2 === value3){
            h2.innerText = `Congratulation, Match Winner is ( ${value1} ) 🥳`
            h2.style.display = "block";
            h2.style.color = "green"
            gameBox.style.height = "570px"

        }
    }
}
