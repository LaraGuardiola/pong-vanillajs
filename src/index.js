import Pong from "./pong.js"
import Paddle from "./paddle.js"

let canvas  = document.querySelector('#screen')
let ctx = canvas.getContext('2d')
console.log('reads')

const GAME_WIDTH = 1000
const GAME_HEIGHT = 600

let pong = new Pong(GAME_WIDTH, GAME_HEIGHT,10)
pong.start()
//cleans every frame each time
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT,880)

let lastTime = 0

//gameLoop runs every frame
//deltaTime marks the amount of time between each frame

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    pong.update(deltaTime)
    pong.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()