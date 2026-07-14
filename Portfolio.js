const text = "Full Stack Web Development Intern";
const typing = document.getElementById("typing");

let i = 0;

function typeText() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            typing.innerHTML = "";
            i = 0;
            typeText();
        }, 2000);
    }
}

typeText();