/*
===========================================================
AVIATOR ACADEMY APPLICATION
===========================================================
*/


/* ========================================================
SUBJECTS
======================================================== */

const SUBJECTS = [

    {
        id: "airlaw",
        name: "Air Law",
        icon: "📜",
        description:
            "Rules, regulations, airspace, licensing and operational requirements."
    },

    {
        id: "meteorology",
        name: "Meteorology",
        icon: "🌦️",
        description:
            "Weather, pressure, wind, clouds, visibility, fronts and aviation forecasts."
    },

    {
        id: "navigation",
        name: "Navigation",
        icon: "🧭",
        description:
            "Charts, headings, tracks, bearings, position, time and navigation systems."
    },

    {
        id: "principles",
        name: "Principles of Flight",
        icon: "✈️",
        description:
            "Aerodynamics, lift, drag, thrust, stability, stalls and aircraft control."
    },

    {
        id: "aircraft",
        name: "Aircraft General Knowledge",
        icon: "⚙️",
        description:
            "Aircraft systems, engines, instruments, fuel and electrical systems."
    },

    {
        id: "performance",
        name: "Flight Performance",
        icon: "📈",
        description:
            "Aircraft performance, limitations, take-off, landing and planning."
    },

    {
        id: "massbalance",
        name: "Mass & Balance",
        icon: "⚖️",
        description:
            "Mass, centre of gravity, arms, moments and loading calculations."
    },

    {
        id: "radio",
        name: "Radio Telephony",
        icon: "📻",
        description:
            "Radio communication, phraseology, readbacks and aviation terminology."
    },

    {
        id: "human",
        name: "Human Performance",
        icon: "🧠",
        description:
            "Fatigue, hypoxia, stress, spatial disorientation and human factors."
    },

    {
        id: "emergency",
        name: "Emergency Procedures",
        icon: "🚨",
        description:
            "Emergency situations, priorities, communication and abnormal operations."
    },

    {
        id: "instruments",
        name: "Flight Instruments",
        icon: "🎛️",
        description:
            "Aircraft instruments, indications and basic instrument principles."
    },

    {
        id: "flightplanning",
        name: "Flight Planning",
        icon: "🗺️",
        description:
            "Routes, fuel, weather, NOTAMs, alternates and operational planning."
    }

];


/* ========================================================
PHONETIC ALPHABET
======================================================== */

const PHONETIC = [

    ["A","Alfa"],
    ["B","Bravo"],
    ["C","Charlie"],
    ["D","Delta"],
    ["E","Echo"],
    ["F","Foxtrot"],
    ["G","Golf"],
    ["H","Hotel"],
    ["I","India"],
    ["J","Juliett"],
    ["K","Kilo"],
    ["L","Lima"],
    ["M","Mike"],
    ["N","November"],
    ["O","Oscar"],
    ["P","Papa"],
    ["Q","Quebec"],
    ["R","Romeo"],
    ["S","Sierra"],
    ["T","Tango"],
    ["U","Uniform"],
    ["V","Victor"],
    ["W","Whiskey"],
    ["X","X-ray"],
    ["Y","Yankee"],
    ["Z","Zulu"]

];


/* ========================================================
ABBREVIATIONS
======================================================== */

const ABBREVIATIONS = [

    ["ATC","Air Traffic Control","Communication"],
    ["ATIS","Automatic Terminal Information Service","Communication"],
    ["AGL","Above Ground Level","Altitude"],
    ["AMSL","Above Mean Sea Level","Altitude"],
    ["QNH","Altimeter pressure setting referenced to mean sea level","Altimetry"],
    ["QFE","Pressure setting associated with aerodrome elevation","Altimetry"],
    ["VFR","Visual Flight Rules","Operations"],
    ["IFR","Instrument Flight Rules","Operations"],
    ["VMC","Visual Meteorological Conditions","Weather"],
    ["IMC","Instrument Meteorological Conditions","Weather"],
    ["METAR","Aerodrome routine weather report","Meteorology"],
    ["TAF","Aerodrome forecast","Meteorology"],
    ["NOTAM","Notice containing aeronautical information","Operations"],
    ["TMA","Terminal Control Area","Airspace"],
    ["CTR","Control Zone","Airspace"],
    ["FIR","Flight Information Region","Airspace"],
    ["ETA","Estimated Time of Arrival","Navigation"],
    ["ETD","Estimated Time of Departure","Navigation"],
    ["ETE","Estimated Time Enroute","Navigation"],
    ["IAS","Indicated Airspeed","Performance"],
    ["TAS","True Airspeed","Performance"],
    ["GS","Ground Speed","Navigation"],
    ["RPM","Revolutions Per Minute","Engine"],
    ["PIC","Pilot in Command","Operations"],
    ["SIC","Second in Command","Operations"],
    ["PPL","Private Pilot Licence","Licensing"],
    ["CPL","Commercial Pilot Licence","Licensing"],
    ["ATPL","Airline Transport Pilot Licence","Licensing"],
    ["ATO","Approved Training Organisation","Training"],
    ["SACAA","South African Civil Aviation Authority","Regulation"],
    ["ICAO","International Civil Aviation Organization","International"],
    ["GPS","Global Positioning System","Navigation"],
    ["VOR","VHF Omnidirectional Range","Navigation"],
    ["DME","Distance Measuring Equipment","Navigation"],
    ["ADF","Automatic Direction Finder","Navigation"],
    ["NDB","Non-Directional Beacon","Navigation"]

];


