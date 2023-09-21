class Player {
    constructor(gameScreen, left, top, height, width) {
      this.gameScreen = gameScreen
      this.left = left
      this.top = top
      this.height = height
      this.width = width
      this.directionX = 0
      this.directionY = 0
      this.yVelocity = 0;
      this.jumping = false;
      this.jumpHeight = -6;
      this.gravity = 0.5;
      this.element = document.createElement('img')
  
      this.element.src = './images/panda__1_.png'
  
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
      this.element.style.height = `${this.height}px`
      this.element.style.width = `${this.width}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
     // this.applyGravity();
      this.updatePosition()
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
    }

    jump() {
      if (!this.jumping) {
        this.directionY = this.jumpHeight;
        this.jumping = true;
      }
    }

      applyGravity() {
      this.yVelocity += this.gravity;
      this.top += this.yVelocity;
    }
  
  
    updatePosition() {
      if (this.left < 50) {
        this.left = 50
      } else if (this.left > this.gameScreen.clientWidth - 50 - this.width) {
        this.left = this.gameScreen.clientWidth - 50 - this.width
      } else {
        this.left += this.directionX
      }
      if(this.jumping) {
        this.top -= 2
      } else if (this.jumping === false && this.top <= 550) {
        this.top += 2
      }
      
      
    


      /*if (this.top < this.gameScreen.clientHeight - 20 - this.height && !this.jumping) {
      this.directionY += this.gravity;
      } else {
        this.jumping = false;
      }
      this.yVelocity += this.gravity;
      this.top += this.yVelocity;

    
  
      if (this.top >= this.gameScreen.clientHeight - 20 - this.height) {
        this.top = this.gameScreen.clientHeight - 20 - this.height;
        this.jumping = false;
      } else if (this.top > this.gameScreen.clientHeight - 20 - this.height) {
        this.top = this.gameScreen.clientHeight - 20 - this.height
      } else {
       // console.log(this.directionY)
        this.top += this.directionY
      }
      */
    }
  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect()
      const obstacleRect = obstacle.element.getBoundingClientRect()
  
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true
      } else {
        return false
      }
    }
}