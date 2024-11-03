

const button = document.getElementById('randomButton');
const display = document.getElementById('numberDisplay');

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    display.textContent = randomNumber;

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

