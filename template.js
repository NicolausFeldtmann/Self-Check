function getQuestionTemplate(headline, question, answer1, anwser2, answer3) {

    return `
        
        <div class="questBox">
            <div class"headline">${headline}</div>
            <div class="contentBox">
                <div class="question">${question}</div>
                <div class="answers">
                    <div class="answer">${answer1}</div>
                    <div class="answer">${anwser2}</div>
                    <div class="answer">${answer3}</div>
                </div>
            </div>
        </div>
    `;
}