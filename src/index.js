import Paddle from './paddle.js';
import InputHandler from './input.js';

let canvas  = document.querySelector('#screen')
let ctx = canvas.getContext('2d')
console.log('reads')

const GAME_WIDTH = 1000
const GAME_HEIGHT = 600

//cleans every frame each time
ctx.clearRect(0, 0, 800, 600)


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
new InputHandler(paddle)


paddle.draw(ctx)

let lastTime = 0

//gameLoop runs every frame
//deltaTime marks the amount of time between each frame

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    paddle.update(deltaTime)
    paddle.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()