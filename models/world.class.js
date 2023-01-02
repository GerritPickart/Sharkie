class World {
  character = new Character();
  enemies = [new Pufferfish(), new Pufferfish(), new Pufferfish()];
  backgroundObjects = [
    
    
    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", -720*2),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", -720*2),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", -720*2),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", -720*2),

    new BackgroundObject("img/3. Background/Layers/5. Water/L2.png", -720),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", -720),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", -720),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", -720),
    
    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 0),
  
    new BackgroundObject("img/3. Background/Layers/5. Water/L2.png", 720),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", 720),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L2.png", 720),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 720),

    new BackgroundObject("img/3. Background/Layers/5. Water/L1.png", 720*2),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 720*2),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/L1.png", 720*2),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 720*2),
  ];

  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  // hier wird der character gezeichnet

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // hier wird das cancas mit clearRect gesäubert damit der Character nicht an mehreren Stellen erscheint

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);

    let self = this; //weil man hier eine funktion aufruft kennt dise this nicht, weswegen man diese mit self definieren muss
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
