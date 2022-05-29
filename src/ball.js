export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.game = game
        this.radius = 10
        this.position = {
            x: game.gameWidth / 2,
            y: game.gameHeight / 2 
        }
        this.speed = {
            x: 3,
            y: 3
        }
    }

    //draw ball
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

        //check for collisions on the left side
        if(this.position.x + this.radius > this.gameWidth || this.position.x - this.radius < 0){
            this.speed.x = -this.speed.x
        }

        //check for collisions on the right side
        if(this.position.y + this.radius > this.gameHeight || this.position.y - this.radius < 0){
            this.speed.y = -this.speed.y
        }

        //check for collisions on the paddle
        let leftOfBall = this.position.x - this.radius
        let paddleSurface = this.game.paddle.position.x + this.game.paddle.width
        let upperSideOfPaddle = this.game.paddle.position.y
        let lowerSideOfPaddle = this.game.paddle.position.y + this.game.paddle.height

        if(leftOfBall <= paddleSurface
            && this.position.y >= upperSideOfPaddle
            && this.position.y - this.radius <= lowerSideOfPaddle){
            this.speed.x = -this.speed.x
        }
        

    }
}