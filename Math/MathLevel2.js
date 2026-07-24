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
    },
    
    {
        question: "What is 458 + 376?",
        choices: ["814", "833", "834", "844"],
        answer: "834"
    },
    {
        question: "What is 912 - 487?",
        choices: ["445", "425", "415", "426"],
        answer: "425"
    },
    {
        question: "What is 639 + 284?",
        choices: ["933", "921", "923", "913"],
        answer: "923"
    },
    {
        question: "What is 701 - 366?",
        choices: ["334", "355", "335", "325"],
        answer: "335"
    },
    {
        question: "What is 587 + 248?",
        choices: ["832", "845", "835", "825"],
        answer: "835"
    },
    {
        question: "What is 964 - 529?",
        choices: ["434", "445", "435", "425"],
        answer: "435"
    },
    {
        question: "What is 416 + 389?",
        choices: ["795", "806", "805", "815"],
        answer: "805"
    },
    {
        question: "What is 873 - 448?",
        choices: ["424", "415", "425", "435"],
        answer: "425"
    },
    {
        question: "What is 528 + 317?",
        choices: ["835", "844", "855", "845"],
        answer: "845"
    },
    {
        question: "What is 640 - 296?",
        choices: ["343", "354", "344", "334"],
        answer: "344"
    },
    {
        question: "What is 285 + 537?",
        choices: ["820", "832", "822", "812"],
        answer: "822"
    },
    {
        question: "What is 954 - 618?",
        choices: ["336", "335", "326", "346"],
        answer: "336"
    },
    {
        question: "What is 493 + 328?",
        choices: ["820", "831", "821", "811"],
        answer: "821"
    },
    {
        question: "What is 748 - 413?",
        choices: ["334", "325", "335", "345"],
        answer: "335"
    },
    {
        question: "What is 671 + 254?",
        choices: ["924", "935", "915", "925"],
        answer: "925"
    },
    {
        question: "What is 802 - 457?",
        choices: ["343", "345", "355", "335"],
        answer: "345"
    },
    {
        question: "What is 384 + 429?",
        choices: ["812", "823", "813", "803"],
        answer: "813"
    },
    {
        question: "What is 991 - 556?",
        choices: ["425", "434", "435", "445"],
        answer: "435"
    },
    {
        question: "What is 563 + 279?",
        choices: ["841", "832", "842", "852"],
        answer: "842"
    },
    {
        question: "What is 618 - 273?",
        choices: ["344", "355", "345", "335"],
        answer: "345"
    },
    {
        question: "What is 736 + 187?",
        choices: ["922", "933", "913", "923"],
        answer: "923"
    },
    {
        question: "What is 845 - 419?",
        choices: ["425", "436", "416", "426"],
        answer: "426"
    },
    {
        question: "What is 519 + 294?",
        choices: ["823", "812", "803", "813"],
        answer: "813"
    },
    {
        question: "What is 727 - 381?",
        choices: ["356", "345", "346", "336"],
        answer: "346"
    },
    {
        question: "What is 448 + 387?",
        choices: ["834", "845", "825", "835"],
        answer: "835"
    },
    {
        question: "What is 866 - 431?",
        choices: ["434", "425", "435", "445"],
        answer: "435"
    },
    {
        question: "What is 605 + 216?",
        choices: ["831", "821", "820", "811"],
        answer: "821"
    },
    {
        question: "What is 783 - 438?",
        choices: ["344", "335", "355", "345"],
        answer: "345"
    },
    {
        question: "What is 352 + 471?",
        choices: ["823", "813", "833", "822"],
        answer: "823"
    },
    {
        question: "What is 924 - 488?",
        choices: ["435", "446", "436", "426"],
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