import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

let canvas  = document.querySelector('#screen')
let ctx = canvas.getContext('2d')
console.log('reads')

const GAME_WIDTH = 1000
const GAME_HEIGHT = 600

//cleans every frame each time
ctx.clearRect(0, 0, canvas.width, canvas.height)


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT)
new InputHandler(paddle)

let lastTime = 0

//gameLoop runs every frame
//deltaTime marks the amount of time between each frame
console.log(ctx)
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    paddle.update(deltaTime)
    paddle.draw(ctx)
    ball.update(deltaTime)
    ball.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()