/* ========================================================
APP STATE
======================================================== */

let currentPage = "dashboard";

let currentQuiz = [];

let currentQuestion = 0;

let currentScore = 0;

let questionAnswered = false;

let quizTimer;

let remainingSeconds = 0;

let flashIndex = 0;


/* ========================================================
LOCAL STORAGE
======================================================== */

let USER = JSON.parse(
    localStorage.getItem("aviatorUser") || "{}"
);


if(!USER.xp){

    USER.xp = 0;

}

if(!USER.answered){

    USER.answered = 0;

}

if(!USER.correct){

    USER.correct = 0;

}

if(!USER.subjects){

    USER.subjects = {};

}


/* ========================================================
SAVE
======================================================== */

function saveUser(){

    localStorage.setItem(
        "aviatorUser",
        JSON.stringify(USER)
    );

}


/* ========================================================
INIT
======================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        renderSubjects();

        renderAlphabet();

        renderAbbreviations();

        loadFlashcard();

        updateDashboard();

    }
);


/* ========================================================
NAVIGATION
======================================================== */

function showPage(page){

    document
        .querySelectorAll(".page")
        .forEach(
            pageElement =>
                pageElement.classList.add("hidden")
        );

    const target =
        document.getElementById(page);

    if(target){

        target.classList.remove("hidden");

    }

    currentPage = page;

    const titles = {

        dashboard:
            "Pilot Training Dashboard",

        subjects:
            "Ground School",

        flashcards:
            "Aviation Flashcards",

        alphabet:
            "ICAO Phonetic Alphabet",

        abbreviations:
            "Aviation Abbreviations",

        calculators:
            "Flight Calculators",

        metar:
            "METAR / TAF Study",

        progress:
            "My Progress",

        quiz:
            "Pilot Knowledge Exam"

    };

    document.getElementById(
        "pageTitle"
    ).textContent =
        titles[page] || "Aviator Academy";


    if(page === "progress"){

        renderProgress();

    }

    document
        .querySelectorAll(".nav")
        .forEach(
            button =>
                button.classList.remove("active")
        );

}


/* ========================================================
MOBILE MENU
======================================================== */

function toggleMenu(){

    document
        .getElementById("sidebar")
        .classList.toggle("open");

}


/* ========================================================
SUBJECT RENDERING
======================================================== */

function renderSubjects(){

    const dashboard =
        document.getElementById(
            "dashboardSubjects"
        );

    const all =
        document.getElementById(
            "allSubjects"
        );

    dashboard.innerHTML = "";

    all.innerHTML = "";


    SUBJECTS.forEach(
        subject => {

            const progress =
                getSubjectProgress(
                    subject.id
                );


            const html = `

                <div
                    class="subjectCard"
                    onclick="startSubjectQuiz('${subject.id}')"
                >

                    <div class="subjectIcon">
                        ${subject.icon}
                    </div>

                    <h3>
                        ${subject.name}
                    </h3>

                    <p>
                        ${subject.description}
                    </p>

                    <div class="subjectProgress">

                        <div
                            style="width:${progress}%"
                        ></div>

                    </div>

                </div>

            `;


            dashboard.innerHTML += html;

            all.innerHTML += html;

        }
    );

}


/* ========================================================
SUBJECT PROGRESS
======================================================== */

function getSubjectProgress(subject){

    if(
        !USER.subjects ||
        !USER.subjects[subject]
    ){

        return 0;

    }

    const data =
        USER.subjects[subject];

    if(!data.answered){

        return 0;

    }

    return Math.round(
        (data.correct / data.answered) * 100
    );

}


/* ========================================================
DASHBOARD
======================================================== */

