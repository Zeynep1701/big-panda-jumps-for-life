class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.winScreen = document.getElementById('game-over-win')
    this.loseScreen = document.getElementById('game-over-lose')
    this.timeElement = document.getElementById('time')
    this.height = 600
    this.width = 500
    this.player = new Player(this.gameScreen, 230, 550, 60, 40)
    this.player.directionY = 0
    this.platforms = []
    this.platformSpeed = 1; 
    this.speedIncrement = 0.01;
    this.apples = []
    this.animateId = 0
    this.lives = 3
    this.gameOver = false
    this.gameOverWin = false
    this.gameOverLose = false
    this.timer = 20;
    this.intervalId = null
    this.gravity = 0.5;
    this.onGameover = null;
    this.gameOverMusicPlayed = false;
    this.gameMusic = document.getElementById ('game-music');
    this.gameMusicStopped = false;
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
        this.gameOverLose = true
    }


    if (this.gameOverLose) {
    /*  if (!this.gameOverMusicPlayed) {
        const gameOverMusic = document.getElementById('game-over-music');
        gameOverMusic.play();
        this.gameOverMusicPlayed = true;
      }
      if (!this.gameMusicStopped && !this.gameMusic.paused) {
        this.gameMusic.pause();
        this.gameMusicStopped = true;
       }*/
      const gameOverMusic = document.getElementById('game-over-music');
      this.gameMusic.pause();
      console.log(gameOverMusic)
      gameOverMusic.play();
      gameOverMusic.volume = 0.2
      this.gameEndScreen.style.display = 'block'
      this.winScreen.style.display = 'none'
      this.loseScreen.style.display = 'block'
      this.gameScreen.style.display = 'none'}
      
       

      else if(this.timer === 25) {
        this.gameOverWin = true
        const gameOverMusic = document.getElementById('game-over-music');
        this.gameMusic.pause();
        console.log(gameOverMusic)
        gameOverMusic.play();
        gameOverMusic.volume = 0.2
        this.gameEndScreen.style.display = 'block'
        this.winScreen.style.display = 'block'
        this.loseScreen.style.display = 'none'
        this.gameScreen.style.display = 'none'}
       

     else {
      this.player.move();
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }
  

  gameover() {
    this.gameOver = true
    this.gameScreen.style.display = 'none'
    this.gameEndScreen.style.display = 'block'
    if (this.onGameover) {
      this.onGameover();
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
          40,
          60
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
}
}   
