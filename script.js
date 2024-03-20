const questions = [
    {
        question: "What is the administrative capital of Uttara Kannada district?",
        answers: [
            
            { text: "Ankola", correct: false},
            { text: "Karwar", correct: true},
            { text: "Sirsi", correct: false},
            { text: "kumta", correct: false},

        ]
    },
    {
        question: "Which famous beach in Uttara Kannada is known for its black sand?",
        answers: [
            
            { text: " Gokarna Beach", correct: false},
            { text: "Malpe Beach", correct: false},
            { text: " Karwar Beach", correct: true},
            { text: "Murudeshwar Beach", correct: false},

        ]  
    },
    {
        question: "Which historical fort is located near the Kali River in Uttara Kannada district?",
        answers: [
            
            { text: "Mirjan Fort", correct: true},
            { text: "Golconda Fort", correct: false},
            { text: "Bidar Fort", correct: false},
            { text: "Hampi Fort", correct: false},

        ]  
    },
    {
        question: "Which famous beach in Uttara Kannada is known for its black sand and is a popular tourist destination?",
        answers: [
            
            { text: "echo beach", correct: false},
            { text: "vanalli beach", correct: false},
            { text: "om beach", correct: true},
            { text: "murdeshwar beach", correct: false},

        ]  
    },
    {
        question: "Which waterfall in Uttara Kannada district is one of the highest waterfalls in India?",
        answers: [
            
            { text: "Apsarkonda falls", correct: false},
            { text: "vibhuti falls", correct: false},
            { text: "sathoddi falls", correct: false},
            { text: "jog falls", correct: true},

        ]  
    },
    {
        question: "What is the name of the famous hill station near Sirsi known for its lush greenery and scenic beauty?",
        answers: [
            
            { text: " Nandi Hills", correct: false},
            { text: "yana", correct: true},
            { text: "Jog Falls", correct: false},
            { text: "Coorg", correct: false},

        ]  
    },
    {
        question: "In which town is Mirjan Fort located, making it a notable historical site?",
        answers: [
            
            { text: "ankola", correct: false},
            { text: "karwar", correct: false},
            { text: "kumta", correct: true},
            { text: "sirsi", correct: false},

        ]  
    },
    {
        question: "Ankola is a coastal town in Karnataka. Which sea is located to the west of Ankola?",
        answers: [
            
            { text: "Bay of Bengal", correct: false},
            { text: " Laccadive Sea", correct: false},
            { text: "Arabian Sea", correct: true},
            { text: "none", correct: false},

        ]  
    },
    {
        question: "What is the traditional dance form associated with the cultural heritage of Uttara Kannada?",
        answers: [
            
            { text: "Yakshagana", correct: true},
            { text: "Bharatanatyam", correct: false},
            { text: "Kathak", correct: false},
            { text: "Kuchipudi", correct: false},

        ]  
    },
    {
        question: "which taluku is nearly the Goa",
        answers: [
            
            { text: "ankola", correct: false},
            { text: "sirsi", correct: false},
            { text: "karwar", correct: true},
            { text: "batkal", correct: false},

        ]  
    },
    {
        question: "In Which Place yana is located?",
        answers: [
            
            { text: "sirsi", correct: false},
            { text: "kumta", correct: true},
            { text: "honnavar", correct: false},
            { text: "none", correct: false},

        ]  
    },
    {
        question: "how many beaches in Goakarna",
        answers: [
            
            { text: "3", correct: false},
            { text: "11", correct: false},
            { text: "10", correct: true},
            { text: "5", correct: false},

        ]  
    },
    {
        question: "where was famous Marikamba temple is located?",
        answers: [
            
            { text: "none", correct: false},
            { text: "honnavar", correct: false},
            { text: "ankola", correct: false},
            { text: "sirsi", correct: true},

        ]  
    },
    {
        question: "In Which place The film Actor Ananth Nag was Born?",
        answers: [
            
            { text: "honnvar", correct: true},
            { text: "mundghod", correct: false},
            { text: "dandeli", correct: false},
            { text: "yellapur", correct: false},

        ]  
    },
    {
        question: "where is Goakarna Located?",
        answers: [
            
            { text: "mangalore", correct: false},
            { text: "belagavi", correct: false},
            { text: "uttar kannada", correct: true},
            { text: "banglore", correct: false},

        ]  
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
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
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});


startQuiz();