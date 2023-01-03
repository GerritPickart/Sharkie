class Character extends MoveableObject {

    height = 250;
    width = 250;
    x = 0;
    speed = 5;
    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',

    ];

    world;
    swimming_audio = new Audio('audio/bubbling-water.wav');

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();

    }


    animate() {

        setInterval(() => {
            this.swimming_audio.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_audio.play();
            };

            if (this.world.keyboard.LEFT && this.x > -720) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_audio.play();
            }

            this.world.camera_x = -this.x + 50;

        }, 1000 / 60);



        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                this.playAnimation(this.IMAGES_SWIMMING);
             
            }
        }, 50);
    }

    jump() {

    }
}