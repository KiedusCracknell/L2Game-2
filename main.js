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
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);
    angle += 0.12;
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