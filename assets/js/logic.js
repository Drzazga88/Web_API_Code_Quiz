//DOM elements
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var startQuizEl = document.querySelector("#start");
var timerEl = document.querySelector("#time");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerID;
//day 1 exercise 9 and 10 - timer

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerID = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}

//when clicking start quiz, first question appear and timer goes down
//for question to appear we need to call next function --> getQuestion()

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = `${i + 1}. ${choice}`;
    //choiceNode.onclick = questionClick;
    choiceNode.addEventListener("click", questionClick);
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong";
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Good";
    feedbackEl.style.color = "green";
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {
  clearInterval(timerID);

  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighScore();
  }
}

submitButton.onclick = saveHighScore;
startQuizEl.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;
