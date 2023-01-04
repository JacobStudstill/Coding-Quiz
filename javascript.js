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
    timerID = setInterval(countdown, 1000);
    timerEl.textContent = time;
    getQuestion() 
}

function countdown() {
    time--;
    timerEl.textContent = time;
    if (time <=0){
        endgame()
    }
}

function getQuestion(){
    var currentQuestion = questions[questionIndex];
    var titleEl = document.querySelector(".question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    for(var i=0; i < currentQuestion.choices.length; i++){
        var choice = currentQuestion.choices[i];
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice;
        choicesEl.appendChild(choiceBtn);
    }
}

function questionResponse(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches(".choice")){
        return;
    }
    if (buttonEl.value !== questions[questionIndex].answer) {
        time -= 10
        if(time < 0 ) {
            time = 0
        }
        timerEl.textContent = time
    } else {
        //make the choice green and add a sound that
        //create class for right and assign that class to buttonEl if correct
    }
    //move to the question by i ++
    //check if we ran out of question, call endgame, if not out of questions refire the get question function


}

//endgame()









startBtn.onclick = startGame;