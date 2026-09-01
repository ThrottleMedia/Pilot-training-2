/*
===========================================================
AVIATOR ACADEMY
QUESTION BANK
===========================================================

Categories:

airlaw
meteorology
navigation
principles
aircraft
performance
massbalance
radio
human
emergency
instruments
flightplanning

IMPORTANT:

These are original practice questions.
They are NOT copied SACAA examination questions.

===========================================================
*/


const QUESTION_BANK = [

/* ========================================================
AIR LAW
======================================================== */

{
    id: "AL001",
    subject: "airlaw",

    question:
        "What does VFR stand for?",

    options: [
        "Visual Flight Rules",
        "Vertical Flight Regulations",
        "Visual Frequency Rules",
        "Variable Flight Route"
    ],

    answer: 0,

    explanation:
        "VFR means Visual Flight Rules."
},

{
    id: "AL002",
    subject: "airlaw",

    question:
        "What does IFR stand for?",

    options: [
        "Instrument Flight Rules",
        "International Flight Regulations",
        "Instrument Frequency Rules",
        "Internal Flight Route"
    ],

    answer: 0,

    explanation:
        "IFR means Instrument Flight Rules."
},

{
    id: "AL003",
    subject: "airlaw",

    question:
        "What does ATC stand for?",

    options: [
        "Air Traffic Control",
        "Aircraft Technical Control",
        "Air Transport Communication",
        "Aviation Traffic Clearance"
    ],

    answer: 0,

    explanation:
        "ATC means Air Traffic Control."
},


/* ========================================================
METEOROLOGY
======================================================== */

{
    id: "MET001",
    subject: "meteorology",

    question:
        "What instrument measures atmospheric pressure?",

    options: [
        "Barometer",
        "Anemometer",
        "Hygrometer",
        "Thermometer"
    ],

    answer: 0,

    explanation:
        "A barometer measures atmospheric pressure."
},

{
    id: "MET002",
    subject: "meteorology",

    question:
        "What does an anemometer measure?",

    options: [
        "Wind speed",
        "Temperature",
        "Atmospheric pressure",
        "Humidity"
    ],

    answer: 0,

    explanation:
        "An anemometer measures wind speed."
},

{
    id: "MET003",
    subject: "meteorology",

    question:
        "Which cloud type is strongly associated with thunderstorms?",

    options: [
        "Cumulonimbus",
        "Cirrus",
        "Stratus",
        "Altostratus"
    ],

    answer: 0,

    explanation:
        "Cumulonimbus clouds are associated with thunderstorms and strong vertical development."
},

{
    id: "MET004",
    subject: "meteorology",

    question:
        "What generally happens to atmospheric pressure as altitude increases?",

    options: [
        "It decreases",
        "It increases",
        "It remains exactly constant",
        "It immediately becomes zero"
    ],

    answer: 0,

    explanation:
        "Atmospheric pressure generally decreases with increasing altitude."
},

{
    id: "MET005",
    subject: "meteorology",

    question:
        "What is the dew point?",

    options: [
        "The temperature at which air becomes saturated when cooled at constant pressure",
        "The maximum temperature reached during the day",
        "The temperature of the aircraft engine",
        "The temperature at the top of a cloud"
    ],

    answer: 0,

    explanation:
        "The dew point is the temperature to which air must be cooled for saturation to occur, under the stated conditions."
},


/* ========================================================
NAVIGATION
======================================================== */

{
    id: "NAV001",
    subject: "navigation",

    question:
        "What does NM mean in aviation navigation?",

    options: [
        "Nautical mile",
        "Navigation metre",
        "Normal mile",
        "North mile"
    ],

    answer: 0,

    explanation:
        "NM means nautical mile."
},

{
    id: "NAV002",
    subject: "navigation",

    question:
        "What is ground speed?",

    options: [
        "The speed of an aircraft relative to the ground",
        "The speed of the engine",
        "The aircraft's indicated altitude",
        "The aircraft's vertical speed"
    ],

    answer: 0,

    explanation:
        "Ground speed is the aircraft's speed relative to the ground."
},

{
    id: "NAV003",
    subject: "navigation",

    question:
        "What does GPS stand for?",

    options: [
        "Global Positioning System",
        "Ground Positioning Signal",
        "Global Pilot System",
        "Geographical Positioning Service"
    ],

    answer: 0,

    explanation:
        "GPS stands for Global Positioning System."
},

{
    id: "NAV004",
    subject: "navigation",

    question:
        "What is a track?",

    options: [
        "The actual path of an aircraft over the ground",
        "The direction the aircraft nose is pointing",
        "The aircraft's vertical speed",
        "The aircraft's indicated airspeed"
    ],

    answer: 0,

    explanation:
        "Track is the actual path of the aircraft over the ground."
},


/* ========================================================
PRINCIPLES OF FLIGHT
======================================================== */

{
    id: "POF001",
    subject: "principles",

    question:
        "Which four forces are commonly used to describe aircraft flight?",

    options: [
        "Lift, weight, thrust and drag",
        "Pitch, roll, yaw and trim",
        "Pressure, temperature, wind and humidity",
        "Fuel, oil, air and electricity"
    ],

    answer: 0,

    explanation:
        "The four fundamental forces are lift, weight, thrust and drag."
},

{
    id: "POF002",
    subject: "principles",

    question:
        "Which force generally opposes an aircraft's forward motion through the air?",

    options: [
        "Drag",
        "Lift",
        "Weight",
        "Thrust"
    ],

    answer: 0,

    explanation:
        "Drag acts generally opposite the aircraft's motion through the air."
},

{
    id: "POF003",
    subject: "principles",

    question:
        "A stall occurs when the wing exceeds its:",

    options: [
        "Critical angle of attack",
        "Maximum fuel quantity",
        "Maximum engine temperature",
        "Maximum radio range"
    ],

    answer: 0,

    explanation:
        "A stall occurs when the wing exceeds its critical angle of attack."
},


/* ========================================================
AIRCRAFT GENERAL KNOWLEDGE
======================================================== */

{
    id: "AGK001",
    subject: "aircraft",

    question:
        "What does an altimeter indicate?",

    options: [
        "Altitude",
        "Fuel quantity",
        "Engine RPM",
        "Wind speed"
    ],

    answer: 0,

    explanation:
        "The altimeter indicates altitude using atmospheric pressure."
},

{
    id: "AGK002",
    subject: "aircraft",

    question:
        "What does RPM mean?",

    options: [
        "Revolutions per minute",
        "Radio pressure measurement",
        "Runway position measurement",
        "Relative power movement"
    ],

    answer: 0,

    explanation:
        "RPM means revolutions per minute."
},


/* ========================================================
PERFORMANCE
======================================================== */

{
    id: "PER001",
    subject: "performance",

    question:
        "Why is aircraft mass important when planning a flight?",

    options: [
        "Mass affects aircraft performance and limitations",
        "Mass only affects the radio frequency",
        "Mass has no effect on aircraft operation",
        "Mass determines the aircraft registration"
    ],

    answer: 0,

    explanation:
        "Aircraft mass affects performance and must be considered when operating within aircraft limitations."
},


/* ========================================================
MASS & BALANCE
======================================================== */

{
    id: "WB001",
    subject: "massbalance",

    question:
        "What is a moment in basic aircraft weight-and-balance calculations?",

    options: [
        "Weight multiplied by arm",
        "Weight divided by arm",
        "Arm divided by weight",
        "Weight plus arm"
    ],

    answer: 0,

    explanation:
        "In basic weight-and-balance calculations, moment is calculated as weight multiplied by arm."
},


/* ========================================================
RADIO
======================================================== */

{
    id: "RAD001",
    subject: "radio",

    question:
        "Why is the ICAO phonetic alphabet used in aviation radio?",

    options: [
        "To make letters clearer during radio communication",
        "To calculate aircraft weight",
        "To determine cloud height",
        "To calculate fuel consumption"
    ],

    answer: 0,

    explanation:
        "The phonetic alphabet helps reduce confusion between similar-sounding letters."
},

{
    id: "RAD002",
    subject: "radio",

    question:
        "What is a readback?",

    options: [
        "Repeating important received information to confirm it",
        "Reading an aircraft maintenance manual",
        "Reading a weather chart",
        "Repeating only the aircraft type"
    ],

    answer: 0,

    explanation:
        "A readback repeats relevant received information to confirm correct understanding."
},


/* ========================================================
HUMAN PERFORMANCE
======================================================== */

{
    id: "HUM001",
    subject: "human",

    question:
        "Which factor can negatively affect pilot decision-making?",

    options: [
        "Fatigue",
        "Adequate rest",
        "Good preparation",
        "Good hydration"
    ],

    answer: 0,

    explanation:
        "Fatigue can negatively affect alertness, judgement and decision-making."
},

{
    id: "HUM002",
    subject: "human",

    question:
        "What does hypoxia refer to?",

    options: [
        "Insufficient oxygen available to body tissues",
        "Excess fuel in the aircraft",
        "Excessive engine RPM",
        "High atmospheric pressure"
    ],

    answer: 0,

    explanation:
        "Hypoxia refers to inadequate oxygen availability to body tissues."
},


/* ========================================================
EMERGENCIES
======================================================== */

{
    id: "EM001",
    subject: "emergency",

    question:
        "What is a fundamental priority during an aircraft emergency?",

    options: [
        "Maintain aircraft control",
        "Change radio frequency repeatedly",
        "Complete paperwork",
        "Calculate passenger baggage weight"
    ],

    answer: 0,

    explanation:
        "Maintaining aircraft control is a fundamental priority during an emergency."
},


/* ========================================================
INSTRUMENTS
======================================================== */

{
    id: "INS001",
    subject: "instruments",

    question:
        "Which instrument indicates aircraft attitude relative to the horizon?",

    options: [
        "Attitude indicator",
        "Altimeter",
        "Airspeed indicator",
        "Vertical speed indicator"
    ],

    answer: 0,

    explanation:
        "The attitude indicator displays aircraft pitch and bank attitude relative to the horizon."
},

{
    id: "INS002",
    subject: "instruments",

    question:
        "Which instrument indicates vertical speed?",

    options: [
        "Vertical speed indicator",
        "Altimeter",
        "Heading indicator",
        "Turn coordinator"
    ],

    answer: 0,

    explanation:
        "The vertical speed indicator indicates the rate of climb or descent."
},


/* ========================================================
FLIGHT PLANNING
======================================================== */

{
    id: "FP001",
    subject: "flightplanning",

    question:
        "Which factor should be considered when planning aircraft fuel?",

    options: [
        "Expected flight time and fuel consumption",
        "Aircraft paint colour",
        "Passenger clothing",
        "Aircraft registration font"
    ],

    answer: 0,

    explanation:
        "Fuel planning must account for expected flight time, consumption and applicable operational requirements."
}

];
