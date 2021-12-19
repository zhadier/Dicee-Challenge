let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');

document.querySelector('button').addEventListener('click', () => {
    let randomNumber1 = Math.floor((Math.random() * 6) + 1);
    let randomNumber2 = Math.floor((Math.random() * 6) + 1);
    player2.src = `images/dice${randomNumber2}.png`;
    player1.src = `images/dice${randomNumber1}.png`;
    heading = document.querySelector('h1');
    if (randomNumber1 > randomNumber2) {
        heading.textContent = `🏁 Player 1 Wins`;
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = `Player 2 Wins 🏁`;
    } else {
        heading.textContent = `Draw!`;
    }
})