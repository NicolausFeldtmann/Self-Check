let currentQuestion = 0;
let score = [];

function init() {
    document.getElementById('questionTotal').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    //if (endTest()) {
    //    showEndScreen();
    //} else {
        renderQuestion();
        clacuclateProgress();
    //}
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

function renderQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1']; 
    document.getElementById('answer_2').innerHTML = question['answer2']; 
    document.getElementById('answer_3').innerHTML = question['answer3']; 
}

function  clacuclateProgress() {
    let percent = currentQuestion / questions.length * 100;
    percent = percent.toFixed(0);
    document.getElementById('progBar').innerHTML = percent + '%';
    document.getElementById('progBar').style = `width: ${percent}%`;
}

function answer() {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    if (selectedQuestionNumber == 'answer_1') {
        let point = 3;
        score.push(point);
        console.log(score);
    } else if (selectedQuestionNumber == 'answer_2') {
        let point = 2;
        score.push(point);
        console.log(score);
    } else if (selectedQuestionNumber == 'answer_3') {
        let point = 1;
        score.push(point);
    }
}