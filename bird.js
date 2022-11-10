const dragonSprite = new Image();
dragonSprite.src = 'sprites/dragon.png';
class Bird {
    constructor() {
        this.x = 150; //x position
        this.y = 200; //y position
        this.vy = 0; //y velocity
        this.originalWidth = 475;
        this.originalHeight = 470;
        this.width = this.originalWidth / 10;
        this.height = this.originalHeight / 10;
        this.weight = .5; //force that pulls player down when player isn't 'flapping'
        this.frameX = 0; //used to animate the sprite
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 2) + curve) {
            this.y = canvas.height - (this.height * 2) + curve;
            this.vy = 0;
        } else { //stops the player from falling through the bottom of the canvas 
            this.vy += this.weight; //increases y velocity by weight at every frame
            this.vy * 0.9; //slow down velocity
            this.y += this.vy; //increases y position by y velocity at every frame
        }
        if (this.y < 0 + this.height/2) {
            this.y = 0 + this.height/2;
            this.vy = 0;
        } //stops player from flying through the top of the canvas
         if (spacePressed && this.y > this.height) this.flap();
    } //calculate position and velocity of player character at every 
    draw() {
        ctx.fillStyle = 'hsla(' + hue + ',100%, 50%, 1'; //red player
        //ctx.fillRect(this.x, this.y, this.width, this.height); // rectangle with x position, y position, width and height
        ctx.drawImage(dragonSprite, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x-this.width/3, this.y-this.height/3, bird.width*1.5, bird.height*1.5);
    }
    flap() {
        this.vy -= 1;
        if(this.frameX >= 10) this.frameX = 0;
        else this.frameX++;
    } //will push player upwards when called
}
const bird = new Bird();