const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

noButton.addEventListener('click', () => {
    alert("baal ! do not cheat.");
});

document.getElementById('yesButton').addEventListener('click', () => {
    alert("I know you are a gay");
});