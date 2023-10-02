var Q1 = {
    question:"What is the first letter of the alphabet?",
    answer1:"C",
    answer2:"A",
    answer3:"D",
    answer4:"B"
};
var Q2 = {
    question:"What does the acronym D.O.M. stand for?",
    answer1:"Dunkin' on Mars",
    answer2:"Dreaming of Meadows",
    answer3:"Dominic Toretto",
    answer4:"Document Object Model"
}
var Q3 = {
    question:"What is it called when using the terms 'if', 'else', and 'else if' in a javacript function?",
    answer1:"A Conditional Statement",
    answer2:"A Logical Comparison",
    answer3:"An Object Method",
    answer4:"A Primitive Type"
}
var Q4 = {
    question:"Which statement reads 'A is not greater than B and A is equal to in type and value to C",
    answer1:"A !> B && A === C",
    answer2:"A < !B || A === C",
    answer3:"!A < B && A === C",
    answer4:"A !> B || C === A"
}
var Q5 = {
    question:"What is the infamous cabbage merchant's catchphrase from the show Avatar: The Last Airbender?",
    answer1:"NOT THE CABBAGES",
    answer2:"NOT MY CABBAGES!",
    answer3:"ALL MY CABBAGES!",
    answer4:"WHY MY CABBAGES!"
}
var Q6 = {
    question:"What does the french term Balancer mean?",
    answer1:"To give up, or to reveal",
    answer2:"Country Bumpkin",
    answer3:"Let it go",
    answer4:"Same as above"
}
var Q7 = {
    question:"What is the airspeed velocity of an unladen swallow?",
    answer1:"roughly 21.6 miles per hour",
    answer2:"roughly 23.2 miles per hour",
    answer3:"roughly 20.1 miles per hour",
    answer4:"roughly 29.3 miles per hour"
}
var Q8 = {
    question:"That last question was a doozy wasn't it?",
    answer1:"yes",
    answer2:"yeah",
    answer3:"mhm",
    answer4:"yup"
}
var Q9 = {
    question:"Did you think this quiz was gonna be easy?",
    answer1:"this is the right answer",
    answer2:"No! I'm the right answer!",
    answer3:"the answer below this should say first instead of second",
    answer4:"the second answer is the right answer.",
}
var Q10 = {
    question:"What is the scientific name for the fear of failure?",
    answer1:"Elevatophobia",
    answer2:"Atychiphobia",
    answer3:"Ommetaphobia",
    answer4:"Ludophobia"
};

var startButton = document.getElementById("start button");
var answerA = document.getElementById("answer1");
var answerB = document.getElementById("answer2");
var answerC = document.getElementById("answer3");
var answerD = document.getElementById("answer4");
var buttonA = document.getElementById("buttonA");
var buttonB = document.getElementById("buttonB");
var buttonC = document.getElementById("buttonC");
var buttonD = document.getElementById("buttonD");
var questionBlock = document.getElementById("question");
var timer = document.getElementById("timer");
var highScores = document.getElementById("highScore");
var lastPlayer = document.getElementById("lastPlayer");
var localScore = localStorage.getItem("localScore");
var localHS = localStorage.getItem("localHS");

