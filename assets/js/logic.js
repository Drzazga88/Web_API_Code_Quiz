// DOM elements from index.html
var timerEl = document.querySelector("#time");
var startQuizEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedbackEl = document.querySelector("#feedback");

// quiz state variables
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerID;

function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  // unhide questions section
  questionsEl.removeAttribute("class");
  // start timer
  timerID = setInterval(clockTick, 1000);
  // show starting time
  timerEl.textContent = time;
  //for question to appear we need to call next function --> getQuestion()
  getQuestion();
}

function getQuestion() {
  // get current question from array (questions.js)
  var currentQuestion = questions[currentQuestionIndex];
  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = `${i + 1}. ${choice}`;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}
// variables for audio
var audio = new Audio("assets/sfx/Noooo.mp3");
var audioTwo = new Audio("assets/sfx/Excellent_Sound_Effect.mp3");

function questionClick() {
  // check if user guesses wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // display new time on the page
    timerEl.textContent = time;
    audio.play();
    feedbackEl.textContent = "Wrong";
    feedbackEl.style.color = "red";
  } else {
    audioTwo.play();
    feedbackEl.textContent = "Good";
    feedbackEl.style.color = "green";
  }
  // flash good/bad feedback
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);
  // next question
  currentQuestionIndex++;
  // time checker
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {
  // stop timer
  clearInterval(timerID);
  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    // get saved scores from local storage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };
    // save to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}
// submit initials
submitButton.onclick = saveHighScore;
// start quiz
startQuizEl.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
