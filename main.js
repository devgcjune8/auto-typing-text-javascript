const TYPING_TEXT = document.querySelector('.typing-text');
const TYPING_SPEED = document.querySelector('#speed');
const TEXT = "This computer has not been hacked, this is just a cool JavaScript function...";

let index = 1;
let speed = 430 / TYPING_SPEED.value;

typingText()

function typingText() {
    TYPING_TEXT.innerText = TEXT.slice(0, index);
    index ++;

    if (index > TEXT.length) {
        index = 1
    }

    setTimeout(typingText, speed)
}

TYPING_SPEED.addEventListener('input', (event) => speed = 430 / event.target.value )