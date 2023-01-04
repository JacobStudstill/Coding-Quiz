var timerID;
var questionIndex = 0;
var time = 60;
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");





function startGame() {
    var startScreenEl = document.querySelector("#main");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerID = setInterval(countDown, 1000);
    timerEl.textContent = time;
    getQuestion() 
}










startBtn.onclick = startGame;