const obstaclesArray = [];

class Obstacle {
    constructor() {
        this.top = (Math.random() * canvas.height / 3) + 20; //height of top obstacle, random number between 0 and canvbas.height/3
        this.bottom = (Math.random() * canvas.height / 3) + 20; //height of bottom obstacle
        this.x = canvas.width; //spawns obstacles just offscreen to the right
        this.width = 20; // width of the obstacles
        this.color = 'hsl(' + hue + '100%, 50%'; //color of the obstacles, rainbow
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top); // draws the top obstacles
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom); // draws the bottom obstacles   
    }
}