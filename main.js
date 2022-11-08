const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false; //true if space is pressed
let angle = 0; //used to calculate angle of player for use in movement
let hue = 0; //colours
let frame = 0; //keeps track of frame count in animation, mainly used to set interval in which obstacles appear
let score = 0; //Willavoids obstacles
let gamespeed = 2; //speed at increase when player  which the obstacles, background etc. move at, can be changed by difficulty settings. also allows for paralax effects to be made easily

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50);
    handleObstacles();
    bird.update();
    bird.draw();
    handleParticles();
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle += 0.2;
    hue++;
    frame++
} //clears canvas at end of every frame, recurs by calling itself at end of the function

animate();

window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        spacePressed = true
    }
});

window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') spacePressed = false;
});

const bang = new Image();
bang.src = 'sprites/bang.png';

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) { //collision detection
                        ctx.drawImage(bang, bird.x, bird.y, 50, 50)
                        return true;
                    }
    }
}