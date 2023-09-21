# big-panda-jumps-for-life

## [Play the Game!](https://zeynep1701.github.io/big-panda-jumps-for-life/)

# Description

Big Panda Jumps For Life is a game where the panda should collect apples and avoid the burgers. It should also not run out of time. With each apple, the panda gains 5 more seconds. So when the time reaches 25 seconds, the panda wins. If the panda runs out of time or eats too many burgers, it looses.

Kraken Brigade is a game where players try to defend a fort from the impending attack of sea creatures. The game ends when enough tentacles are stacked in front of the fort wall at the bottom of the screen. After the game ends, a score is calculated based on the amount of tentacles destroyed and the amount of time the game lasted.

# Main Functionalities

- By clicking A, D and the spacebar, you can move the panda.
- Apples and burgers will appear slowly from above.
- By clicking the spacebar, the panda jumps.
- The game ends when the panda eats too many burgers or when it runs out of time.
- The game also ends when the panda eats so many apples that the time reaches 25 seconds.

# Backlog 

- Adding a game-win screen and a game-lose screen.
- Adding two sounds: one for the game itself and one as a game over sound.


# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- Local Storage
- JS Audio() and JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

## script.js

window.addEventListener()
- startGame() 
- game.start()
- gameMusic.play()
- gameMusic.volume = 0.2
- game.onGameover() 
- gameMusic.pause()
- gameMusic.play()
- startButton.addEventListener() 
- startGame()
- restartButton.addEventListener() 
- location.reload()
- document.addEventListener(keydown)
- document.addEventListener(keyup)

## Game.js

- class Game()
  
    - this.startScreen
    - this.gameScreen 
    - this.gameEndScreen 
    - this.winScreen 
    - this.loseScreen
    - this.timeElement 
    - this.height 
    - this.width 
    - this.player
    - this.player.directionY 
    - this.platforms 
    - this.platformSpeed 
    - this.speedIncrement 
    - this.apples
    - this.animateId
    - this.lives 
    - this.gameOver 
    - this.gameOverWin 
    - this.gameOverLose 
    - this.timer 
    - this.intervalId 
    - this.gravity 
    - this.onGameover 
    - this.gameOverMusicPlayed 
    - this.gameMusic 
    - this.gameMusicStopped 
  

- start() 
- gameLoop()
- document.getElementById(lives).innerText
- document.getElementById(game-over-music)
- gameOverMusic.play();
- gameover() 
- update()


## player.js 

- class Player ()
    
    - this.gameScreen
    - this.left 
    - this.top 
    - this.height 
    - this.width 
    - this.directionX 
    - this.directionY 
    - this.yVelocity 
    - this.jumping 
    - this.jumpHeight 
    - this.gravity 
    - this.element 
  

- move() 
- jump() 
- applyGravity() 
- updatePosition() 
- didCollide()
      

## platform.js

- class Platform()    
    - this.gameScreen
    - this.left
    - this.top 
    - this.height 
    - this.width 
    - this.element 
- move()
  

## apple.js 

- class Apple()
    
    - this.gameScreen 
    - this.left 
    - this.top 
    - this.height 
    - this.width 
    - this.element      
- move()       
- updatePosition() 
     
# Extra Links 
## Deploy
[Link](https://zeynep1701.github.io/big-panda-jumps-for-life/)