function question1(){
    questionBlock.textContent = Q1.question;
    answerA.textContent = Q1.answer1;
    answerB.textContent = Q1.answer2;
    answerC.textContent = Q1.answer3;
    answerD.textContent = Q1.answer4;
    buttonA.textContent = "A"
    buttonB.textContent = "B"
    buttonC.textContent = "C"
    buttonD.textContent = "D"
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",question2);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question2(){
    questionBlock.textContent = Q2.question;
    answerA.textContent = Q2.answer1;
    answerB.textContent = Q2.answer2;
    answerC.textContent = Q2.answer3;
    answerD.textContent = Q2.answer4;
    buttonA.removeEventListener("click",wrongAnswer);
    buttonB.removeEventListener("click",question2);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",question3);
}
function question3(){
    questionBlock.textContent = Q3.question;
    answerA.textContent = Q3.answer1;
    answerB.textContent = Q3.answer2;
    answerC.textContent = Q3.answer3;
    answerD.textContent = Q3.answer4;
    buttonA.removeEventListener("click",wrongAnswer);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",question3);
    buttonA.addEventListener("click",question4);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question4(){
    questionBlock.textContent = Q4.question;
    answerA.textContent = Q4.answer1;
    answerB.textContent = Q4.answer2;
    answerC.textContent = Q4.answer3;
    answerD.textContent = Q4.answer4;
    buttonA.removeEventListener("click",question4);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",question5);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question5(){
    questionBlock.textContent = Q5.question;
    answerA.textContent = Q5.answer1;
    answerB.textContent = Q5.answer2;
    answerC.textContent = Q5.answer3;
    answerD.textContent = Q5.answer4;
    buttonA.removeEventListener("click",question5);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",question6);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question6(){
    questionBlock.textContent = Q6.question;
    answerA.textContent = Q6.answer1;
    answerB.textContent = Q6.answer2;
    answerC.textContent = Q6.answer3;
    answerD.textContent = Q6.answer4;
    buttonA.removeEventListener("click",wrongAnswer);
    buttonB.removeEventListener("click",question6);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",question7);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question7(){
    questionBlock.textContent = Q7.question;
    answerA.textContent = Q7.answer1;
    answerB.textContent = Q7.answer2;
    answerC.textContent = Q7.answer3;
    answerD.textContent = Q7.answer4;
    buttonA.removeEventListener("click",question7);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",question8);
    buttonD.addEventListener("click",wrongAnswer);
}
function question8(){
    questionBlock.textContent = Q8.question;
    answerA.textContent = Q8.answer1;
    answerB.textContent = Q8.answer2;
    answerC.textContent = Q8.answer3;
    answerD.textContent = Q8.answer4;
    buttonA.removeEventListener("click",wrongAnswer);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",question8);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",question9);
}
function question9(){
    questionBlock.textContent = Q9.question;
    answerA.textContent = Q9.answer1;
    answerB.textContent = Q9.answer2;
    answerC.textContent = Q9.answer3;
    answerD.textContent = Q9.answer4;
    buttonA.removeEventListener("click",wrongAnswer);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",question9);
    buttonA.addEventListener("click",question10);
    buttonB.addEventListener("click",wrongAnswer);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function question10(){
    questionBlock.textContent = Q10.question;
    answerA.textContent = Q10.answer1;
    answerB.textContent = Q10.answer2;
    answerC.textContent = Q10.answer3;
    answerD.textContent = Q10.answer4;
    buttonA.removeEventListener("click",question10);
    buttonB.removeEventListener("click",wrongAnswer);
    buttonC.removeEventListener("click",wrongAnswer);
    buttonD.removeEventListener("click",wrongAnswer);
    buttonA.addEventListener("click",wrongAnswer);
    buttonB.addEventListener("click",endGame);
    buttonC.addEventListener("click",wrongAnswer);
    buttonD.addEventListener("click",wrongAnswer);
}
function scoreDisplay(){
    alert("Your final score is: " + timer.textContent);
    localStorage.setItem("localScore",timer.textContent);
}
function playAgain() {
    if(confirm("Do you want to play again?")){
        startGame();
    }
    else{
        return;
    }
}
function timerStart(){
    timer.textContent = 90;
    var count = setInterval(function(){
    if(timer.textContent > 0)
        timer.textContent--;
     else{
        clearInterval(count);
        endGame();
        };
    },1000);
}
function wrongAnswer(){
    timer.textContent = parseInt(timer.textContent) - 5;
    nextQuestion();
    }
function nextQuestion(){
    if(questionBlock.textContent === "What is the first letter of the alphabet?"){
            question2();
            }
    else if(questionBlock.textContent === "What does the acronym D.O.M. stand for?"){
            question3();
            }
    else if(questionBlock.textContent === "What is it called when using the terms 'if', 'else', and 'else if' in a javacript function?"){
            question4();
            }
    else if(questionBlock.textContent === "Which statement reads 'A is not greater than B and A is equal to in type and value to C"){
            question5();
            }
    else if(questionBlock.textContent === "What is the infamous cabbage merchant's catchphrase from the show Avatar: The Last Airbender?"){
            question6();
            }
    else if(questionBlock.textContent === "What does the french term Balancer mean?"){
            question7();
            }
    else if(questionBlock.textContent === "What is the airspeed velocity of an unladen swallow?"){
            question8();
            }
    else if(questionBlock.textContent === "That last question was a doozy wasn't it?"){
            question9();
            }
    else if(questionBlock.textContent === "Did you think this quiz was gonna be easy?"){
            question10();
            }
    else if(questionBlock.textContent === "What is the scientific name for the fear of failure?"){
            endGame();
        }
    }
function startGame(){
    timerStart();
    question1();
    // lastPlayer.textContent = localHS;
    // highScores.textContent = localScore;
    console.log("i am working");
};
function endGame(){
    getInfo();
    scoreDisplay();
    playAgain();
}
function getInfo (){
    var userName = prompt("What is your name?");
    if(userName === null || userName === ''){
        alert("no name detected, please try again")
        getInfo();
    }
    localStorage.setItem("localHS",userName);
    // saveData();
};
function saveData(){
    var userName = localHS;
    var userScore = localScore;
    if(!userName || !userScore){
        return;
    }
    lastPlayer.textContent = userName;
    highScores.textContent = userScore;
};
startButton.addEventListener("click", startGame);
saveData();