function updateDashboard(){

    document.getElementById(
        "totalQuestions"
    ).textContent =
        QUESTION_BANK.length;


    document.getElementById(
        "answeredQuestions"
    ).textContent =
        USER.answered;


    const average =
        USER.answered
        ? Math.round(
            USER.correct /
            USER.answered *
            100
        )
        : 0;


    document.getElementById(
        "averageScore"
    ).textContent =
        average + "%";


    document.getElementById(
        "xp"
    ).textContent =
        USER.xp;


    document.getElementById(
        "level"
    ).textContent =
        getLevel();


    document.getElementById(
        "streak"
    ).textContent =
        USER.streak || 0;

}


/* ========================================================
LEVEL
======================================================== */

function getLevel(){

    return Math.floor(
        USER.xp / 100
    ) + 1;

}


/* ========================================================
EXAMS
======================================================== */

function startExam(amount){

    if(QUESTION_BANK.length === 0){

        alert(
            "No questions have been added yet."
        );

        return;

    }


    currentQuiz =
        [...QUESTION_BANK];


    shuffle(currentQuiz);


    currentQuiz =
        currentQuiz.slice(
            0,
            Math.min(
                amount,
                currentQuiz.length
            )
        );


    beginQuiz();

}


/* ========================================================
SUBJECT QUIZ
======================================================== */

function startSubjectQuiz(subject){

    currentQuiz =
        QUESTION_BANK.filter(
            question =>
                question.subject === subject
        );


    if(currentQuiz.length === 0){

        alert(
            "No questions have been added for this subject yet."
        );

        return;

    }


    shuffle(currentQuiz);

    currentQuiz =
        currentQuiz.slice(
            0,
            Math.min(
                10,
                currentQuiz.length
            )
        );


    beginQuiz();

}


/* ========================================================
BEGIN QUIZ
======================================================== */

function beginQuiz(){

    currentQuestion = 0;

    currentScore = 0;

    questionAnswered = false;

    showPage("quiz");

    startTimer(
        currentQuiz.length * 60
    );

    loadQuestion();

}


/* ========================================================
LOAD QUESTION
======================================================== */

function loadQuestion(){

    questionAnswered = false;

    const question =
        currentQuiz[currentQuestion];


    document.getElementById(
        "quizSubject"
    ).textContent =
        getSubjectName(
            question.subject
        );


    document.getElementById(
        "quizNumber"
    ).textContent =
        `Question ${currentQuestion + 1}`;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    document.getElementById(
        "quizProgressBar"
    ).style.width =
        (
            currentQuestion /
            currentQuiz.length *
            100
        ) + "%";


    const options =
        document.getElementById(
            "answerOptions"
        );

    options.innerHTML = "";


    question.options.forEach(
        (option,index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;


            button.onclick =
                () =>
                    selectAnswer(
                        index,
                        button
                    );


            options.appendChild(button);

        }
    );


    document.getElementById(
        "answerExplanation"
    ).classList.add("hidden");


    document.getElementById(
        "nextButton"
    ).disabled = true;

}


/* ========================================================
ANSWER
======================================================== */

