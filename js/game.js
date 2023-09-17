window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game
  
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
      game.player.element.remove()
      startGame()
    })
  
    document.addEventListener('keydown', event => {
      console.log('down', event)
      if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        game.player.directionX = -1
      } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        game.player.directionX = 1
      }
      if (event.code === 'KeyW') {
        game.player.directionY = -1
      } else if (event.code === 'KeyS') {
        game.player.directionY = 1
      }
    })
  
    document.addEventListener('keyup', event => {
      console.log('up', event)
      if (
        event.code === 'KeyA' ||
        event.code === 'KeyD' ||
        event.code === 'ArrowLeft' ||
        event.code === 'ArrowRight'
      ) {
        game.player.directionX = 0
      }
      if (event.code === 'KeyW' || event.code === 'KeyS') {
        game.player.directionY = 0
      }
    })
  })
const gameContainer = document.getElementById('game-container');
const timerElem = document.getElementById('timer');
let timer = 60;

startButton.addEventListener('click', startGame);

    // Start game loop, checking for game over condition
    setInterval(() => {
        if(timer <= 0) {
            gameOver();
        }
        timer--;
        timerElem.textContent = timer;
    }, 1000);

function gameOver() {
    alert("Game Over!");
    // Play the theme song of "happy tree friends"
    //  <audio> element in HTML and then play that audio here
}
//Timer logic
setInterval(function() {
timeLeft--;
timer.textContent = timeLeft;
if(timeLeft <=0 || pandaFellOffPlatform()) {
    alert("Game Over");
    location.reload();
}
}, 1000);
