class Bird {
    constructor(){
        this.x = 150;//x position
        this.y = 200;//y position
        this.vy = 0;//y velocity
        this.width = 20;
        this.height = 20;
        this.weight = 1;//force that pulls player down when player isn't 'flapping'
    }
    update(){
      this.vy += this.weight;//increases y velocity by weight at every frame
      this.y += this.vy;//increases y position by y velocity at every frame
    }//calculate position and velocity of player character at every frame
}