import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js'

export default class Pong {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }

    start(){
        this.ball = new Ball(this)
        this.paddle = new Paddle(this)
        this.gameObjects = [this.paddle, this.ball]
        
        new InputHandler(this.paddle)
    }

    update(deltaTime){
        this.gameObjects.forEach(obj => obj.update(deltaTime))
    }

    draw(ctx){
        this.gameObjects.forEach(obj => obj.draw(ctx))
    }
}