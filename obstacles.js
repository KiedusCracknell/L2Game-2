const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 20; //height of top obstacle, random number between 0 and canvbas.height/3
        this.bottom = (Math.random() * canvas.height/3) + 20; //height of bottom obstacle
        this.x = canvas.width; //spawns obstacles just offscreen to the right
        this.width = 20; // width of the obstacles
        this.color = 'hsl(' + hue + '100%, 50%';
    }
}