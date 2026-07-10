const questions = [
    {
        question: "What is an antonym for the word 'irked'?",
        choices: ["annoyed", "pleased", "disappointed", "angry"],
        answer: "pleased"
    },
    {
        question: "Which word is an adjective?",
        choices: ["move", "jump", "big", "run"],
        answer: "big"
    },
    {
        question: "Which word is a verb?",
        choices: ["happy", "grab", "small", "up"],
        answer: "grab"
    },
    {
        question: "Which word is a noun?",
        choices: ["home", "amazing", "green", "hard"],
        answer: "home"
    },
    {
        question: "Which word is an adverb?",
        choices: ["small", "run", "blue", "high"],
        answer: "high"
    },
    {
        question: "What prefix means to do again?",
        choices: ["re-", "un-", "dis-", "over-"],
        answer: "re-"
    }
];
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion;

function loadRandomQuestion() {
    resultElement.textContent = "";
    answersElement.innerHTML = "";

    currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    questionElement.textContent = currentQuestion.question;

    // Shuffle answer choices
    const shuffledChoices = [...currentQuestion.choices].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;

        button.onclick = () => checkAnswer(button, choice);

        answersElement.appendChild(button);
    });
}

function checkAnswer(button, selectedAnswer) {
    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === currentQuestion.answer) {
        button.classList.add("correct");
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        button.classList.add("wrong");

        buttons.forEach(btn => {
            if (btn.textContent === currentQuestion.answer) {
                btn.classList.add("correct");
            }
        });

        resultElement.textContent = "Incorrect!";
        resultElement.style.color = "red";
    }
}

nextBtn.addEventListener("click", loadRandomQuestion);

loadRandomQuestion();