export default class inputHandler {
    //keyCode appears as deprecated but it's still working
    constructor(paddle){
        document.addEventListener('keydown', event =>{
            switch(event.code){
                case 'ArrowUp':
                    paddle.moveUp()
                    break
                case 'ArrowDown':
                    paddle.moveDown()
                    break
            }
        })
    }
}