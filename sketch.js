
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var dustbin
var ground
var wastePaper
function preload()
{
  dimage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

  dustbin = new Dustbin(700,650,100,10);
  wastePaper = new WastePaper(30,280,10,10);

	//Create the Bodies Here.
  slingshot = new Slingshot(wastePaper.body,{x:600, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  image(dimage,600,600,100,70);
  ground.display();
  
  wastePaper.display();
  slingshot.display();
} 

function mouseDragged(){
  Matter.Body.setPosition(wastePaper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}