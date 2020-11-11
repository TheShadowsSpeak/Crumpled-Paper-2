class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
			restitution:0.3,
			friction:0.5,
            density:1.2,
            frictionAir:0.002,

        }
        
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        //fill("white")
       // ellipse(0,0,this.radius,this.radius);
       fill("white")
        imageMode(CENTER)
        
        image(this.image, 0, 0, this.radius, this.radius);
        pop();

    }
}