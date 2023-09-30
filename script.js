//variable declaritions
var Q1 = {
    answer1:"1",
    answer2:"2",
    answer3:"3",
    answer4:"4"
};
var Q2 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q3 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q4 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q5 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q6 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q7 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q8 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q9 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
}
var Q10 = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
};
    //timeRemaining
//querySelectors
var startButton = document.querySelector("#button");
var answerA = document.querySelector("#answer1");
var answerB = document.querySelector("#answer2");
var answerC = document.querySelector("#answer3");
var answerD = document.querySelector("#answer4");
var questionBlock = document.querySelector("#question");
var timer = document.querySelector("#timer");
var highScores = document.querySelector("#high score")
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
//function to start the game
function startGame(){
    timer.textContent = "90"

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
    //stop timer
    if (timeLeft !== 0){

    }
    //prompt for their initials
    //save score into high score
    //clear time
    scoreDisplay();
    playAgain();
}
startButton.addEventListener("click", startGame);
answerA.addEventListener("click");
answerB.addEventListener("click");
answerC.addEventListener("click");
answerD.addEventListener("click");
