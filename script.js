let currentQuestion = 0;
let score = [];

function init() {
    document.getElementById('questionTotal').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (endTest()) {
        showEndScreen();
    } else {
        renderQuestions();
        clacuclateProgress();
    }
}

return currentQuestion.length >= questions.length;

function selectAnswer(selection) {
    let question = questions[currentQuestion];
    let selectQuestNumber = selection.slice(-1);
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetAnswers();

    document.getElementById('next').disabled = true;
}

function resetAnswers() {
    document.getElementById('answer_1').classList.remove('chosen');
    document.getElementById('answer_2').classList.remove('chosen');
    document.getElementById('answer_3').classList.remove('chosen');
}

function renderQuestions() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
}

function  clacuclateProgress() {
    let percent = currentQuestion / questions.length * 100;
    percent = percent.toFixed(0);
    document.getElementById('progBar').innerHTML = percent + '%';
    document.getElementById('progBar').style = `width: ${percent}%`;
}