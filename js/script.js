const questions = [
    {
        question: "Which Is The Largest Animal In The World?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which Is The Capital Of Italy?",
        answers: [
            {text: "Venice", correct: false},
            {text: "Florence", correct: false},
            {text: "Rome", correct: true},
            {text: "Naples", correct: false}
        ]
    },
    {
        question: "Which Is The Largest Desert In The World?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Anatarctica", correct: true}
        ]
    },
    {
        question: "Which Is The Smallest Continent In The World?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
    {
        question: "Which River Flows Through London?",
        answers: [
            {text: "River Severn", correct: false},
            {text: "River Trent", correct: false},
            {text: "River Thames", correct: true},
            {text: "River Great Ouse", correct: false}
        ]
    },
    {
        question: "On Which Continent is The Sahara Desert Located?",
        answers: [
            {text: "Asia", correct: false},
            {text: "South America", correct: false},
            {text: "Europe", correct: false},
            {text: "Africa", correct: true}
        ]
    },
    {
        question: "How Tall Is Mount Everest?",
        answers: [
            {text: "6,849 m", correct: false},
            {text: "8,849 m", correct: true},
            {text: "7,849 m", correct: false},
            {text: "9,849 m", correct: false}
        ]
    },
    {
        question: "In Which US State Can You Find The City Of Chicago?",
        answers: [
            {text: "Mississippi", correct: false},
            {text: "Missouri", correct: false},
            {text: "Illinois", correct: true},
            {text: "Arizona", correct: false}
        ]
    },
    {
        question: "What Is The Capital Of ​​The United Arab Emirates?",
        answers: [
            {text: "Dubai", correct: false},
            {text: "Abu Dhabi", correct: true},
            {text: "Sharjah", correct: false},
            {text: "Ajman", correct: false}
        ]
    },
    {
        question: "What Is The Southernmost Capital City In The World?",
        answers: [
            {text: "Canberra", correct: false},
            {text: "Buenos Aires", correct: false},
            {text: "Jakarta", correct: false},
            {text: "Wellington", correct: true}
        ]
    },
    {
        question: "What Is The Smallest Country In The World?",
        answers: [
            {text: "Andorra", correct: false},
            {text: "Luxembourg", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Belgium", correct: false}
        ]
    },
    {
        question: "In Which Country Is Located The Volcano Eyjafjallajökull Which Stopped Air Traffic For Days In 2010?",
        answers: [
            {text: "Greenland", correct: false},
            {text: "Italy", correct: false},
            {text: "Indonesia", correct: false},
            {text: "Iceland", correct: true}
        ]
    },
    {
        question: "What is the highest mountain in Scotland?",
        answers: [
            {text: "Ben Macdui", correct: false},
            {text: "Braeriach", correct: false},
            {text: "Ben Nevis", correct: true},
            {text: "Cairn Toul", correct: false}
        ]
    },
    {
        question: "What is the largest canyon in the world?",
        answers: [
            {text: "Verdon Groge", correct: false},
            {text: "Fish River Canyon", correct: false},
            {text: "Colca Canyon", correct: false},
            {text: "Grand Canyon", correct: true}
        ]
    },
    {
        question: "How many countries are there in the world?",
        answers: [
            {text: "105", correct: false},
            {text: "145", correct: false},
            {text: "195", correct: true},
            {text: "245", correct: false}
        ]
    },
    {
        question: "In which Mountain range can you find the Mont Blanc?",
        answers: [
            {text: "The Pyrenees", correct: false},
            {text: "Carpathian Mountains", correct: false},
            {text: "Caucasus Mountains", correct: false},
            {text: "The Alps", correct: true}
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            {text: "Amazon River", correct: false},
            {text: "Yangtze River", correct: false},
            {text: "The Nile", correct: true},
            {text: "Yellow River", correct: false}
        ]
    },
    {
        question: "Which country is not located on the Golden Triangle?",
        answers: [
            {text: "Thailand", correct: false},
            {text: "Laos", correct: false},
            {text: "Myanmar", correct: true},
            {text: "China", correct: false}
        ]
    },
    {
        question: "What is the highest mountain in Japan?",
        answers: [
            {text: "Mount Kita", correct: false},
            {text: "Mount Fuji", correct: true},
            {text: "Mount Okuhotaka", correct: false},
            {text: "Mount Aino", correct: false}
        ]
    },
    {
        question: "In which country is Mount Kilimanjaro?",
        answers: [
            {text: "Kenya", correct: false},
            {text: "Congo", correct: false},
            {text: "Nigeria", correct: false},
            {text: "Tanzania", correct: true}
        ]
    },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = `Next`;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = `none`; 
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); 
    }
}

function selectAnswer(e){
	const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.classList.toggle("shake");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = `block`;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length} .`;
    nextButton.innerHTML = `Play Again`;
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();

