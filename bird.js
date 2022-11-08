class Bird {
    constructor() {
        this.x = 150; //x position
        this.y = 200; //y position
        this.vy = 0; //y velocity
        this.width = 20;
        this.height = 20;
        this.weight = .5; //force that pulls player down when player isn't 'flapping'
    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else { //stops the player from falling through the bottom of the canvas 
            this.vy += this.weight; //increases y velocity by weight at every frame
            this.vy * 0.9; //slow down velocity
            this.y += this.vy; //increases y position by y velocity at every frame
        }
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        } //stops player from flying through the top of the canvas
        if (spacePressed && this.y > this.height * 3) this.flap();
    } //calculate position and velocity of player character at every 
    draw() {
        ctx.fillStyle = 'hsla(' + hue + ',100%, 50%, 1'; //red player
        ctx.fillRect(this.x, this.y, this.width, this.height); // rectangle with x position, y position, width and height
    }
    flap() {
        this.vy -= 1;
    } //will push player upwards when called
}
const bird = new Bird();