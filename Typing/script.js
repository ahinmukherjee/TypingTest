const sentences = [
    " Mastering the art of typing involves more than just pressing keys rapidly; it requires cognitive synchronization, precision, and endurance. As individuals engage in prolonged typing sessions, they must maintain a balance between speed and accuracy to ensure optimal performance. Advanced typists often rely on subconscious muscle memory, enabling them to focus on content creation rather than key placement. This level of proficiency is achieved through disciplined practice, error analysis, and continuous refinement of technique",
    "In an increasingly digitized ecosystem, the ability to transcribe thoughts into coherent text with both velocity and precision has become a fundamental competency. Typing, when executed with refined dexterity and cognitive alignment, transcends mere mechanical input and evolves into a seamless extension of human expression. Achieving such fluency demands rigorous training, adaptive learning strategies, and an unwavering commitment to incremental improvement. Consequently, individuals who cultivate this expertise gain a distinct advantage in both academic and professional environments.",
    "In an increasingly digitized ecosystem, the ability to translate complex cognitive constructs into coherent textual output with both velocity and precision has emerged as a fundamental competency. Typing, when executed with refined dexterity and cognitive synchronization, transcends its mechanical origins and becomes an extension of intellectual expression. This transformation is facilitated by the development of advanced muscle memory, which allows individuals to bypass conscious key mapping and instead focus on the articulation of ideas. Consequently, those who achieve mastery in typing gain a significant advantage in environments that demand rapid and accurate communication. The optimization of typing performance involves a multifaceted approach that integrates ergonomic considerations, cognitive training, and repetitive practice. Individuals must maintain proper posture to prevent physical strain while simultaneously engaging in exercises that enhance neural pathways associated with motor control. As these pathways become more efficient, the typist experiences a reduction in latency between thought and action, resulting in a seamless flow of input. This level of proficiency is particularly valuable in high-pressure scenarios where time constraints necessitate rapid yet accurate text production.",
    "Typing is a skill that evolves gradually through disciplined practice and consistent effort, and it requires both mental focus and physical coordination to achieve a high level of proficiency. When individuals begin practicing typing, they often concentrate heavily on each key press, but over time, their fingers develop muscle memory that allows them to type fluidly without conscious thought. This transformation does not happen instantly; rather, it is the result of repeated exposure to structured text and deliberate correction of mistakes. As accuracy improves, speed naturally follows, enabling the typist to handle complex tasks such as writing detailed documents, coding programs, or communicating ideas efficiently in a fast-paced digital environment.In the modern digital landscape, typing has become an essential skill that influences productivity across multiple domains, including education, business, and communication. A person who can type quickly and accurately is able to complete tasks more efficiently, leaving more time for analysis and creativity. However, achieving such proficiency requires more than casual practice; it demands a systematic approach that includes proper posture, correct finger placement, and regular evaluation of performance. Over time, the typist begins to develop a natural rhythm, where keystrokes align seamlessly with thought processes, resulting in a smooth and uninterrupted flow of information from mind to screen.The journey toward mastering typing is not limited to increasing speed alone, as accuracy plays an equally critical role in determining overall effectiveness. When typists prioritize speed without maintaining precision, they often introduce errors that require correction, ultimately reducing efficiency. Therefore, it is essential to strike a balance between these two aspects by focusing on controlled and deliberate practice sessions. As individuals continue to refine their technique, they begin to notice improvements not only in their typing performance but also in their ability to concentrate for extended periods, which is a valuable skill in both academic and professional settings. Typing practice becomes significantly more effective when individuals challenge themselves with longer and more complex paragraphs that require sustained attention and cognitive engagement. Such exercises push the boundaries of comfort and encourage the development of endurance, which is necessary for handling real-world tasks that involve extensive writing. Additionally, exposure to diverse vocabulary and sentence structures enhances language comprehension and adaptability. As the typist progresses, they learn to anticipate word patterns and reduce hesitation, leading to a more confident and efficient typing experience that reflects a higher level of mastery.Consistency remains one of the most important factors in improving typing skills, as sporadic practice often leads to minimal progress and frequent regression. By dedicating a specific amount of time each day to structured exercises, individuals can gradually build both speed and accuracy in a sustainable manner. It is also beneficial to analyze mistakes and identify recurring patterns of error, as this allows for targeted improvement. Over time, these small but consistent efforts accumulate, resulting in a noticeable enhancement in typing performance and overall confidence in handling text-based tasks."
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