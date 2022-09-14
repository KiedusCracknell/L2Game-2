const particlesArray = [];

class Particle {
    constructor() {
        this.x = bird.x; //forces the particles to originate from the bird
        this.y = bird.y; //forces the particles to originate from the bird
        this.size = Math.random() * (10 - 3) + 10; // particles size is random number between 3 and 10
        this.speedY = (Math.random() * 1) - 0.5; // particles vertical speed is random number between 1 and 0.5
        this.color = 'red';// particles color
    }
}