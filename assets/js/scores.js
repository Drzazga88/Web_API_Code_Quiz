function displayHighScores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b){
        return b.score - a.score;
    });

    highscores.forEach(function(score){
        var lis = document.createElement("li");
        lis.textContent = score.initials + " - " + score.score;

        var olis = document.getElementById("highscores");
        olis.appendChild(lis);
    });
}

function clearHighScores(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;

displayHighScores();