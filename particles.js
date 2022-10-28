const particlesArray = [];

class Particle {
    constructor() {
        this.x = bird.x; //forces the particles to originate from the bird
        this.y = bird.y; //forces the particles to originate from the bird
        this.size = Math.random() * (10 - 3) + 3; // particles size is random number between 3 and 10
        this.speedY = (Math.random() * 1) - 0.5; // particles vertical speed is random number between 1 and 0.5
        this.color = 'red';//particles color
    }
    update() {
        this.x -= gamespeed;//moves the particles to the left as the game scrolls
        this.y += this.speedY;//moves the particles up and down slightly and spead due to speedY being random
    }
    draw() {
        ctx.fillStyle = this.color; //choses the color of the particles
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2); //makes the particles a circle
        ctx.fill();
    }
}

function handleParticles(){
    particlesArray.unshift(new Particle); // adds a new particle with the variables set in the class to the beginning of the array
    for (i= 0; i < particlesArray.length; i++) {
        particlesArray[i].update(); //calls update for each particle
        particlesArray[i].draw(); //draws each particle
    }
    //if length is more than 200, remove 20
    if (particlesArray.length > 200) {
       for (let i = 0; 1 < 20; i++) {
        particlesArray.pop(particlesArray[i]);
       }
    }
}