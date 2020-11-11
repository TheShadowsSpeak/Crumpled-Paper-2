var paper;
var Dustbin;
var Ground;
var sun;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Ground=new ground(400,660,1000,15);
	paper=new Paper(50,650,45);
    Dustbin=new dustbin(600,650,120,150)
    sun=new Sun(60,150,100);
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("#87CEEA");
  Ground.display();
  paper.display();
  Dustbin.display();
  sun.display();
 
  if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5})
  }
  if(keyCode===DOWN_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:5})
  }
  drawSprites();
 
}



