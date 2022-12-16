class MoveableObject {
    x = 100;
    y = 120;
    img;
    height = 200;
    width = 200;
    imageCache = {};

    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
       });


    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft() {

    }
}