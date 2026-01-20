// DARK MODE
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// AIRCRAFT SEARCH
document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll(".aircraft").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
});

// PLANE PARTS INFO
document.querySelectorAll("#parts button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("partInfo").innerText = btn.dataset.part;
    });
});

// QUIZ ANIMATION
document.querySelectorAll("#quiz button").forEach(btn => {
    btn.addEventListener("click", () => {
        const result = document.getElementById("quizResult");
        if(btn.dataset.answer === "correct"){
            result.innerText = "✅ Correct!";
            result.classList.add("correct");
        } else {
            result.innerText = "❌ Try again!";
            result.classList.add("wrong");
        }
        setTimeout(() => { result.classList.remove("correct", "wrong"); }, 600);
    });
});

// FADE-IN SECTIONS ON SCROLL
function revealSections() {
    document.querySelectorAll("section").forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections(); // trigger on page load
