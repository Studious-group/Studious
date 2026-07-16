const questions = [
    {
        question: "Which blood cells help fight germs?",
        choices: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        answer: "White Blood Cells"
    },
    {
        question: "Which planet has the strongest winds in the solar system?",
        choices: ["Saturn", "Neptune", "Mars", "Earth"],
        answer: "Neptune"
    },
    {
        question: "What type of energy is stored in a stretched rubber band?",
        choices: ["Chemical Energy", "Thermal Energy", "Elastic Potential Energy", "Light Energy"],
        answer: "Elastic Potential Energy"
    },
    {
        question: "Which mineral is added to toothpaste to help protect teeth?",
        choices: ["Iron", "Fluoride", "Calcium", "Copper"],
        answer: "Fluoride"
    },
    {
        question: "Which layer of Earth's atmosphere contains the ozone layer?",
        choices: ["Troposphere", "Mesosphere", "Stratosphere", "Thermosphere"],
        answer: "Stratosphere"
    },
    {
        question: "What is the boiling point of water at sea level?",
        choices: ["100°C", "50°C", "0°C", "212°C"],
        answer: "100°C"
    },
    {
        question: "Which scientist developed the three laws of motion?",
        choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the smallest unit of matter?",
        choices: ["Cell", "Molecule", "Atom", "Electron"],
        answer: "Atom"
    },
    {
        question: "Which simple machine is found on the lid of a jar?",
        choices: ["Lever", "Screw", "Pulley", "Wheel and Axle"],
        answer: "Screw"
    },
    {
        question: "Which planet has the most moons currently known?",
        choices: ["Jupiter", "Mars", "Saturn", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "Which type of animal maintains a constant body temperature?",
        choices: ["Reptile", "Fish", "Bird", "Amphibian"],
        answer: "Bird"
    },
    {
        question: "What is the process by which plants release water vapor from their leaves?",
        choices: ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
        answer: "Transpiration"
    },
    {
        question: "Which instrument measures air pressure?",
        choices: ["Anemometer", "Thermometer", "Barometer", "Rain Gauge"],
        answer: "Barometer"
    },
    {
        question: "Which gas makes up most of Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Which part of a cell controls its activities?",
        choices: ["Cell Membrane", "Nucleus", "Cytoplasm", "Cell Wall"],
        answer: "Nucleus"
    },
    {
        question: "Which force slows an object sliding across the floor?",
        choices: ["Gravity", "Magnetism", "Friction", "Electricity"],
        answer: "Friction"
    },
    {
        question: "Which renewable energy source uses sunlight to make electricity?",
        choices: ["Wind Energy", "Hydroelectric Energy", "Solar Energy", "Geothermal Energy"],
        answer: "Solar Energy"
    },
    {
        question: "Which rock changes because of heat and pressure?",
        choices: ["Igneous", "Sedimentary", "Metamorphic", "Limestone"],
        answer: "Metamorphic"
    },
    {
        question: "Which organ removes waste from the blood to make urine?",
        choices: ["Liver", "Kidney", "Heart", "Pancreas"],
        answer: "Kidney"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Saturn", "Earth", "Jupiter", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "What is formed when magma cools beneath Earth's surface?",
        choices: ["Sedimentary Rock", "Extrusive Igneous Rock", "Intrusive Igneous Rock", "Metamorphic Rock"],
        answer: "Intrusive Igneous Rock"
    },
    {
        question: "Which body system carries oxygen and nutrients throughout the body?",
        choices: ["Digestive System", "Circulatory System", "Respiratory System", "Nervous System"],
        answer: "Circulatory System"
    },
    {
        question: "Which phase of the Moon occurs about one week after a new moon?",
        choices: ["Full Moon", "First Quarter", "Last Quarter", "Waning Crescent"],
        answer: "First Quarter"
    },
    {
        question: "Which type of cloud is thin and wispy and forms high in the sky?",
        choices: ["Nimbus", "Cirrus", "Cumulus", "Stratus"],
        answer: "Cirrus"
    },
    {
        question: "What is the main function of roots in a plant?",
        choices: ["Make Seeds", "Absorb Water and Nutrients", "Produce Flowers", "Catch Sunlight"],
        answer: "Absorb Water and Nutrients"
    },
    {
        question: "Which type of eclipse happens when Earth blocks sunlight from reaching the Moon?",
        choices: ["Solar Eclipse", "Lunar Eclipse", "Annular Eclipse", "Partial Solar Eclipse"],
        answer: "Lunar Eclipse"
    },
    {
        question: "Which property describes how much matter is in an object?",
        choices: ["Volume", "Mass", "Density", "Temperature"],
        answer: "Mass"
    },
    {
        question: "Which scientist is famous for studying electricity using a kite experiment?",
        choices: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Alexander Graham Bell"],
        answer: "Benjamin Franklin"
    },
    {
        question: "Which organ is responsible for exchanging oxygen and carbon dioxide?",
        choices: ["Heart", "Liver", "Lungs", "Kidneys"],
        answer: "Lungs"
    },
    {
        question: "Which type of energy is produced by vibrating objects?",
        choices: ["Sound Energy", "Electrical Energy", "Chemical Energy", "Mechanical Energy"],
        answer: "Sound Energy"
    },
    {
        question: "Which planet is tilted on its side as it orbits the Sun?",
        choices: ["Venus", "Uranus", "Mercury", "Mars"],
        answer: "Uranus"
    },
    {
        question: "Which part of the digestive system absorbs most nutrients from food?",
        choices: ["Stomach", "Large Intestine", "Small Intestine", "Esophagus"],
        answer: "Small Intestine"
    },
    {
        question: "Which type of weather front usually brings thunderstorms?",
        choices: ["Warm Front", "Cold Front", "Stationary Front", "Occluded Front"],
        answer: "Cold Front"
    },
    {
        question: "What causes ocean tides?",
        choices: ["Wind", "Earthquakes", "The Moon's Gravity", "Ocean Currents"],
        answer: "The Moon's Gravity"
    },
    {
        question: "Which gas is released during photosynthesis?",
        choices: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Helium"],
        answer: "Oxygen"
    },
    {
        question: "Which body system sends messages throughout the body?",
        choices: ["Muscular System", "Nervous System", "Digestive System", "Respiratory System"],
        answer: "Nervous System"
    },
    {
        question: "What type of star is our Sun?",
        choices: ["Red Giant", "White Dwarf", "Yellow Dwarf", "Blue Giant"],
        answer: "Yellow Dwarf"
    },
    {
        question: "Which process breaks large rocks into smaller pieces without changing what they are made of?",
        choices: ["Erosion", "Weathering", "Deposition", "Melting"],
        answer: "Weathering"
    },
    {
        question: "Which part of Earth is mostly made of liquid iron and nickel?",
        choices: ["Crust", "Mantle", "Outer Core", "Inner Core"],
        answer: "Outer Core"
    },
    {
        question: "Which scientist discovered penicillin?",
        choices: ["Louis Pasteur", "Alexander Fleming", "Gregor Mendel", "Charles Darwin"],
        answer: "Alexander Fleming"
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