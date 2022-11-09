const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20; //height of top obstacle, random number between 0 and canvbas.height/3
        this.bottom = (Math.random() * canvas.height / 3) + 20; //height of bottom obstacle
        this.x = canvas.width; //spawns obstacles just offscreen to the right
        this.width = 20; // width of the obstacles
        this.color = 'hsla(' + hue + ',100%, 50%, 1)'; //color of the obstacles, rainbow
        this.counted = false; //changes to true for each obstacle once the player has passed it
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top); // draws the top obstacles
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom); // draws the bottom obstacles   
    }
    update(){
        this.x -= gamespeed; //moves the obstacles to the left, dependent on gamespeed
        if (!this.counted && this.x < bird.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){
    if(frame%frequency ===0){ 
        obstaclesArray.unshift(new Obstacle); // adds new obstacle to the obstacle array

    };//if statement for every 50 frames
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }; //updates all obstacles
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    } //removes the oldest obstacle every time there is more than 20 created
};