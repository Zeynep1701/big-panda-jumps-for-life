let panda;
let pandaPosition = { x: 400, y: 550 };

function initializePanda() {
    panda = document.querySelector('.panda');
    panda.style.left = `${pandaPosition.x}px`;
    panda.style.bottom = `${pandaPosition.y}px`;

    document.addEventListener('keydown', (e) => {
        if (gameStarted) {
            if (e.key === 'A' || e.key === 'ArrowLeft') {
                movePanda('left');
            } else if (e.key === 'D' || e.key === 'ArrowRight') {
                movePanda('right');
            } else if (e.key === 'W' || e.key === 'ArrowUp') {
                jumpPanda();
            }
        }
    });
}

function movePanda(direction) {
    if (direction === 'left') {
        pandaPosition.x -= 20;
    } else if (direction === 'right') {
        pandaPosition.x += 20;
    }
    panda.style.left = `${pandaPosition.x}px`;
}

function jumpPanda() {
    // Logic for jump and checking if panda landed on a platform or fell down
}
