const questions = [
    {
        question: "What is 48 × 27?",
        choices: ["1296", "1248", "1316", "1269"],
        answer: "1296"
    },
    {
        question: "What is 864 ÷ 24?",
        choices: ["34", "36", "38", "32"],
        answer: "36"
    },
    {
        question: "What is 75 × 16?",
        choices: ["1200", "1150", "1250", "1180"],
        answer: "1200"
    },
    {
        question: "What is 945 ÷ 27?",
        choices: ["35", "34", "36", "33"],
        answer: "35"
    },
    {
        question: "What is 63 × 19?",
        choices: ["1197", "1179", "1217", "1187"],
        answer: "1197"
    },
    {
        question: "What is 1176 ÷ 28?",
        choices: ["40", "42", "44", "46"],
        answer: "42"
    },
    {
        question: "What is 84 × 15?",
        choices: ["1240", "1260", "1280", "1220"],
        answer: "1260"
    },
    {
        question: "What is 936 ÷ 18?",
        choices: ["50", "54", "52", "56"],
        answer: "52"
    },
    {
        question: "What is 39 × 32?",
        choices: ["1248", "1228", "1268", "1218"],
        answer: "1248"
    },
    {
        question: "What is 1530 ÷ 45?",
        choices: ["32", "34", "36", "38"],
        answer: "34"
    },
    {
        question: "What is 96 × 14?",
        choices: ["1324", "1344", "1364", "1384"],
        answer: "1344"
    },
    {
        question: "What is 2025 ÷ 45?",
        choices: ["40", "45", "50", "55"],
        answer: "45"
    },
    {
    question: "What is 56 × 18?",
    choices: ["1008", "1018", "998", "1028"],
    answer: "1008"
    },
    {
        question: "What is 1440 ÷ 32?",
        choices: ["44", "45", "46", "48"],
        answer: "45"
    },
    {
        question: "What is 87 × 13?",
        choices: ["1131", "1121", "1141", "1111"],
        answer: "1131"
    },
    {
        question: "What is 1680 ÷ 35?",
        choices: ["46", "48", "50", "52"],
        answer: "48"
    },
    {
        question: "What is 92 × 17?",
        choices: ["1564", "1544", "1584", "1524"],
        answer: "1564"
    },
    {
        question: "What is 1248 ÷ 24?",
        choices: ["50", "52", "54", "56"],
        answer: "52"
    },
    {
        question: "What is 78 × 21?",
        choices: ["1638", "1618", "1658", "1678"],
        answer: "1638"
    },
    {
        question: "What is 1800 ÷ 36?",
        choices: ["48", "49", "50", "51"],
        answer: "50"
    },
    {
        question: "What is 64 × 23?",
        choices: ["1472", "1452", "1492", "1432"],
        answer: "1472"
    },
    {
        question: "What is 1512 ÷ 27?",
        choices: ["54", "56", "58", "60"],
        answer: "56"
    },
    {
        question: "What is 88 × 19?",
        choices: ["1672", "1652", "1692", "1712"],
        answer: "1672"
    },
    {
        question: "What is 2100 ÷ 42?",
        choices: ["48", "49", "50", "52"],
        answer: "50"
    },
    {
        question: "What is 57 × 24?",
        choices: ["1368", "1348", "1388", "1328"],
        answer: "1368"
    },
    {
        question: "What is 1296 ÷ 18?",
        choices: ["70", "72", "74", "76"],
        answer: "72"
    },
    {
        question: "What is 83 × 16?",
        choices: ["1328", "1308", "1348", "1368"],
        answer: "1328"
    },
    {
        question: "What is 2250 ÷ 45?",
        choices: ["48", "49", "50", "52"],
        answer: "50"
    },
    {
        question: "What is 95 × 22?",
        choices: ["2090", "2080", "2100", "2110"],
        answer: "2090"
    },
    {
        question: "What is 1728 ÷ 36?",
        choices: ["46", "48", "50", "52"],
        answer: "48"
    },
    {
        question: "What is 71 × 29?",
        choices: ["2059", "2049", "2069", "2079"],
        answer: "2059"
    },
    {
        question: "What is 2400 ÷ 48?",
        choices: ["48", "49", "50", "52"],
        answer: "50"
    },
    {
        question: "What is 68 × 27?",
        choices: ["1836", "1816", "1856", "1876"],
        answer: "1836"
    },
    {
        question: "What is 1458 ÷ 27?",
        choices: ["52", "54", "56", "58"],
        answer: "54"
    },
    {
        question: "What is 74 × 25?",
        choices: ["1850", "1825", "1875", "1800"],
        answer: "1850"
    },
    {
        question: "What is 2016 ÷ 32?",
        choices: ["61", "62", "63", "64"],
        answer: "63"
    },
    {
        question: "What is 86 × 26?",
        choices: ["2236", "2216", "2256", "2276"],
        answer: "2236"
    },
    {
        question: "What is 2700 ÷ 54?",
        choices: ["48", "49", "50", "52"],
        answer: "50"
    },
    {
        question: "What is 99 × 18?",
        choices: ["1782", "1762", "1802", "1822"],
        answer: "1782"
    },
    {
        question: "What is 3136 ÷ 56?",
        choices: ["54", "56", "58", "60"],
        answer: "56"
    },
    {
        question: "What is 72 × 34?",
        choices: ["2448", "2428", "2468", "2488"],
        answer: "2448"
    },
    {
        question: "What is 3072 ÷ 48?",
        choices: ["62", "64", "66", "68"],
        answer: "64"
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