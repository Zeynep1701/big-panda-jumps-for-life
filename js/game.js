class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.height = 600
    this.width = 500
    this.player = new Player(this.gameScreen, 230, 550, 150, 80)
    this.platform = []
    this.animateId = 0
    this.lives = 3
    this.gameOver = false
  }

  start() {
    this.startScreen.style.display = 'none'
    this.gameEndScreen.style.display = 'none'
    this.gameScreen.style.display = 'block'

    this.gameScreen.style.height = `${this.height}px`
    this.gameScreen.style.width = `${this.width}px`

    this.gameLoop()
  }

  gameLoop() {
    this.update()

    document.getElementById('lives').innerText = this.lives

    if (this.lives < 1) {
      this.gameOver = true
    }

    if (this.gameOver) {
      this.gameScreen.style.display = 'none'
      this.gameEndScreen.style.display = 'block'
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop())
    }
  }

  update() {
    this.player.move()
    console.log(this.platform)
    if (this.animateId % 200 === 0) {
      this.platform.push(
        new Platform(
          this.gameScreen,
          Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
          -200,
          60,
          100
        )
      )
    }
    this.platform.forEach(obstaclePlatform => {
      obstaclePlatform.move()
      if (this.player.didCollide(obstaclePlatform)) {
        this.lives -= 1
        this.platform.element.remove()
      } else if (this.platform.top > this.gameScreen.clientHeight) {
        this.score += 1
        this.platform.element.remove()
      } 
        
      
    })
  }
}