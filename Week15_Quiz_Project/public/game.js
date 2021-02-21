class Game {
    score = 0;
    currentQuestion;
    answers;

    getQuestion(){
        fetch(`http://localhost:3000/api/game`)
            .then((response) => response.json())
            .then((res) => {
                this.currentQuestion = res.question;
                this.answers = res.answers;
                this.showAnswers();
            })
    }

    showAnswers(){
        let buttonDiv = document.getElementById('answers');
        let question = document.getElementById('question');
            question.textContent = this.currentQuestion;
        for (let i = 0; i < this.answers.length; i++){
            let button = document.createElement('button');
            button.textContent = this.answers[i].answer;
            button.classList.add('button');
            buttonDiv.appendChild(button);
        };
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (event) => this.onClickAnswer(event));
        });
    }

    onClickAnswer (event){
        let clickedButton = event.target; 
        let correctAnswer = '';
        let correctAnswerButton;
        this.answers.forEach(element => {
            if(element.is_correct == true){
                correctAnswer = element
            }
        });

        let answerButtons = document.getElementsByTagName('button');

        for(let i = 0; i < answerButtons.length; i++){
            if(answerButtons[i].textContent == correctAnswer.answer){
                correctAnswerButton = answerButtons[i]
            } 
        };

        if(clickedButton  == correctAnswerButton){
            clickedButton.classList.add('correct-answer');
            this.increaseScore();
        }
        else {
            correctAnswerButton.classList.add('correct-answer');
            clickedButton.classList.add('wrong-answer');
        }
        
        setTimeout(() => {
            for(let i = 0; i < answerButtons.length; i++){
                answerButtons[i].classList.remove('correct-answer');
                answerButtons[i].classList.remove('wrong-answer');
            };
            for (let i = answerButtons.length - 1; i >= 0; i--){
                answerButtons[i].remove();
            };
        this.getQuestion();
        }, 2000);
        
    } 

    increaseScore(){
        this.score++;
        document.querySelector('#score-span').textContent = this.score;
    }
}

function newGame (){
    window.onload = () => {
        let game = new Game ();
        game.getQuestion();
    }
};
newGame();