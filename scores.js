//Print highscores by ordering them by highscore

function printHighScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [] 
    highscores.sort(function (a,b){
        return b.score - a.score;
    });
    for(var i = 0; i<highscores.length; i++ ){
        var li = document.createElement("li")
        li.textContent = highscores[i].initials + " - " + highscores[i].score
        var ol = document.querySelector("#highscores")
        ol.appendChild(li)
    }
}

//Clear highscores from page
function clearHighscores(){
    window.localStorage.removeItem("highscores")
    window.location.reload()
}

//Event listener for clear button
document.querySelector("#clear").addEventListener("click", clearHighscores)
printHighScores();