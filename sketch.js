
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, roof, chain;
var bob2, bob3, bob4, bob5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

    var radius = 80;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(400, 350, radius);
	bob2 = new Bob(320, 350, radius);
	bob3 = new Bob(480, 350, radius);
	bob4 = new Bob(240, 350, radius);
	bob5 = new Bob(560, 350, radius);
	roof = new Roof(400, 100, 500, 50);

	rope1 = new Rope(bob1.body, roof.body, 0, 0);
	rope2 = new Rope(bob2.body, roof.body, -80, 0);
	rope3 = new Rope(bob3.body, roof.body, 80, 0);
	rope4 = new Rope(bob4.body, roof.body, -160, 0);
	rope5 = new Rope(bob5.body, roof.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();

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
  
  keyPressed();

}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob4.body, bob4.body.position,{x:-200, y:200});
	}
	if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:200, y:-200});
	}
}