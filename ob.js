class Ob{
    constructor(x,y){
      var options={
          isStatic:true
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
    fill(random(5,255),random(0,255),random(5,255));
    ellipseMode(CENTER);
    ellipse(0,0,20,20);
    pop();
    }
}