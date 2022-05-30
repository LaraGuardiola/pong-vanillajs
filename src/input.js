export default class inputHandler {
    //keyCode appears as deprecated but it's still working
    constructor(paddle){
        //when player presses key
        document.addEventListener('keydown', event =>{
            switch(event.code){
                case 'KeyW':
                    paddle.moveUp()
                    break
                case 'KeyS':
                    paddle.moveDown()
                    break
            }
        })

        //listens when player releases key and if paddle keeps moving, it stops
        document.addEventListener('keyup', event =>{
            switch(event.code){
                case 'KeyW':
                    if(paddle.speed < 0) paddle.stop()
                        
                    break
                case 'KeyS':
                    if(paddle.speed > 0) paddle.stop()
                    break
            }
        })
    }
}