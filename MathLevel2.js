const questions = [
    {
        question: "What is 415 + 753?",
        choices: ["1168", "1268", "1368", "1468"],
        answer: "1168"
    },
    {
        question: "What is 927 - 418?",
        choices: ["509", "511", "409", "539"],
        answer: "509"
    },
    {
        question: "What is 619 + 97?",
        choices: ["716", "613", "714", "726"],
        answer: "716"
    },
    {
        question: "What is 114 - 98?",
        choices: ["25", "16", "15", "22"],
        answer: "16"
    },
    {
        question: "What is 745 + 356?",
        choices: ["1104", "1102", "1101", "1201"],
        answer: "1101"
    },
    {
        question: "What is 845 - 598?",
        choices: ["249", "251", "242", "247"],
        answer: "247"
    },
    {
        question: "What is 522 + 809?",
        choices: ["1232", "1331", "1351", "1111"],
        answer: "1331"
    },
    {
        question: "What is 998 - 749?",
        choices: ["249", "302", "252", "257"],
        answer: "249"
    },
    {
        question: "What is 463 + 328?",
        choices: ["801", "781", "791", "761"],
        answer: "791"
    },
    {
        question: "What is 1023 - 587?",
        choices: ["416", "426", "446", "436"],
        answer: "436"
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