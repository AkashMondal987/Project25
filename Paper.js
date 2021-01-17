class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.1,
          friction:1,
          density:0.4
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x, this.y, (this.r=60)/2, options);
      World.add(world, this.body);
    }
    display(){
      var paperpos = this.body.position;

      push();
      translate(paperpos.x, paperpos.y);
      rectMode(CENTER);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image, 10, 10, this.r, this.r);
      pop();
    }
  };