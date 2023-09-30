//variable declaritions
var Q1 = {
    question:"what is my favorite color?",
    answer1:"blue",
    answer2:"red",
    answer3:"green",
    answer4:"chartruse, chartroose?, chartruese?, how do you spell that word?"
};
var Q2 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q3 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q4 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q5 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q6 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q7 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q8 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q9 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q10 = {
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
};
    //timeRemaining
//getElementByIds
var startButton = document.getElementById("button");
var answerA = document.getElementById("answer1");
var answerB = document.getElementById("answer2");
var answerC = document.getElementById("answer3");
var answerD = document.getElementById("answer4");
var questionBlock = document.getElementById("question");
var timer = document.getElementById("timer");
var highScores = document.getElementById("high score");
function scoreDisplay(){
    alert("Your final score is: " + highScores);
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
    if(timer.textContent  > 0)
        timer.textContent--;
     else{
            clearInterval(count);
            endGame();
        };
    },50);
}
//function to start the game
function startGame(){
    timerStart();
    questionBlock.textContent = Q1.question;
    answerA.textContent = Q1.answer1;
    answerB.textContent = Q1.answer2;
    answerC.textContent = Q1.answer3;
    answerD.textContent = Q1.answer4;
    console.log("i am working");

    //listen for button start

    //start timer in intervals of 1000 ms
};
//first question displays and corresponding answers
    //carousel-box like array to keep track of what question you are on
//use eventlisteners on buttons check for answers
    //compare clicked button to what we have as correct answer
    //if wrong display WRONG!!! and decrement an amount of time from timer
    //if correct display CORRECT!!!
    //in either case move onto next question
    //if end of questions end game
//repeat until timer hits 0 or run out of questions
    //when our array of questions returns undefined or length-1 for index
    //end game
//Display of time remaining as score
//end game
function endGame(){
    var finalScore = ""
    finalScore = timer.textContent
    highScores =finalScore
    //stop timer
    //prompt for their initials
    //save score into high score
    //clear time
    scoreDisplay();
    playAgain();
}
startButton.addEventListener("click", startGame);
// answerA.addEventListener("click");
// answerB.addEventListener("click");
// answerC.addEventListener("click");
// answerD.addEventListener("click");
// startGame();