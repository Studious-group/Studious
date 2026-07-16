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
    {
        question: "What event happened in 1969 that was a major achievement in space exploration?",
        choices: ["The first moon landing", "The Berlin Wall fell", "The first computer was invented", "The first airplane flew"],
        answer: "The first moon landing"
    },{
        question: "What is the capital city of France?",
        choices: ["Madrid", "Rome", "Paris", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which country is home to the Great Wall?",
        choices: ["Japan", "China", "India", "Mongolia"],
        answer: "China"
    },
    {
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        question: "Which continent is Brazil located in?",
        choices: ["Europe", "Africa", "South America", "Asia"],
        answer: "South America"
    },
    {
        question: "Who discovered the sea route to India by sailing around Africa?",
        choices: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Marco Polo"],
        answer: "Vasco da Gama"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["South Korea", "China", "Japan", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the longest river in South America?",
        choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Amazon River"
    },
    {
        question: "Who wrote the Declaration of Independence?",
        choices: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "James Madison"],
        answer: "Thomas Jefferson"
    },
    {
        question: "Which country gave the Statue of Liberty to the United States?",
        choices: ["England", "France", "Spain", "Italy"],
        answer: "France"
    },
    {
        question: "Which ocean lies between Africa and Australia?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Indian Ocean"
    },
    {
        question: "The ancient city of Rome is the capital of which country?",
        choices: ["Greece", "Italy", "Spain", "Portugal"],
        answer: "Italy"
    },
    {
        question: "Which desert is the largest hot desert in the world?",
        choices: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Mojave Desert"],
        answer: "Sahara Desert"
    },
    {
        question: "Who was known as the Maid of Orléans?",
        choices: ["Marie Antoinette", "Joan of Arc", "Queen Victoria", "Cleopatra"],
        answer: "Joan of Arc"
    },
    {
        question: "Which country is both in Europe and Asia?",
        choices: ["Turkey", "Germany", "Egypt", "India"],
        answer: "Turkey"
    },
    {
        question: "Where were the first modern Olympic Games held?",
        choices: ["Athens", "Paris", "London", "Rome"],
        answer: "Athens"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "Who was the first emperor of Rome?",
        choices: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
        answer: "Augustus"
    },
    {
        question: "Mount Everest lies on the border of Nepal and which country?",
        choices: ["China", "India", "Bhutan", "Pakistan"],
        answer: "China"
    },
    {
        question: "Which U.S. state was purchased from Russia in 1867?",
        choices: ["Hawaii", "California", "Alaska", "Oregon"],
        answer: "Alaska"
    },
    {
        question: "Which country has the largest population in the world?",
        choices: ["India", "China", "United States", "Indonesia"],
        answer: "India"
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