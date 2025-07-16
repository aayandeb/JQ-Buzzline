/* Contents of script.js */
const queue = [];
const disqualified = [];
let darkMode = false;
let idleMode = false;
const buzzerColors = {};

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    switch (key) {
        case "1":
            buzz(1, "Team 1");
            break;
        case "2":
            buzz(2, "Team 2");
            break;
        case "3":
            buzz(3, "Team 3");
            break;
        case "4":
            buzz(4, "Team 4");
            break;
        case "5":
            buzz(5, "Team 5");
            break;
        case "6":
            buzz(6, "Team 6");
            break;
        case "7":
            buzz(7, "Team 7");
            break;
        case "8":
            buzz(8, "Team 8");
            break;
        case "9":
            buzz(9, "Team 9");
            break;
        case "0":
            buzz(0, "Team 10");
            break;
        case "a":
            buzz("a", "Team 11");
            break;
        case "s":
            buzz("s", "Team 12");
            break;
        case "d":
            buzz("d", "Team 13");
            break;
        case "f":
            buzz("f", "Team 14");
            break;
    }
});


function invertBuzzerColor(buzzerNumber) {
    const buzzer = document.getElementById(`buzzer${buzzerNumber}`);
    buzzer.style.filter = "invert(100%)";
}

function buzz(buzzerNumber) {
    const playerName = buzzerNumber.toString();
    const buzzer = document.getElementById(`buzzer${buzzerNumber}`);
    const buzzerSound = document.getElementById("buzzerSound");

    if (!idleMode && queue.includes(playerName)) {
        // Do not buzz if idle mode is enabled and player is already in the queue
        return;
    }

    if (!idleMode && disqualified.includes(playerName)) {
        // Do not buzz if idle mode is enabled and player is disqualified
        return;
    }

    if (!queue.includes(playerName) && !disqualified.includes(playerName)) {
        queue.push(playerName); // Add the player to the end of the queue

        // Update the queue display on the page
        const queueDisplay = document.getElementById("queue");
        queueDisplay.textContent = "Queue:\n" + queue.join("\n");
    }

    buzzerSound.play(); // Play the sound effect

    if (!buzzerColors[buzzerNumber]) {
        // Store the buzzer color if not already stored (to keep the original color)
        buzzerColors[buzzerNumber] = window.getComputedStyle(buzzer).backgroundColor;
    }

    buzzer.style.backgroundColor = buzzerColors[buzzerNumber]; // Change buzzer color permanently
    buzzer.classList.add("buzzed");


    if (idleMode && queue.includes(playerName)) {
        // Disqualify the player if idle mode is enabled and player is already in the queue
        const index = queue.indexOf(playerName);
        queue.splice(index, 1); // Remove player from the queue
        disqualified.push(playerName); // Add player to the disqualified list

        // Update the queue and disqualified displays on the page
        const queueDisplay = document.getElementById("queue");
        const disqualifiedDisplay = document.getElementById("disqualified");
        queueDisplay.textContent = "Queue:\n" + queue.join("\n");
        disqualifiedDisplay.textContent = "Disqualified:\n" + disqualified.join("\n");
    }
}

function resetQueue() {
    queue.length = 0; // Clear the queue
    const queueDisplay = document.getElementById("queue");
    queueDisplay.textContent = "Queue:"; // Update the queue display

    // Reset the buzzer colors to their original values
    for (const buzzerNumber in buzzerColors) {
        const buzzer = document.getElementById(`buzzer${buzzerNumber}`);
        buzzer.style.backgroundColor = buzzerColors[buzzerNumber];
        buzzer.classList.remove("buzzed"); // Remove the buzzed class on reset
    }
}

function toggleDarkMode() {
    const body = document.body;
    darkMode = !darkMode;
    body.classList.toggle("dark-mode", darkMode);

    // Add or remove the "dark-mode" class from the queue container
    // Add or remove the "dark-mode" class from the queue container
    const queue = document.getElementById("queue");
    queue.classList.toggle("dark-mode", darkMode);

    // Add or remove the "dark-mode" class from the disqualified container
    const disqualified = document.getElementById("disqualified");
    disqualified.classList.toggle("dark-mode", darkMode);

    const signature = document.getElementById("signature");
    signature.classList.toggle("dark-mode", darkMode);
}


function toggleIdleMode() {
    const buzzerContainers = document.querySelectorAll(".buzzer");
    idleMode = !idleMode;

    // Add or remove the idle-mode class from the buzzer boxes based on idleMode state
    buzzerContainers.forEach((buzzer) => {
        buzzer.classList.toggle("idle-mode", idleMode);
        if (idleMode) {
            const playerName = buzzer.id.replace("buzzer", "");
            const indexInQueue = queue.indexOf(playerName);
            if (indexInQueue !== -1) {
                queue.splice(indexInQueue, 1);
                disqualified.push(playerName);
            }
        }
    });

    // Update the text content of the Idle Mode button
    const idleModeButton = document.getElementById("idleModeButton");
    idleModeButton.textContent = idleMode ? "Idle Mode ON" : "Idle Mode";

    if (!idleMode) {
        // Reset the disqualified container if idle mode is turned off
        disqualified.length = 0;
        const disqualifiedDisplay = document.getElementById("disqualified");
        disqualifiedDisplay.textContent = "Disqualified:";
    }

    // Update the queue display on the page
    const queueDisplay = document.getElementById("queue");
    queueDisplay.textContent = "Queue:\n" + queue.join("\n");
}

window.onload = () => {
    // toggleDarkMode(); // This will enable dark mode by default
}

function redirectRickroll() {
    const rickrollURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    window.open(rickrollURL, "_blank");
} 