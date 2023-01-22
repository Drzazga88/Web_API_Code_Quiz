function displayHighScores() {
  // either get scored from local storage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // sort high scored by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // create list tag for each high score
    var lis = document.createElement("li");
    lis.textContent = score.initials + " - " + score.score;
    // display on page
    var olis = document.getElementById("highscores");
    olis.appendChild(lis);
  });
}

function clearHighScores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;
// run function when page loads
displayHighScores();
