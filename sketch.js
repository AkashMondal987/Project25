const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObject, paperObject, dustbinObject;
var rect1, rect2, rect3;
var dustbinIMG;

function preload()
{
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new Ground(width/2, 670, width, 20);
	paperObject = new Paper(400, 450, 70);
	
	rect1 = createSprite(1280, 600, 10, 125);
	rect1.shapeColor = ("white");

	rect2 = createSprite(1230, 660 , 100, 10);
	rect2.shapeColor = ("white");
	
	rect3 = createSprite(1280, 600 , 10, 125);
	rect3.shapeColor = ("white");

	dustbinObject = createSprite(1230, 580, 10, 10);
	dustbinObject.addImage("dustbinObject", dustbinIMG);
	dustbinObject.scale = 0.5;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  rect1.display();
  rect2.display();
  rect3.display();

 
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});
	}
}