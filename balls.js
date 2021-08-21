class Balls{
    constructor(x,y){
      var options={
          restitution:0.7
             }
      this.body=Bodies.circle(x,y,20,options);
      this.radius=20;
      World.add(world,this.body);
    }
    display(){
    
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
    ellipseMode(CENTER);
    ellipse(0,0,20,20);
    pop();
    }
}