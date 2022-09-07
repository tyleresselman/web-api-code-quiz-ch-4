var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");
var submissionPage = document.querySelector("#submission-page");
var questionHeading = document.querySelector("#question-heading");
// var answerOne = document.querySelector("#answer-1");
// var answerTwo = document.querySelector("answer-2");
// var answerThree = document.querySelector("answer-3");
// var answerFour = document.querySelector("answer-4");
var timer;
var timerCount;

var questionsAnswers = [
  {
      questionText: "What file extension does one use for a Javascript file?",
      options: [".jpg", "doc", ".gif", ".js"],
      correctAns: "3",
  },

  {
      questionText: "Which of the following statements can be used to declare a variable in Javascript?",
      incorrectAns: ["hat","var", "eat", "scram"],
      correctAns: "1",
  },

  {
      questionText: "Who does Javascipt work for?",
      incorrectAns: ["Number 2", "The Man", "YOU", "Barbra Streisand"],
      correctAns: "2",
  },
]

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 90;
    startTimer();
    startPage.hidden = true;
    questionPage.hidden = false;

}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  function showQuestion() {
    
  }




