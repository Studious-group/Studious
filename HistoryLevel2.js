const questions = [
    {
        question: "Who did the United States declare independence from?",
        choices: ["France", "Great Britain", "Spain", "Canada"],
        answer: "Great Britain"
    },
    {
        question: "Who did Mexico declare independence from?",
        choices: ["The United States of America", "France", "Spain", "Great Britain"],
        answer: "Spain"
    },
    {
        question: "How many continents are there?",
        choices: ["13", "10", "7", "3"],
        answer: "7"
    },
    {
        question: "How many countries are there in the world?",
        choices: ["100", "120", "155", "195"],
        answer: "195"
    },
    {
        question: "Which country is the biggest in the world?",
        choices: ["Russia", "Vatican City", "Canada", "New Zealand"],
        answer: "Russia"
    },
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