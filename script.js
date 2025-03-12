function init() {
    renderQuestions();
}

function renderQuestions() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let headline = data[i].headline;
        let question = data[i].question;
        let answer1 = data[i].answer1;
        let anwser2 = data[i].answer2;
        let answer3 = data[i].answer3;

        contentRef.innerHTML += getQuestionTemplate(headline, question, answer1, anwser2, answer3);
    }
}