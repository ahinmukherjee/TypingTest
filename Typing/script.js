const sentences = [
    "The rapid evolution of digital technology has fundamentally transformed the way individuals communicate, collaborate, and process information across modern society. In this environment, typing proficiency is no longer considered an optional skill but rather an essential competency that directly influences productivity and efficiency. Individuals who possess advanced typing abilities are capable of converting complex ideas into structured textual output with remarkable speed and precision, enabling them to excel in academic, technical, and professional settings. The development of such expertise requires sustained practice, cognitive discipline, and the ability to maintain concentration during prolonged periods of activity. As typists refine their skills, they begin to establish stronger neural pathways that reduce hesitation and improve synchronization between thought processes and physical movement. This seamless interaction between cognition and motor coordination ultimately results in enhanced performance, reduced fatigue, and a more fluid digital communication experience.",

    "In contemporary computational environments, the ability to interact efficiently with digital systems through rapid and accurate typing has become increasingly valuable. Typing is not merely the mechanical act of pressing keys on a keyboard; rather, it represents a sophisticated integration of memory retention, hand-eye coordination, linguistic familiarity, and cognitive adaptability. Individuals who dedicate time to deliberate practice gradually develop the capacity to anticipate word structures, minimize typing latency, and maintain consistent accuracy under pressure. Such proficiency contributes significantly to improved workflow management, particularly in professions that demand extensive documentation, software development, or real-time communication. Furthermore, ergonomic awareness plays a critical role in sustaining long-term typing performance, as poor posture or repetitive strain can negatively affect both comfort and efficiency. By combining disciplined practice with strategic learning techniques, typists can achieve a level of mastery that enables them to communicate ideas with exceptional fluency and confidence.",

    "The advancement of information technology has created a world in which effective communication depends heavily upon digital literacy and typing competence. As organizations increasingly rely on virtual collaboration, data management, and electronic documentation, the capacity to produce accurate text rapidly has emerged as a defining professional advantage. Typing efficiency is achieved through a gradual process involving repetition, analytical self-correction, and continuous exposure to increasingly complex textual patterns. During this progression, typists train their muscles to respond instinctively to cognitive instructions, thereby minimizing conscious effort and maximizing output consistency. In addition to speed, precision remains a crucial component of successful typing because excessive errors disrupt workflow and reduce overall effectiveness. Consequently, individuals must adopt a balanced approach that prioritizes both velocity and accuracy while simultaneously cultivating endurance for extended writing sessions. Over time, these combined efforts lead to measurable improvements in productivity, confidence, and cognitive responsiveness within digital environments."
];

let index = 0;
let startTime;
let timerInterval;
let score = 0;

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const scoreEl = document.getElementById("score");

function loadSentence() {
    sentenceEl.innerText = sentences[index];
    inputEl.value = "";
    resultEl.innerText = "";

    // Reset Timer
    clearInterval(timerInterval);
    startTime = new Date();
    timerInterval = setInterval(updateTime, 1000);

    inputEl.focus();
}

function updateTime() {
    let currentTime = Math.floor((new Date() - startTime) / 1000);
    timeEl.innerText = "Time: " + currentTime + "s";
}

inputEl.addEventListener("input", () => {
    let typed = inputEl.value;
    let original = sentences[index];

    // Accuracy calculation
    let correctChars = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) {
            correctChars++;
        }
    }

    let accuracy = Math.round((correctChars / original.length) * 100);

    if (typed === original) {
        clearInterval(timerInterval);

        let timeTaken = (new Date() - startTime) / 1000;
        let words = original.split(" ").length;
        let wpm = Math.round((words / timeTaken) * 60);

        // Score calculation
        let roundScore = Math.round(wpm + accuracy);
        score += roundScore;

        resultEl.innerText = "✅ Correct!";
        wpmEl.innerText = "WPM: " + wpm;
        scoreEl.innerText = "Score: " + score;

        index++;

        if (index < sentences.length) {
            setTimeout(loadSentence, 1000);
        } else {
            resultEl.innerText = "🎉 Completed all sentences!";
        }
    } else {
        resultEl.innerText = "❌ Keep typing...";
    }
});

// Start game
loadSentence();