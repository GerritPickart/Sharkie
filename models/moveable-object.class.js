class MoveableObject {
    x = 100;
    y = 120;
    img;
    height = 200;
    width = 200;

// loadImage('img/test.png')
    loadImage(path){
        this.img = new Image();
        this.img.src = path;

    }

    moveRight(){
        console.log('moving right');
    }

    moveLeft(){
        
    }
}