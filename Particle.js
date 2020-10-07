class Particle{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.4
        }
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.body = Bodies.circle(this.x, this.y, this.radius, options);
       World.add(world, this.body);
      }
      display(){
       push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(0,0,this.radius,this.radius)
      pop();
      }

}