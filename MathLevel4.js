const questions = [
    {
        question: "What is 4 x 8?",
        choices: ["40", "36", "32", "44"],
        answer: "32"
    },
    {
        question: "What is 45 / 5?",
        choices: ["8", "9", "10", "11"],
        answer: "9"
    },
    {
        question: "What is 14 x 4?",
        choices: ["56", "52", "60", "53"],
        answer: "56"
    },
    {
        question: "What is 28 / 4?",
        choices: ["10", "8", "7", "5"],
        answer: "7"
    },
    {
        question: "What is 24 x 2?",
        choices: ["46", "52", "50", "48"],
        answer: "48"
    },
    {
        question: "What is 10 x 6?",
        choices: ["50", "60", "64", "58"],
        answer: "60"
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