const text = "QA Engineer in Progress | Mom of 4 | Healthcare Techie";
const heroText = document.getElementById('hero-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);


const vibeCard = document.getElementById("vibe-card");
const hour = new Date().getHours();

if(hour >= 5 && hour < 12){
    vibeCard.textContent = "☕ Morning Mode: Caffeine + Test Cases";
} else if(hour >= 12 && hour < 18){
    vibeCard.textContent = "💻 Afternoon Mode: Debugging Life & Apps";
} else {
    vibeCard.textContent = "🌙 Night Mode: Mom Mode x Automation Mode";
}
