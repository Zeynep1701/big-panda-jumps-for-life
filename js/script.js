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
      location.reload()
    })
  
    document.addEventListener('keydown', event => {
      console.log('down', event)
      if (event.code === 'KeyA') {
        game.player.directionX = -2
      } else if (event.code === 'KeyD') {
        game.player.directionX = 2
      }
      if (event.code === 'KeyW') {
        game.player.directionY = -2
      } else if (event.code === 'KeyS') {
        game.player.directionY = 2
      }
      if (event.code === 'Space') {
        game.player.jumping = true;
      }
    })

    document.addEventListener('keyup', event => {
      console.log('up', event)
      if (
        event.code === 'KeyA' ||
        event.code === 'KeyD'
      ) {
        game.player.directionX = 0
      }
      if (event.code === 'KeyW' || event.code === 'KeyS') {
        game.player.directionY = 0
      }
      if (event.code === 'Space') {
        game.player.jumping = false; 
      }
    })
})