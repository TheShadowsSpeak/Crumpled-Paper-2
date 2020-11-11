class Sun{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.radius=r;
        this.body= Bodies.circle(x,y,r*2,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("#F7F637");
        ellipse(0,0,this.radius,this.radius);
    }
}