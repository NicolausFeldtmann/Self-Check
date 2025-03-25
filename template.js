function getQuestionTemplate(headline, question, answer_1, anwser_2, answer_3) {

    return `
        
        <div class="questBox">
            <div class"headline">${headline}</div>
            <div class="contentBox">
                <div class="question">${question}</div>
                <div class="answers">
                    <div class="answer">${answer_1}</div>
                    <div class="answer">${anwser_2}</div>
                    <div class="answer">${answer_3}</div>
                </div>
            </div>
        </div>
    `;
}