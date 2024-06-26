const buttons=document.querySelectorAll('.buttons')

buttons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        console.log("Button clicked:", btn.textContent);
        let humanpick=btn.textContent;
        playground(humanpick)
    })
})


let humanscore=0;
let computerscore=0;
let result=0;

function getcomputerchoice(){
    let choice=Math.random()*3;
    console.log(choice)

    if(choice>2){
        return "rock"
    }
    else if(choice>1){
        return "paper"
    }
    else
        return "scissor"
}


// function gethumanchoice(){
//     return prompt("What would you like to choose?")
// }

function play(human,computer){
    let humanpick=human.toLowerCase();
    let computerpick=computer;

    if(humanpick=='rock'&&computerpick=='rock')
        result="Game Tied!!"
    if(humanpick=='rock'&&computerpick=='paper')
        {result="COmputer WOn"
            computerscore++;
        }
    if(humanpick=='rock'&&computerpick=='scissor')
        {result="Human Won"
            humanscore++;
        }
    if(humanpick=='paper'&&computerpick=='paper')
        result="Game Tied!!"
    if(humanpick=='paper'&&computerpick=='rock')
        {result="Human Won"
            humanscore++;
        }
    if(humanpick=='paper'&&computerpick=='scissor')
       {result="Human Won"
        humanscore++;
       }
    if(humanpick=='scissor'&&computerpick=='scissor')
         result="Game Tied!!"
    if(humanpick=='scissor'&&computerpick=='rock')
        {
           result="COmputer WOn"
            computerscore++;
        }
    if(humanpick=='scissor'&&computerpick=='paper')
        {result="Human Won"
            humanscore++;
        }
}

// function playground(){
//     for(let i=0;i<5;i++){
//         play(gethumanchoice,getcomputerchoice);
//     }
//     console.log(`The scores are :- Human Score - ${humanscore} and Computer Score - ${computerscore}`)
// }

// playground();

function playground(humanpick){
    let computerSelection=getcomputerchoice();
    console.log("Human Pick:", humanpick, "Computer Pick:", computerSelection);
    // let humanSelection=humanpick
    play(humanpick,computerSelection)

    playerScore=document.querySelector('.player-score h2')
    compScore=document.querySelector('.computer-score h2')
    winner=document.querySelector('.win p')

    playerScore.textContent=`Player : ${humanscore}`
    compScore.textContent=`Computer : ${computerscore}`
    winner.textContent=`The winner is : ${result}`

    if(humanscore>=5){
        winner.textContent="Human Won the entire game"
    }
    else if(computerscore>=5){
        winner.textContent="Computer Won the entire game"
    }

}


