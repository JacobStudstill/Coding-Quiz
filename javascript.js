var timerID;
var questionIndex = 0;
var time = 60;
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var questionTitle = document.querySelector(".question-title")
var feedback = document.querySelector("#feedback")




//Start of the game. Set interval to count down every second
function startGame() {
    var startScreenEl = document.querySelector(".welcome");
    startScreenEl.setAttribute("class","hide");
    questionsEl.removeAttribute("class");
    questionTitle.setAttribute("style", "background-color:black; color:white; display: flex; justify-content:center;")
    // choicesEl.setAttribute("style", "background-color:black; color:white; display: flex; flex-direction: column; justify-content:center;")
    timerID = setInterval(countdown, 1000);
    timerEl.textContent = time;
    getQuestion() 
}

//Function to count down time 
function countdown() {
    time--;
    timerEl.textContent = time;
    if (time <=0){
        endgame()
    }
}

//Gets question from the question js page, loops through questions and assigns choices to a button
function getQuestion(){
    var currentQuestion = questions[questionIndex];
    var titleEl = document.querySelector(".question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    for(var i=0; i < currentQuestion.choices.length; i++){
        var choice = currentQuestion.choices[i];
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice col")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice;
        choicesEl.appendChild(choiceBtn);
    }
}

//Get the the question, if answer is not correct, subtract time
function questionResponse(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches(".choice")){
        return;
    }
    if (buttonEl.value !== questions[questionIndex].answer) {
        time -= 10
        feedback.textContent = "That is incorrect"
        if(time < 0 ) {
            time = 0
        }
        timerEl.textContent = time
    }
    // else {

    //     feedback.textContent = questions[questionNumber].answer + " is correct!"
    // }

    // Adds one to the question index
    questionIndex++

    //check if we ran out of question, call endgame, if not out of questions refire the get question function


    if (time <= 0 || questionIndex === questions.length){
        endgame()
    }
    else{
        getQuestion()
    }
    //check if we ran out of question, call endgame, if not out of questions refire the get question function


}

//Function for when time is up or questions are answered
function endgame(){
    //Clear time
    clearInterval(timerID)
    //Hide questions
    questionsEl.setAttribute("class", "hide")

    var endScreenEl = document.querySelector("#endscreen");
    //Remove hide property from section with endsreen id
    endScreenEl.removeAttribute("class","hide");

    var finalScore = document.querySelector("#final-score")
    finalScore.textContent = time

}

//Get initials and add to local storage if string isnt empty
function saveHighscore(){
    var initials = initialsEl.value.trim()
    if (initials !== ""){
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [] 

        //Creates object for time and initials
        var newScore = {
            score: time,
            initials: initials,
        }
        highscores.push(newScore)
        window.localStorage.setItem("highscores", JSON.stringify(highscores))
        window.location.href = "highscores.html"
    }
}




startBtn.addEventListener("click",startGame);
choicesEl.addEventListener("click", questionResponse);
submitBtn.addEventListener("click", saveHighscore);