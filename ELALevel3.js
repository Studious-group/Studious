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
    },
    {
        question: "Which word is an adjective?",
        choices: ["slowly", "bright", "climb", "school"],
        answer: "bright"
    },
    {
        question: "Which word is a verb?",
        choices: ["chair", "quick", "write", "yellow"],
        answer: "write"
    },
    {
        question: "Which word is a noun?",
        choices: ["quickly", "laugh", "teacher", "soft"],
        answer: "teacher"
    },
    {
        question: "Which word is an adverb?",
        choices: ["quietly", "desk", "happy", "jump"],
        answer: "quietly"
    },
    {
        question: "What prefix means 'not'?",
        choices: ["mis-", "pre-", "un-", "re-"],
        answer: "un-"
    },
    {
        question: "What suffix means 'full of'?",
        choices: ["ness", "ful", "ly", "less"],
        answer: "ful"
    },
    {
        question: "What is the root word in 'careless'?",
        choices: ["care", "less", "careless", "ess"],
        answer: "care"
    },
    {
        question: "Which word is spelled correctly?",
        choices: ["seperate", "separate", "seperete", "seperat"],
        answer: "separate"
    },
    {
        question: "What is the plural of 'goose'?",
        choices: ["gooses", "geese", "goose", "geeses"],
        answer: "geese"
    },
    {
        question: "What is the past tense of 'sing'?",
        choices: ["singed", "sung", "sang", "sing"],
        answer: "sang"
    },
    {
        question: "Which word rhymes with 'train'?",
        choices: ["brain", "chair", "book", "bird"],
        answer: "brain"
    },
    {
        question: "How many syllables are in the word 'family'?",
        choices: ["4", "2", "3", "1"],
        answer: "3"
    },
    {
        question: "How many vowels are in the word 'holiday'?",
        choices: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "How many consonants are in the word 'garden'?",
        choices: ["4", "2", "5", "3"],
        answer: "4"
    },
    {
        question: "Which punctuation mark ends an excited sentence?",
        choices: [".", "!", "?", ","],
        answer: "!"
    },
    {
        question: "Which sentence is written correctly?",
        choices: [
            "my dog is brown.",
            "My dog is brown.",
            "my Dog is brown.",
            "my dog Is brown."
        ],
        answer: "My dog is brown."
    },
    {
        question: "What does the word 'generous' mean?",
        choices: ["kind and willing to share", "very loud", "very fast", "very sleepy"],
        answer: "kind and willing to share"
    },
    {
        question: "What is an antonym for 'accept'?",
        choices: ["receive", "reject", "allow", "welcome"],
        answer: "reject"
    },
    {
        question: "Which word is a pronoun?",
        choices: ["they", "house", "green", "swim"],
        answer: "they"
    },
    {
        question: "Which word is an interjection?",
        choices: ["Wow!", "happy", "under", "climb"],
        answer: "Wow!"
    },
    {
        question: "Which word is a preposition?",
        choices: ["through", "dance", "bright", "slowly"],
        answer: "through"
    },
    {
        question: "Which word is a conjunction?",
        choices: ["because", "jump", "yellow", "quickly"],
        answer: "because"
    },
    {
        question: "What is a synonym for 'begin'?",
        choices: ["stop", "finish", "start", "rest"],
        answer: "start"
    },
    {
        question: "What is an antonym for 'victory'?",
        choices: ["win", "success", "loss", "prize"],
        answer: "loss"
    },
    {
        question: "What prefix means 'before'?",
        choices: ["sub-", "pre-", "mis-", "non-"],
        answer: "pre-"
    },
    {
        question: "What suffix turns a word into an adverb?",
        choices: ["ly", "ed", "ing", "er"],
        answer: "ly"
    },
    {
        question: "Which word has the same meaning as 'silent'?",
        choices: ["loud", "quiet", "angry", "busy"],
        answer: "quiet"
    },
    {
        question: "What does the word 'cautious' mean?",
        choices: ["careful", "careless", "cheerful", "sleepy"],
        answer: "careful"
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