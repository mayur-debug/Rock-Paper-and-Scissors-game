let uesrScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const meg=document.querySelector("#meg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");

const genCompChoice= ()=>{
    let options=["rock","paper","scissors"];
    const renIdx=Math.floor(Math.random()*3);
    return options[renIdx];
};

const drawGame=()=>{
    console.log("Game was draw.");
    meg.innerText="Game was draw. try again";
    meg.style.backgroundColor="blue";
};  

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        uesrScore++;
        usersc.innerText=uesrScore;
        meg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        meg.style.backgroundColor="green";
        
        
    }else{
        compScore++;
        compsc.innerText=compScore;
        console.log("you lose!");
        meg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        meg.style.backgroundColor="red";
    }

};

const playGame=(userChoice)=>{ 
    // generate computer choice
    const compChoice=genCompChoice();
    
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice ==="paper"?false : true;

        }else if(userChoice==="paper"){
            userWin=compChoice=== "scissors"?false:true;

        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });

});
