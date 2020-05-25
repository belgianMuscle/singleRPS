let userScore = 0;
let compScore = 0;
const compChoices = ['r','p','s'];
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");
const resultText = document.querySelector(".result > p");
const userScoreText = document.getElementById("userScore");
const compScoreText = document.getElementById("compScore");

function getCompChoice(){
    const choiceNum = Math.floor(Math.random() *3);
    return compChoices[choiceNum];
}

function playHand(userChoice) {
    const compChoice = getCompChoice();
    const choiceCombo = userChoice + compChoice;

    switch (choiceCombo) {
        case 'rs':
        case 'sp':
        case 'pr':
            userWins(userChoice,compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            userLoses(userChoice,compChoice);
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            playDraw(userChoice);
            break
    }
}

function convertChoice(choice){
    var choiceText;
    switch (choice) {
        case 'r':
            choiceText = 'Rock';
            break;
        case 'p':
            choiceText = 'Paper';
            break;
        case 's':
            choiceText = 'Scissor';
            break;
        default:
            break;
    }
    return choiceText;
}

function userWins(uC,cC){
    userScore++;
    userScoreText.innerHTML = userScore;
    compScoreText.innerHTML = compScore;
    resultText.innerHTML = convertChoice(uC) + ' beats ' + convertChoice(cC) + ', you Win!';
}

function userLoses(uC,cC){
    compScore++;
    userScoreText.innerHTML = userScore;
    compScoreText.innerHTML = compScore;
    resultText.innerHTML = convertChoice(uC) + ' gets beaten by ' + convertChoice(cC) + ', you Lose!';
}

function playDraw(uC){
    resultText.innerHTML = "You both picked the same hand, it's a Draw!";
}

function main(){
    rockDiv.addEventListener('click',function(){
        playHand("r");
    });

    paperDiv.addEventListener('click',function(){
        playHand("p");
    });

    scissorDiv.addEventListener('click',function(){
        playHand("s");
    });
}


main ();