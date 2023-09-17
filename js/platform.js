let platforms = [];

function createPlatforms() {
    let platform = document.createElement("div");
    platform.classList.add("platform");
}

// Random position for the platform
let left = Math.random()*(window.innerWidth - 100);
platform.style.left = left + "px";

//Move platform downwards

let platformInterval = setInterval(() => {
    platform.style.top = (platform.offsetTop + 10) + "px";
})

//Randomly decide if platform should have an apple
if(Math.random() > 0.7) {
    let apple = document.createElement("div");
    apple.classList.add("apple");
    apple.style.backgroundImage= "url(./images.apple.png)"
    platform.appendChild(apple);
}

//Remove platform if it's out of view
if(platform.offsetTop>window.innerHeight) {
    platform.removeChild(platform);
    clearInterval(platformInterval);
}

//Create platforms every few seconds
setInterval(createPlatform, 3000);