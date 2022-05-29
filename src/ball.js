export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.radius = 10
        this.position = {
            x: game.gameWidth / 2,
            y: game.gameHeight / 2 
        }
        this.speed = {
            x: 4,
            y: 4
        }
    }

    draw(ctx){
        ctx.fillStyle = 'lightgrey'
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill()
        ctx.strokeStyle = 'grey'
        ctx.stroke();
    }

    update(deltaTime){
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if(this.position.x + this.radius > this.gameWidth || this.position.x - this.radius < 0){
            this.speed.x = -this.speed.x
        }
        if(this.position.y + this.radius > this.gameHeight || this.position.y - this.radius < 0){
            this.speed.y = -this.speed.y
        }
    }
}