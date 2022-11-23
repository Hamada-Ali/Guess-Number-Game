const changeMsg = document.querySelector(".message");
const btn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const secret = document.querySelector(".number");
const score = document.querySelector(".score");
const again = document.querySelector(".again");
const highScoreEle = document.querySelector(".highscore");

let scoreCount = 20;
let secretNumber = Math.trunc(Math.random() * 20) * 1;
let highScore = 0;
btn.addEventListener('click', () => {
    const gesNum = Number(guess.value);
    //console.log(gesNum, secretNumber, scoreUpdate)
    if(!gesNum) {
        changeMsg.textContent = "⛔ no number!"
    } else if(score.textContent > 1) {
         if(gesNum < secretNumber) {
            changeMsg.textContent = "👇 too low"
            scoreCount--;
            score.textContent = scoreCount;
        } else if(gesNum > secretNumber) {
            changeMsg.textContent = "👆🏻 too high"
            scoreCount--;
            score.textContent = scoreCount;
        } else if(gesNum === secretNumber) {
            changeMsg.textContent = "🎉 correct number"
            document.body.style.backgroundColor = "green";
             secret.textContent = secretNumber;
             secret.style.width = "30rem"
            if(scoreCount > highScore) {
                highScore = scoreCount;
                highScoreEle.textContent = highScore;
            }
        }
    } else {
        score.textContent = 0;
        changeMsg.textContent = "😢 you lost!"
    } 
});

again.addEventListener('click', () => {
    // rest score count to 20
    changeMsg.textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    secret.style.width = "15rem";
    secret.textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20) * 1;
    guess.value = null;
    score.textContent = scoreCount = 20;
});
