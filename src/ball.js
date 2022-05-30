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
            x: 4,
            y: 4
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
        let p1 = document.querySelector('#player1')
        let p2 = document.querySelector('#player2')

        this.position.x += this.speed.x
        this.position.y += this.speed.y

        //check for collisions on the left side
        if(this.position.x + this.radius > this.gameWidth || this.position.x - this.radius < 0){
            this.speed.x = -this.speed.x
        }

        if(this.position.x + this.radius > this.gameWidth){
            p1.innerHTML = parseInt(p1.innerHTML) + 1
        }else if(this.position.x - this.radius < 0){
            p2.innerHTML = parseInt(p2.innerHTML) + 1
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
        

        if(leftOfBall <= paddleSurface //if touches surface of the paddle
            && this.position.y >= upperSideOfPaddle //
            && this.position.y - this.radius <= lowerSideOfPaddle){
                this.speed.x = -this.speed.x
        }
    }

    stop(){
        this.speed.x = 0
        this.speed.y = 0
    }
}