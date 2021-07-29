
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 685, 800, 10);
	roof = new Roof(400, 250, 300, 50);
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0);
	bobObject1 = new Bob(380,500,20);
	bobObject2 = new Bob(390,500,20);
	bobObject3 = new Bob(400,500,20);
	bobObject4 = new Bob(410,500,20);
	bobObject5 = new Bob(420,500,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  rope1.display();
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



