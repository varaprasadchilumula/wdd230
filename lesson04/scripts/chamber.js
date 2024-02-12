// Toggle Switch on Header for Dark Mode

const modeButton = document.querySelector("input");
const main = document.querySelector("body");
const lightBg = document.querySelector(".light-bg");

modeButton.addEventListener("change", () => {
    if (modeButton.checked) {
        main.style.background = "#000";
        main.style.color = "#fff";
        if (lightBg) {
            lightBg.style.color = "#2A2E30";
        }
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
    }
});