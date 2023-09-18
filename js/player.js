let panda;
let pandaPosition = { x: 400, y: 550 };

function initializePanda() {
    panda = document.querySelector('.panda');
    panda.style.left = `${pandaPosition.x}px`;
    panda.style.bottom = `${pandaPosition.y}px`;

   
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
