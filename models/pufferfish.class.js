class Pufferfish extends MoveableObject {
  constructor() {
    super().loadImage(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png"
    );

    this.x = 300 + Math.random() * 400; // Zahl zwischen 200 und 700
    this.y = Math.random() * 480;

    this.height = 100;
    this.width = 100;
  }
}
