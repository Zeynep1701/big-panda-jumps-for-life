// Collision detection with panda
if(platform.getBoundingClientRect().bottom > panda.getBoundingClientRect().top &&
platform.getBoundingClientRect().left < panda.getBoundingClientRect().right &&
platform.getBoundingClientRect().right > panda.getBoundingClientRect().left) {
    if(platform.querySelector(".apple")){
      timeLeft +=5;
      platform.removeChild(platform.querySelector(".apple"));  
    }
    clearInterval(platformInterval);
}