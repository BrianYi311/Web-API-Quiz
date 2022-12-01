// Questions to be displayed
var questions = [
    {
        question: 'Who holds the current record for most rushing yards in an NFL game?',
        choices: 'A. Adrian Peterson B. Walter Payton C. OJ Simpson D. Derrick Henry ',
        answer: 'A'
    },
    {
        question: 'Who won the Super Bowl in 2021"?',
        choices: 'A.Eagles B. Buccaneers C. Rams D. None of the above"',
        answer: 'C'
    },
    {
        question: 'How many yards does it take to reach a first down?',
        choices: 'A. 20 B. 5 C. 10 D. 15',
        answer: 'C'
    },
    {
        question: 'Which NFL player is objectively viewed as the Greatest of All Time?.',
        choices: 'A.Tom Brady B. Michael Jordan C. Lebron James D. Peyton Manning',
        answer: 'A'
    },
    {
        question: 'Which offensive player that snaps the ball to the Quarterback?',
        choices: 'A. Wide Reciever B. Tight End C. Right Guard D. Center',
        answer: 'D'
    }
]

//Elements from the HTML

var timerEl = document.getElementById("time");
var highscoresContainer = document.getElementById("Highscores");
var highscoreEl = document.getElementById("all-scores");
var introContainer = document.getElementById("Instructions");
var startBtn = document.getElementById("start-quiz");
startBtn.addEventListener("click", setTimer);
var MCContainer = document.getElementById("MC-questions");
var questionEl = document.getElementById("question");
var choicesContainer = document.getElementById("multiple-choice");
var choiceA = document.getElementById("chA");
var choiceB = document.getElementById("chB");
var choiceC = document.getElementById("chC");
var choiceD = document.getElementById("chD");
var gameEnd = document.getElementById("Game-Over")
var scoreEl = document.getElementById("result")
var initialsEL= document.getElementById("initials")
var submitScore= document.getElementById("submit")
