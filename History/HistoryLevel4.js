const questions = [
    {
        question: "In which U.S. state did the Gold Rush of 1849 occur?",
        choices: ["California", "New York", "Texas", "Indiana"],
        answer: "California"
    },
    {
        question: "Which event marked the beginning of the Great Depression in the United States?",
        choices: ["The first moon landing", "The stock market crash of 1929", "The signing of the Treaty of Versailles", "The fall of the Berlin Wall"],
        answer: "The stock market crash of 1929"
    },
    {
        question: "Which empire was ruled by Julius Caesar?",
        choices: ["The Ottoman Empire", "The Roman Empire", "The Persian Empire", "The Byzantine Empire"],
        answer: "The Roman Empire"
    },
    {
        question: "What was the significance of the Magna Carta?",
        choices: ["It ended the Hundred Years' War", "It limited the power of the English king", "It founded the Roman Empire", "It created the United Nations"],
        answer: "It limited the power of the English king"
    },
    {
        question: "Who was the leader of the Soviet Union during most of the Cold War?",
        choices: ["Mikhail Gorbachev", "Joseph Stalin", "Nikita Khrushchev", "Vladimir Lenin"],
        answer: "Joseph Stalin"
    },
    {
        question: "Which river was important to the development of ancient Egypt?",
        choices: ["Nile", "Amazon", "Mississippi", "Danube"],
        answer: "Nile"
    },
    {
        question: "Which explorer completed the first voyage around the world?",
        choices: ["Ferdinand Magellan", "James Cook", "Christopher Columbus", "Marco Polo"],
        answer: "Ferdinand Magellan"
    },
    {
        question: "Which river forms much of the border between the United States and Mexico?",
        choices: ["Mississippi River", "Rio Grande", "Colorado River", "Missouri River"],
        answer: "Rio Grande"
    },
    {
        question: "Who was the leader of the civil rights movement who gave the 'I Have a Dream' speech?",
        choices: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Frederick Douglass"],
        answer: "Martin Luther King Jr."
    },
    {
        question: "Which country is both the largest in South America and the only one where Portuguese is the official language?",
        choices: ["Argentina", "Peru", "Brazil", "Chile"],
        answer: "Brazil"
    },
    {
        question: "Which mountain range separates Europe and Asia?",
        choices: ["Rocky Mountains", "Alps", "Ural Mountains", "Andes"],
        answer: "Ural Mountains"
    },
    {
        question: "Who purchased Alaska from Russia in 1867?",
        choices: ["Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Theodore Roosevelt"],
        answer: "Andrew Johnson"
    },
    {
        question: "Which country is home to Machu Picchu?",
        choices: ["Peru", "Chile", "Bolivia", "Ecuador"],
        answer: "Peru"
    },
    {
        question: "The ancient pyramids were built by which civilization?",
        choices: ["Romans", "Egyptians", "Greeks", "Mayans"],
        answer: "Egyptians"
    },
    {
        question: "Which sea separates Europe from Africa?",
        choices: ["Red Sea", "Mediterranean Sea", "Black Sea", "Caribbean Sea"],
        answer: "Mediterranean Sea"
    },
    {
        question: "Who was the first person to step on the Moon?",
        choices: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "Which U.S. document begins with the words 'We the People'?",
        choices: ["Declaration of Independence", "Constitution", "Bill of Rights", "Emancipation Proclamation"],
        answer: "Constitution"
    },
    {
        question: "Which country is famous for the ancient city of Petra?",
        choices: ["Jordan", "Israel", "Saudi Arabia", "Egypt"],
        answer: "Jordan"
    },
    {
        question: "Which is the world's largest island?",
        choices: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
        answer: "Greenland"
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        choices: ["Amelia Earhart", "Harriet Quimby", "Sally Ride", "Bessie Coleman"],
        answer: "Amelia Earhart"
    },
    {
        question: "Which country is home to the city of Venice?",
        choices: ["France", "Italy", "Spain", "Greece"],
        answer: "Italy"
    },
    {
        question: "Which U.S. president issued the Emancipation Proclamation?",
        choices: ["George Washington", "Abraham Lincoln", "Andrew Jackson", "Thomas Jefferson"],
        answer: "Abraham Lincoln"
    },
    {
        question: "Which canal connects the Atlantic Ocean to the Pacific Ocean?",
        choices: ["Suez Canal", "Erie Canal", "Panama Canal", "Kiel Canal"],
        answer: "Panama Canal"
    },
    {
        question: "Which ancient civilization built the city of Machu Picchu?",
        choices: ["Aztecs", "Incas", "Mayans", "Romans"],
        answer: "Incas"
    },
    {
        question: "Which continent has the most countries?",
        choices: ["Asia", "Europe", "Africa", "South America"],
        answer: "Africa"
    },
    {
        question: "Who was the British prime minister during most of World War II?",
        choices: ["Neville Chamberlain", "Winston Churchill", "Margaret Thatcher", "Tony Blair"],
        answer: "Winston Churchill"
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