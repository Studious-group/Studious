const questions = [
    {
        question: "How many countries are there in the world?",
        choices: ["100", "120", "155", "195"],
        answer: "195"
    },
    {
        question: "Which continent has the most countries?",
        choices: ["Asia", "Africa", "North America", "South America"],
        answer: "Africa"
    },
    {
        question: "What did World War I start?",
        choices: ["1914", "1902", "1956", "1950"],
        answer: "1914"
    },
    {
        question: "When did World War II start?",
        choices: ["1939", "1930", "1945", "2004"],
        answer: "1939"
    },
    {
        question: "When was the declaration of independence signed?",
        choices: ["1776", "1789", "1812", "1865"],
        answer: "1776"
    },
    {
        question: "What was the 50th state to join the United States?",
        choices: ["Alaska", "Hawaii", "Washington", "Maine"],
        answer: "Hawaii"
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