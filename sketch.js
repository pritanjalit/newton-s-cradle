
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 
var world,engine;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
var bobPositionX,bobPositionY;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    bobDiameter=40;
	bobPositionX=width/2;
	bobPositionY=height/4+500;
	bob1=new Bob(bobPositionX-bobDiameter*2,bobPositionY,bobDiameter);
	bob2=new Bob(bobPositionX-bobDiameter,bobPositionY,bobDiameter);
	bob3=new Bob(bobPositionX,bobPositionY,bobDiameter);
	bob4=new Bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter);
	bob5=new Bob(bobPositionX+bobDiameter*2,bobPositionY,bobDiameter);
	roof= new Roof(300,100,150,10);
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter,0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);



  
}


function draw() {
 Engine.update(engine);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob.fly();
}

