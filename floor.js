class Floor{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:1.0,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        fill("cyan");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}