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
        question: "Which country is the biggest in the world?",
        choices: ["Russia", "Vatican City", "Canada", "New Zealand"],
        answer: "Russia"
    },
    {
        question: "Who was the first person to sail to America?",
        choices: ["Abraham Lincoln", "George Washington", "Christopher Columbus", "Michael Jackson"],
        answer: "Christopher Columbus"
    },  
       {
        question: "What is the capital of the United States?",
        choices: ["New York City", "Washington, D.C.", "Los Angeles", "Chicago"],
        answer: "Washington, D.C."
    },
    {
        question: "How many states are in the United States?",
        choices: ["48", "50", "52", "49"],
        answer: "50"
    },
    {
        question: "Which country is directly north of the United States?",
        choices: ["Mexico", "Canada", "Russia", "Brazil"],
        answer: "Canada"
    },
    {
        question: "What is the capital of Mexico?",
        choices: ["Madrid", "Mexico City", "Monterrey", "Cancún"],
        answer: "Mexico City"
    },
    {
        question: "Which ocean is on the east coast of the United States?",
        choices: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        answer: "Atlantic Ocean"
    },
    {
        question: "Who was the first President of the United States?",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Which country is famous for the pyramids?",
        choices: ["Greece", "Egypt", "Italy", "China"],
        answer: "Egypt"
    },
    {
        question: "What is the capital of France?",
        choices: ["London", "Rome", "Paris", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is the largest continent?",
        choices: ["Africa", "Europe", "North America", "Asia"],
        answer: "Asia"
    },
    {
        question: "Which country has the Great Wall?",
        choices: ["Japan", "India", "China", "South Korea"],
        answer: "China"
    },
    {
        question: "Who helped write the Declaration of Independence?",
        choices: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "Paul Revere"],
        answer: "Thomas Jefferson"
    },
    {
        question: "Which state was the first to join the United States?",
        choices: ["Virginia", "Pennsylvania", "Delaware", "New York"],
        answer: "Delaware"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Seoul", "Tokyo", "Beijing", "Osaka"],
        answer: "Tokyo"
    },
    {
        question: "Which continent is Australia in?",
        choices: ["Europe", "Asia", "Australia", "Africa"],
        answer: "Australia"
    },
    {
        question: "Who was the 16th President of the United States?",
        choices: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "John F. Kennedy"],
        answer: "Abraham Lincoln"
    },
    {
        question: "Which country is south of the United States?",
        choices: ["Canada", "Mexico", "Cuba", "Brazil"],
        answer: "Mexico"
    },
    {
        question: "What is the capital of England?",
        choices: ["Dublin", "Edinburgh", "London", "Cardiff"],
        answer: "London"
    },
    {
        question: "Which continent is the Sahara Desert in?",
        choices: ["Asia", "Australia", "Africa", "South America"],
        answer: "Africa"
    },
    {
        question: "What holiday celebrates the independence of the United States?",
        choices: ["Memorial Day", "Labor Day", "Independence Day", "Veterans Day"],
        answer: "Independence Day"
    },
    {
        question: "Which country is shaped like a boot?",
        choices: ["Spain", "Italy", "France", "Portugal"],
        answer: "Italy"
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