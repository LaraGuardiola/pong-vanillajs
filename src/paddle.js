export default class Paddle {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.width = 20
        this.height = 100

        this.maxSpeed = 3
        this.speed = 0
        this.position = {
            x: gameWidth - (gameWidth - 10),
            y: (gameHeight / 2) - (this.height / 2)
        }
    }

    draw(ctx){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime){
        if(!deltaTime) return
        this.position.y += this.speed
        if(this.position.y < 0){
            this.position.y = 0
        }
        if(this.position.y + this.height > 600){
            this.position.y = this.gameHeight - this.height
        }
    }

    //px it gains and losses in the Y axis
    moveDown(){
        this.speed = this.maxSpeed
    }

    moveUp(){
        this.speed = -this.maxSpeed
    }

    stop(){
        this.speed = 0
    }
}