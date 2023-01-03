class MoveableObject {
    x = 100;
    y = 120;
    img;
    height = 200;
    width = 200;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }
}