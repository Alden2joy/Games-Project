let gamSqu = [];
let userSqu = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("game started");
        started = true;

        setTimeout(levelUp(), 1000)
    }
})

let h2 = document.querySelector("h2");

function levelUp(){
    userSqu = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdn = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdn];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gamSqu.push(ranColor);

    console.log(gamSqu);

    gameFlash(ranBtn);
}

function gameFlash(btns){
    btns.classList.add("flash");
    setTimeout(() => {
        btns.classList.remove("flash")
    }, 250);
}

let body = document.querySelector("body");

function checkAns(idx){
    if(gamSqu[idx] === userSqu[idx]){
        if(gamSqu.length == userSqu.length){
            levelUp();
        }
    } else{
        h2.innerText = `Game Over! Press any key to reset game`
        reset();
        body.style.backgroundColor = "red"
        setTimeout(()=>{
            body.style.backgroundColor = "white"
        },250)
    }
}



let allBtns = document.querySelectorAll(".btn")

allBtns.forEach(
    (b)=>{
        b.addEventListener("click",()=>{
            userFlash(b)
        })
    }
)

function userFlash(btns){
    btns.classList.add("user");
    setTimeout(() => {
        btns.classList.remove("user")
    }, 250);
    let uColor = btns.getAttribute("id");
    userSqu.push(uColor);
    console.log(userSqu);

    checkAns(userSqu.length -1)
}

function reset(){
    started = false;
    gamSqu = [];
    userSqu = [];
    level = 0;
}