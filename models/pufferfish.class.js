class Pufferfish extends MoveableObject {

  height = 100;
  width = 100;

  IMAGES_SWIMMING = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png"
  ];


  constructor() {
    super().loadImage(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png"
    );

    this.loadImages(this.IMAGES_SWIMMING);

    this.x = 300 + Math.random() * 350; // Zahl zwischen 300 und 650
    this.y = 50 + Math.random() * 380;
    
    this.speed = 0.15 + Math.random() * 0.5; // alle Fische haben damit eine unterschiedliche Geschwindigkeit

    this.animate();

  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    

    setInterval(() => {
     this.playAnimation(this.IMAGES_SWIMMING);
    }, 200);
  }




}
