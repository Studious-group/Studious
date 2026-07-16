const questions = [
    {
        question: "Which sentence uses the word 'their' correctly?",
        choices: [
            "Their going to the park.",
            "The students forgot their backpacks.",
            "There dog is barking.",
            "They're house is blue."
        ],
        answer: "The students forgot their backpacks."
    },
    {
        question: "Which word is a synonym for 'reluctant'?",
        choices: ["Eager", "Unwilling", "Excited", "Cheerful"],
        answer: "Unwilling"
    },
    {
        question: "What does the prefix 'inter-' mean?",
        choices: ["Before", "Between", "Against", "Under"],
        answer: "Between"
    },
    {
        question: "Which sentence contains a prepositional phrase?",
        choices: [
            "The dog barked loudly.",
            "The children played in the park.",
            "She laughed happily.",
            "Birds fly."
        ],
        answer: "The children played in the park."
    },
    {
        question: "Which word is the best antonym for 'scarce'?",
        choices: ["Rare", "Plentiful", "Small", "Empty"],
        answer: "Plentiful"
    },
    {
        question: "What is the theme of a story?",
        choices: [
            "The lesson or message",
            "The setting",
            "The title",
            "The main character"
        ],
        answer: "The lesson or message"
    },
    {
        question: "Which sentence is written in passive voice?",
        choices: [
            "Maria baked the cake.",
            "The cake was baked by Maria.",
            "Maria is baking a cake.",
            "Maria bakes cakes every Saturday."
        ],
        answer: "The cake was baked by Maria."
    },
    {
        question: "Which word contains the suffix '-less'?",
        choices: ["Careless", "Careful", "Caregiver", "Caring"],
        answer: "Careless"
    },
    {
        question: "Which dictionary guide words would help you find the word 'monkey'?",
        choices: [
            "moon - mop",
            "milk - mind",
            "monarch - month",
            "music - mystery"
        ],
        answer: "monarch - month"
    },
    {
        question: "What is the meaning of the idiom 'hit the books'?",
        choices: [
            "Throw books",
            "Read and study",
            "Buy new books",
            "Write a story"
        ],
        answer: "Read and study"
    },
    {
        question: "Which sentence contains a coordinating conjunction?",
        choices: [
            "The bird flew because it was scared.",
            "I wanted pizza, but we had tacos.",
            "Although it rained, we played.",
            "When the bell rang, class ended."
        ],
        answer: "I wanted pizza, but we had tacos."
    },
    {
        question: "Which word is an abstract noun?",
        choices: ["Desk", "Freedom", "Pencil", "River"],
        answer: "Freedom"
    },
    {
        question: "What is the purpose of a conclusion paragraph?",
        choices: [
            "To introduce the topic",
            "To summarize the main ideas",
            "To list sources",
            "To add new information"
        ],
        answer: "To summarize the main ideas"
    },
    {
        question: "Which sentence contains an interjection?",
        choices: [
            "Wow! That was amazing!",
            "The dog barked loudly.",
            "She opened the door.",
            "The flowers grew."
        ],
        answer: "Wow! That was amazing!"
    },
    {
        question: "Which word is an example of alliteration?",
        choices: [
            "Busy bees buzzed.",
            "The stars twinkled.",
            "The cat slept.",
            "The boy ran."
        ],
        answer: "Busy bees buzzed."
    },
    {
        question: "Which sentence uses commas correctly?",
        choices: [
            "My favorite colors are blue green, and red.",
            "My favorite colors are blue, green, and red.",
            "My favorite colors, are blue green and red.",
            "My favorite colors are, blue, green and red."
        ],
        answer: "My favorite colors are blue, green, and red."
    },
    {
        question: "Which word has the Latin root 'aud' meaning 'hear'?",
        choices: ["Audience", "Visible", "Portable", "Inspect"],
        answer: "Audience"
    },
    {
        question: "What is the conflict in a story?",
        choices: [
            "The lesson",
            "The problem the characters face",
            "The ending",
            "The setting"
        ],
        answer: "The problem the characters face"
    },
    {
        question: "Which sentence uses capitalization correctly?",
        choices: [
            "My birthday is in july.",
            "My birthday is in July.",
            "my birthday is in July.",
            "My Birthday is in july."
        ],
        answer: "My birthday is in July."
    },
    {
        question: "Which type of text tells a made-up story?",
        choices: [
            "Biography",
            "Encyclopedia",
            "Fiction",
            "Newspaper"
        ],
        answer: "Fiction"
    },
    {
        question: "Which word is a multiple-meaning word?",
        choices: ["Bat", "Table", "Happy", "Jump"],
        answer: "Bat"
    },
    {
        question: "What does the suffix '-able' mean?",
        choices: [
            "Without",
            "Able to be",
            "Again",
            "Before"
        ],
        answer: "Able to be"
    },
    {
        question: "Which sentence contains a possessive noun?",
        choices: [
            "The dog's collar is blue.",
            "The dog barked loudly.",
            "Dogs like bones.",
            "The dogs bark."
        ],
        answer: "The dog's collar is blue."
    },
    {
        question: "Which reference source is best for finding synonyms?",
        choices: [
            "Atlas",
            "Dictionary",
            "Thesaurus",
            "Glossary"
        ],
        answer: "Thesaurus"
    },
    {
        question: "What is the narrator's point of view if the story uses 'he' and 'she'?",
        choices: [
            "First person",
            "Second person",
            "Third person",
            "None"
        ],
        answer: "Third person"
    },
    {
        question: "Which sentence contains a linking verb?",
        choices: [
            "She is happy.",
            "She ran home.",
            "She laughed loudly.",
            "She painted a picture."
        ],
        answer: "She is happy."
    },
    {
        question: "What is the purpose of dialogue in a story?",
        choices: [
            "To explain directions",
            "To show characters speaking",
            "To summarize the ending",
            "To introduce the title"
        ],
        answer: "To show characters speaking"
    },
    {
        question: "Which word is an example of a homograph?",
        choices: [
            "Lead",
            "Cat",
            "Happy",
            "Blue"
        ],
        answer: "Lead"
    },
    {
        question: "Which sentence contains a metaphor?",
        choices: [
            "The clouds are cotton.",
            "The clouds are like cotton.",
            "The clouds floated away.",
            "The clouds looked white."
        ],
        answer: "The clouds are cotton."
    },
    {
        question: "Which sentence has the correct subject-verb agreement?",
        choices: [
            "The dogs runs fast.",
            "The dog run fast.",
            "The dogs run fast.",
            "The dog running fast."
        ],
        answer: "The dogs run fast."
    },
    {
        question: "What is the author's purpose if they want to convince readers?",
        choices: [
            "To entertain",
            "To inform",
            "To persuade",
            "To describe"
        ],
        answer: "To persuade"
    },
    {
        question: "Which word contains a silent letter?",
        choices: ["Knife", "Apple", "Window", "Garden"],
        answer: "Knife"
    },
    {
        question: "Which sentence contains a compound predicate?",
        choices: [
            "The cat slept.",
            "The cat purred and stretched.",
            "The happy cat slept.",
            "The cat on the couch slept."
        ],
        answer: "The cat purred and stretched."
    },
    {
        question: "What does the root word 'spect' mean?",
        choices: [
            "To hear",
            "To write",
            "To look",
            "To carry"
        ],
        answer: "To look"
    },
    {
        question: "Which sentence correctly uses a semicolon?",
        choices: [
            "I like soccer; my brother likes basketball.",
            "I like; soccer because it is fun.",
            "I; like soccer.",
            "I like soccer; because it is fun."
        ],
        answer: "I like soccer; my brother likes basketball."
    },
    {
        question: "Which type of figurative language gives human qualities to nonliving things?",
        choices: [
            "Simile",
            "Metaphor",
            "Personification",
            "Hyperbole"
        ],
        answer: "Personification"
    },
    {
        question: "Which sentence uses an apostrophe correctly?",
        choices: [
            "The girls backpack is new.",
            "The girl's backpack is new.",
            "The girls' backpack are new.",
            "The girls backpack's new."
        ],
        answer: "The girl's backpack is new."
    },
    {
        question: "What does it mean to infer while reading?",
        choices: [
            "To copy the text",
            "To make a smart guess using clues",
            "To memorize every word",
            "To skip difficult parts"
        ],
        answer: "To make a smart guess using clues"
    },
    {
        question: "Which sentence contains an oxymoron?",
        choices: [
            "The jumbo shrimp was delicious.",
            "The wind whispered.",
            "She was as fast as lightning.",
            "Time flew by."
        ],
        answer: "The jumbo shrimp was delicious."
    },
    {
        question: "Which word best describes the mood of a scary story?",
        choices: [
            "Suspenseful",
            "Cheerful",
            "Peaceful",
            "Humorous"
        ],
        answer: "Suspenseful"
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