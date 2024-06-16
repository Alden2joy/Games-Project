let userScore = 0;
let compScore = 0;

let option = document.querySelectorAll(".choices");



option.forEach((opt)=>{
    opt.addEventListener("click",()=>{
        let userScore = opt.getAttribute("id");
        playGame(userScore)
    })
})

let playGame = (userScore)=>{
    console.log(`User Score is ${userScore}`);
    let compV = getcompScore()
    console.log(`Computer Value is ${compV}`);

    if(userScore === compV){
        drawFunction();
    } else{
        let userWin = true;
        if(userScore === "rock"){
            userWin = compV === "paper"? false: true;
        } else if(userScore === "paper"){
            userWin = compV === "scissors"? false: true;
        } else{
            userWin = compV === "rock"? false: true
        }
        showWinner(userWin, compV);
    }

}

let getcompScore = ()=>{
    let option = ["rock","paper","scissors"];
    let optIdx = Math.floor(Math.random()*3);
    let value = option[optIdx];
    return value;
}

let drawFunction = ()=>{
    console.log("Match Draw");
    btn.innerText = "Match Draw";
    btn.style.backgroundColor = "rgb(27, 21, 44)";
}

let userWinningscore = document.querySelector(".userscore");
let compWinningscore = document.querySelector(".compscore");
let btn = document.querySelector("button");

let showWinner = (userWin, compV)=>{
    if(userWin){
        userScore++
        userWinningscore.innerText = userScore;
        btn.innerText = `You Beat ${compV}`;
        btn.style.backgroundColor = "green";
        btn.style.color = "white";

    } else{
        compScore++;
        compWinningscore.innerText = compScore;
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        btn.innerText = "You lose"
    }
}