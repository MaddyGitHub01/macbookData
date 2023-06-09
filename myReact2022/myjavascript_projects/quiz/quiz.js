const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello1",
        b: "Hello2",
        c: "Hello3",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascaded Style Sheet",
        b: "Hello2",
        c: "Hello3",
        d: "Hello4",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of JS?",
        a: "Hello1",
        b: "Hello2",
        c: "Javascript",
        d: "Hello4",
        ans: "ans3"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answid;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answid = curAnsElem.id;
        }
    })
    return answid;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    })
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans){
        score ++;
    }
    questionCount++;
    deselectAll();
    if(questionCount <quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> Your score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `
    }
});