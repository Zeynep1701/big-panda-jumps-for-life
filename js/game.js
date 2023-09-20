class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.timeElement = document.getElementById('time')
    this.height = 600
    this.width = 500
    this.player = new Player(this.gameScreen, 230, 550, 60, 40)
    this.player.directionY = 0
    this.platforms = []
    this.apples = []
    this.animateId = 0
    this.lives = 3
    this.gameOver = false
    this.timer = 20;
    this.intervalId = null
    this.gravity = 0.5;
  }

  start() {
    this.startScreen.style.display = 'none'
    this.gameEndScreen.style.display = 'none'
    this.gameScreen.style.display = 'block'

    this.gameScreen.style.height = `${this.height}px`
    this.gameScreen.style.width = `${this.width}px`
    this.intervalId = setInterval(()=>{
      this.timer -=1
      this.timeElement.innerText = this.timer;
      if (this.timer === 0) {
        clearInterval(this.intervalId);
    }}, 1000)
    this.gameLoop()
  }

  gameLoop() {
    this.update()
    this.player.updatePosition();

    document.getElementById('lives').innerText = this.lives

    if (this.lives < 1 || this.timer === 0) {
      this.gameOver = true
    }

    if (this.gameOver) {
      this.gameScreen.style.display = 'none'
      this.gameEndScreen.style.display = 'block'
    } else {
      this.player.move();
      this.animateId = requestAnimationFrame(() => this.gameLoop())
    }
  }

  update() {
    this.player.move()
    //console.log(this.platforms)
    if (this.animateId % 200 === 0) {
      this.platforms.push(
        new Platform(
          this.gameScreen,
          Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
          -200,
          60,
          100
        )
      )
    }
    this.platforms.forEach(obstaclePlatform => {
      obstaclePlatform.move()
      if (this.player.didCollide(obstaclePlatform)) {
        this.lives -= 1
        obstaclePlatform.element.remove()
      } else if (obstaclePlatform.top > this.gameScreen.clientHeight) {
        this.score += 1
        obstaclePlatform.element.remove()
      }
      })
      this.player.move()
   // console.log(this.apples)
    if (this.animateId % 200 === 0) {
      this.apples.push(
        new Apple(
          this.gameScreen,
          Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
          -200,
          100,
          150
        )
      )
    }
    this.apples.forEach(obstacleApple => {
      obstacleApple.move()
      if (this.player.didCollide(obstacleApple)) {
        this.timer += 5
        this.timeElement.innerText = this.timer;
        obstacleApple.element.remove()
      }
})
}}
      