function selectAnswer(
    selected,
    selectedButton
){

    if(questionAnswered){

        return;

    }

    questionAnswered = true;


    const question =
        currentQuiz[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (button,index) => {

            if(
                index ===
                question.answer
            ){

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    USER.answered++;


    if(
        !USER.subjects[
            question.subject
        ]
    ){

        USER.subjects[
            question.subject
        ] = {

            answered: 0,
            correct: 0

        };

    }


    USER.subjects[
        question.subject
    ].answered++;


    if(
        selected ===
        question.answer
    ){

        selectedButton.classList.add(
            "correct"
        );

        currentScore++;

        USER.correct++;

        USER.subjects[
            question.subject
        ].correct++;

        USER.xp += 10;

    }
    else{

        selectedButton.classList.add(
            "wrong"
        );

        USER.xp += 2;

    }


    saveUser();


    const explanation =
        document.getElementById(
            "answerExplanation"
        );


    explanation.innerHTML =
        `<strong>Explanation</strong><br><br>
        ${question.explanation}`;


    explanation.classList.remove(
        "hidden"
    );


    document.getElementById(
        "nextButton"
    ).disabled = false;


    updateDashboard();

    renderSubjects();

}


/* ========================================================
NEXT QUESTION
======================================================== */

function nextQuestion(){

    currentQuestion++;


    if(
        currentQuestion >=
        currentQuiz.length
    ){

        finishQuiz();

        return;

    }


    loadQuestion();

}


/* ========================================================
FINISH QUIZ
======================================================== */

function finishQuiz(){

    clearInterval(quizTimer);


    const percentage =
        Math.round(
            currentScore /
            currentQuiz.length *
            100
        );


    const message =
        percentage >= 75
        ? "Excellent work. Keep building your knowledge."
        : "Good attempt. Review your weak subjects and try again.";


    document.getElementById(
        "questionText"
    ).innerHTML = `

        EXAM COMPLETE ✈️

        <br><br>

        ${currentScore}
        /
        ${currentQuiz.length}

        <br><br>

        ${percentage}%

    `;


    document.getElementById(
        "answerOptions"
    ).innerHTML = "";


    document.getElementById(
        "answerExplanation"
    ).classList.remove(
        "hidden"
    );


    document.getElementById(
        "answerExplanation"
    ).innerHTML =
        message;


    document.getElementById(
        "nextButton"
    ).textContent =
        "Return to Dashboard";


    document.getElementById(
        "nextButton"
    ).disabled = false;


    document.getElementById(
        "nextButton"
    ).onclick = function(){

        document.getElementById(
            "nextButton"
        ).textContent =
            "Next Question →";


        document.getElementById(
            "nextButton"
        ).onclick =
            nextQuestion;


        showPage("dashboard");

        updateDashboard();

    };

}


/* ========================================================
EXIT
======================================================== */

function exitQuiz(){

    clearInterval(quizTimer);

    showPage("dashboard");

}


/* ========================================================
TIMER
======================================================== */

function startTimer(seconds){

    clearInterval(quizTimer);

    remainingSeconds = seconds;

    updateTimer();


    quizTimer =
        setInterval(
            function(){

                remainingSeconds--;

                updateTimer();


                if(
                    remainingSeconds <= 0
                ){

                    clearInterval(
                        quizTimer
                    );

                    finishQuiz();

                }

            },
            1000
        );

}


function updateTimer(){

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );

    const seconds =
        remainingSeconds % 60;


    document.getElementById(
        "timer"
    ).textContent =

        String(minutes)
            .padStart(2,"0")

        + ":"

        +

        String(seconds)
            .padStart(2,"0");

}


/* ========================================================
FLASHCARDS
======================================================== */

const FLASHCARDS = [

    {
        category:"Navigation",
        term:"Ground Speed",
        definition:
            "The speed of an aircraft relative to the ground."
    },

    {
        category:"Principles of Flight",
        term:"Lift",
        definition:
            "An aerodynamic force acting generally perpendicular to the relative airflow."
    },

    {
        category:"Principles of Flight",
        term:"Drag",
        definition:
            "An aerodynamic force that generally opposes motion through the air."
    },

    {
        category:"Meteorology",
        term:"Dew Point",
        definition:
            "The temperature to which air must be cooled for saturation to occur under stated conditions."
    },

    {
        category:"Radio",
        term:"Readback",
        definition:
            "Repeating relevant received information to confirm correct understanding."
    },

    {
        category:"Aircraft",
        term:"Altimeter",
        definition:
            "An instrument that indicates altitude based on atmospheric pressure."
    },

    {
        category:"Performance",
        term:"Moment",
        definition:
            "In basic weight-and-balance calculations, moment is weight multiplied by arm."
    },

    {
        category:"Meteorology",
        term:"METAR",
        definition:
            "A routine aerodrome weather report."
    },

    {
        category:"Meteorology",
        term:"TAF",
        definition:
            "An aerodrome weather forecast."
    },

    {
        category:"Operations",
        term:"NOTAM",
        definition:
            "A notice containing aeronautical information important to flight operations."
    }

];


function loadFlashcard(){

    const card =
        FLASHCARDS[flashIndex];


    document.getElementById(
        "flashCategory"
    ).textContent =
        card.category.toUpperCase();


    document.getElementById(
        "flashTerm"
    ).textContent =
        card.term;


    document.getElementById(
        "flashDefinition"
    ).textContent =
        card.definition;


    document.getElementById(
        "flashCounter"
    ).textContent =

        `${flashIndex + 1} / ${FLASHCARDS.length}`;

}


function nextFlashcard(){

    flashIndex++;

    if(
        flashIndex >=
        FLASHCARDS.length
    ){

        flashIndex = 0;

    }

    loadFlashcard();

}


function previousFlashcard(){

    flashIndex--;

    if(
        flashIndex < 0
    ){

        flashIndex =
            FLASHCARDS.length - 1;

    }

    loadFlashcard();

}


/* ========================================================
ALPHABET
======================================================== */

function renderAlphabet(){

    const container =
        document.getElementById(
            "alphabetGrid"
        );


    container.innerHTML = "";


    PHONETIC.forEach(
        letter => {

            container.innerHTML += `

                <div class="alphaCard">

                    <strong>
                        ${letter[0]}
                    </strong>

                    <span>
                        ${letter[1]}
                    </span>

                </div>

            `;

        }
    );

}


/* ========================================================
ABBREVIATIONS
======================================================== */

function renderAbbreviations(){

    const table =
        document.getElementById(
            "abbreviationTable"
        );


    table.innerHTML = "";


    ABBREVIATIONS.forEach(
        abbreviation => {

            table.innerHTML += `

                <tr>

                    <td>
                        <strong>
                            ${abbreviation[0]}
                        </strong>
                    </td>

                    <td>
                        ${abbreviation[1]}
                    </td>

                    <td>
                        ${abbreviation[2]}
                    </td>

                </tr>

            `;

        }
    );

}


/* ========================================================
CALCULATORS
======================================================== */

function calculateTime(){

    const distance =
        Number(
            document.getElementById(
                "calcDistance"
            ).value
        );


    const speed =
        Number(
            document.getElementById(
                "calcSpeed"
            ).value
        );


    if(
        distance <= 0 ||
        speed <= 0
    ){

        document.getElementById(
            "timeResult"
        ).textContent =
            "Enter valid values.";

        return;

    }


    const hours =
        distance / speed;


    const wholeHours =
        Math.floor(hours);


    const minutes =
        Math.round(
            (hours - wholeHours) * 60
        );


    document.getElementById(
        "timeResult"
    ).innerHTML =

        `<strong>
            ${wholeHours} hr ${minutes} min
        </strong>`;

}


function calculateFuel(){

    const hours =
        Number(
            document.getElementById(
                "calcHours"
            ).value
        );


    const rate =
        Number(
            document.getElementById(
                "calcFuelRate"
            ).value
        );


    if(
        hours <= 0 ||
        rate <= 0
    ){

        document.getElementById(
            "fuelResult"
        ).textContent =
            "Enter valid values.";

        return;

    }


    const fuel =
        hours * rate;


    document.getElementById(
        "fuelResult"
    ).innerHTML =

        `<strong>
            ${fuel.toFixed(1)} L
        </strong>`;

}


function calculateMoment(){

    const weight =
        Number(
            document.getElementById(
                "wbWeight"
            ).value
        );


    const arm =
        Number(
            document.getElementById(
                "wbArm"
            ).value
        );


    if(
        weight <= 0 ||
        arm <= 0
    ){

        document.getElementById(
            "momentResult"
        ).textContent =
            "Enter valid values.";

        return;

    }


    const moment =
        weight * arm;


    document.getElementById(
        "momentResult"
    ).innerHTML =

        `<strong>
            ${moment.toFixed(2)}
            kg·m
        </strong>`;

}


/* ========================================================
PROGRESS
======================================================== */

function renderProgress(){

    const answered =
        USER.answered || 0;


    const score =
        answered
        ? Math.round(
            USER.correct /
            answered *
            100
        )
        : 0;


    document.getElementById(
        "progressScore"
    ).textContent =
        score + "%";


    document.getElementById(
        "progressXP"
    ).textContent =
        USER.xp;


    document.getElementById(
        "progressAnswered"
    ).textContent =
        answered;


    const container =
        document.getElementById(
            "subjectProgress"
        );


    container.innerHTML = "";


    SUBJECTS.forEach(
        subject => {

            const percentage =
                getSubjectProgress(
                    subject.id
                );


            container.innerHTML += `

                <div class="progressSubject">

                    <div class="progressSubjectHeader">

                        <span>
                            ${subject.icon}
                            ${subject.name}
                        </span>

                        <span>
                            ${percentage}%
                        </span>

                    </div>

                    <div class="progressTrack">

                        <div
                            style="width:${percentage}%"
                        ></div>

                    </div>

                </div>

            `;

        }
    );

}


/* ========================================================
HELPERS
======================================================== */

function getSubjectName(id){

    const subject =
        SUBJECTS.find(
            item =>
                item.id === id
        );


    return subject
        ? subject.name
        : "AVIATION";

}


function shuffle(array){

    for(
        let i = array.length - 1;
        i > 0;
        i--
    ){

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

}


/* ========================================================
UPDATE ON RETURN
======================================================== */

window.addEventListener(
    "focus",
    function(){

        updateDashboard();

    }
);
