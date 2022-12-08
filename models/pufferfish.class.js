class Pufferfish extends MoveableObject {
  
  height = 100;
  width = 100;
  
  constructor() {
    super().loadImage(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png"
    );

    this.x = 300 + Math.random() * 350; // Zahl zwischen 300 und 650
    this.y = 50 + Math.random() * 380;

  }
}
