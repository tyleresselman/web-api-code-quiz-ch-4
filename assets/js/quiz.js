// Establishment of baseline variables
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("#timer-count");
var startPage = document.querySelector("#start-page");
var questionPage = document.querySelector("#question-page");
var submissionPage = document.querySelector("#submission-page");
var questionHeading = document.querySelector("#question-heading");
var ans0 = document.querySelector("#ans-0");
var ans1 = document.querySelector("#ans-1");
var ans2 = document.querySelector("#ans-2");
var ans3 = document.querySelector("#ans-3");
var timer;
var timerCount;
var currentQuestion = 0;

// Here are the methods I used to hide the quiz elements on the page and keep the main page displayed
questionPage.hidden = true;
submissionPage.hidden = true;

// My array of questions, potential answers to those questions, and the correct answer
var questionsAnswers = [
  {
      questionText: "What file extension does one use for a Javascript file?",
      options: [".jpg", "doc", ".gif", ".js"],
      correctAns: ".js",
  },

  {
      questionText: "Which of the following statements can be used to declare a variable in Javascript?",
      options: ["hat","var", "eat", "scram"],
      correctAns: "var",
  },

  {
      questionText: "Who does Javascipt work for?",
      options: ["Number 2", "The Man", "YOU", "Barbra Streisand"],
      correctAns: "YOU",
    },
  ]

  // The event listener waiting for the click to start the quiz
  startButton.addEventListener("click", startQuiz);
  // And the corresponding function intiated by the click
  function startQuiz() {
    timerCount = 90;
    startTimer();
    startPage.hidden = true;
    showQuestion();
    
}

// The function to start the timer
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        // TO DO: include a function to end the quiz here
      }
    }, 1000);
  }
  
  // The function for hiding the title page of the quiz and reveal the series of questions
  function showQuestion() {
    
    questionPage.hidden = false

    questionHeading.textContent = questionsAnswers[currentQuestion].questionText;
    ans0.textContent = questionsAnswers[currentQuestion].options[0];
    ans0.value=questionsAnswers[currentQuestion].options[0];
    ans1.textContent = questionsAnswers[currentQuestion].options[1];
    ans1.value=questionsAnswers[currentQuestion].options[1];
    ans2.textContent = questionsAnswers[currentQuestion].options[2];
    ans2.value=questionsAnswers[currentQuestion].options[2];
    ans3.textContent = questionsAnswers[currentQuestion].options[3];
    ans3.value=questionsAnswers[currentQuestion].options[3];

    // From collaboration with TA Paul Cwik: An alternative way to store some data inside the element behind a custom attribute ("data-answer-value")
    // ans3.setAttribute("data-answer-value", questionsAnswers[currentQuestion].options[3])

    
  }
  
  function rightOrwrong(event) {
    event.preventDefault();

    var ansSelected = event.currentTarget;
    console.log(ansSelected);
    var correctChoice = questionsAnswers[currentQuestion].correctAns
    console.log(correctChoice)
    
    if (ansSelected.value === correctChoice){
      console.log('correct answer')
      currentQuestion += 1;
      if (currentQuestion >= questionsAnswers.length) {
        // TO DO: include the end quiz function here
      } else {
        showQuestion()
      }
      
    } else {
      timer+= -10;
      console.log('values dont match')
    }
    
    
  }
  
  ans0.addEventListener("click", rightOrwrong);
  ans1.addEventListener("click", rightOrwrong);
  ans2.addEventListener("click", rightOrwrong);
  ans3.addEventListener("click", rightOrwrong);

  
  
// function endGame() 
  // What will happen with this function is when we run out of time or all the questions have been answered correctly, this will be called
  //This function will grab the scores from each answered question and populate them in the submission page where the user will be able to save their intials and score for the Scoreboard page
  // Submitting initials and score will then redirect the user to the scoreboard.html page.
