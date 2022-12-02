class World {
  character = new Character();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  // hier wird der character gezeichnet

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);   // hier wird das cancas mit clearRect gesäubert damit der Character nicht an mehreren Stellen erscheint
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.height,
      this.character.width
    );


    // hier werden die pufferfishe gemalt
    this.enemies.forEach((pufferfish) => {
      this.ctx.drawImage(
        pufferfish.img,
        pufferfish.x,
        pufferfish.y,
        pufferfish.height,
        pufferfish.width
      );
    });

    // draw() wird immer wieder aufgerufen
    
    let self = this;   //weil man hier eine funktion aufruft kennt dise this nicht, weswegen man diese mit self definieren muss
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
