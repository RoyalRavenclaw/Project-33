class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "lightgreen";
    this.life2 = "lightgreen";
    this.life3 = "lightgreen";
    this.shield = "skyblue";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("blue");
    textFont("Book Antiqua");
    stroke("black");
    strokeWeight(2);
    text("Player", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320, 50, 70, 30);
    fill(this.shield);
    rect(390, 50, 70, 30);
    pop();
  }

  reduceLife(archerLife) {
    if (archerLife <= 3) {
      this.shield = "grey";
    }

    if (archerLife <= 2) {
      this.life3 = "red";
    }

    if (archerLife <= 1) {
      this.life2 = "red";
    }

    if (archerLife <= 0) {
      this.life1 = "red";
    }
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
