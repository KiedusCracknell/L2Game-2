const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false; //true if space is pressed
let angle = 0; //used to calculate angle of player for use in movement
let hue = 0; //colours
let frame = 0; //keeps track of frame count in animation, mainly used to set interval in which obstacles appear
let score = 0; //Will increae as player  avoids obstacles
let gamespeed = 3; //speed at which the obstacles, background etc. move at, can be changed by difficulty settings. also allows for paralax effects to be made easily
let frequency = 0;//frequency of obstacles

let name = prompt('whats your name?'); // players name
let dead = false; //true if dead

const background = new Image();
background.src = 'sprites/bg.jpg';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0, 
    width: canvas.width ,
    height: canvas.height
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50);
    handleBackground();
    handleObstacles();
    bird.update();
    bird.draw();
    scoreCounter();
    handleParticles();
    handleCollisions();
    if (dead) return;
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
                (bird.y + bird.height > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) { //collision detection
                        ctx.drawImage(bang, bird.x, bird.y, 50, 50)
                        ctx.font = '25px Georgia';
                        ctx.fillStyle = 'white';
                        ctx.fillText('Game Over ' + name + ', your score is ' + score, 160, canvas.height/2 - 10);
                        document.getElementById('restartButton').style.display = 'block';
                        console.log('hi')
                        dead = true;
                    }
    }
}

function handleBackground(){
    if(BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else BG.x2 -= gamespeed;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height); 
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height); 
}

function scoreCounter(){
    const gradient = ctx.createLinearGradient(0, 0, 0, 70);
    gradient.addColorStop('0.4', '#fff')
    gradient.addColorStop('0.5', '#000')
    gradient.addColorStop('0.55', '#4040ff')
    gradient.addColorStop('0.6', '#000')
    gradient.addColorStop('0.9', '#fff')

    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
}

function easy(){
    gamespeed = 3;
    frequency = 60;
}
function hard(){
    gamespeed = 6;
    frequency = 25;
}
function restart(){
    if(dead == true){
    gamespeed = 3;
    frequency = 0;
    obstaclesArray.length = 0;
    score = 0;
    document.getElementById('restartButton').style.display = 'none';
    dead = false;
    animate()
    }
}