
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var mango1, mango2, mango3, mango4, mango5, mango6;
var stone;
var tree;
var child;
var ground;
var line1;

function preload()
{
	child = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;

	ground= new Ground(600,680,1200,20)

	mango1 = new Mango(488,368,60,60);
	mango2 = new Mango(693,237,60,60);
	mango3 = new Mango(608,377,60,60);
	mango4 = new Mango(749,304,60,60);
	mango5 = new Mango(817,217,60,60);
	mango6 = new Mango(1043,331,60,60);
    mango7 = new Mango(892,349,60,60);
	mango8 = new Mango(917,235,60,60);
	mango9 = new Mango(1002,245,60,60);
    mango10 = new Mango(1009,316,60,60);
	
	stone = new Stone(76,520,40,40);
	tree = new Tree(800,420,1050,580);
	line1 = new constraint(stone.body ,{x:83 , y:522})

	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	//   options:{
	// 	  width:1300,
	// 	  height:600,
	// 	wireframes: false,
	// 	  }
	// })

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(child,50,450,200,300)

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  line1.display();


  // call the collision function
   detectollision(stone,mango1)
   detectollision(stone,mango2)
   detectollision(stone,mango3)
   detectollision(stone,mango4)
   detectollision(stone,mango5)
   detectollision(stone,mango6)
   detectollision(stone,mango8)
   detectollision(stone,mango9)
   
  fill("red")
  textSize(20);
  text(mouseX+ "," +mouseY,mouseX,mouseY);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body , {x: mouseX , y:mouseY})
}

function mouseReleased(){
	line1.fly();
}

function keyPressed(){
	if(keyCode=== 32){
    Matter.Body.setPosition(stone.body,{x:83, y:522})
	line1.attach(stone.body)
	}
}

function detectollision(object1,object2){
mangobodyposition=object2.body.position;
stonebodyposition= object1.body.position;


var collisionFormula= dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)

//console.log(collisionFormula)
console.log(object2.r+object1.r)
if(collisionFormula<=object2.r+ object1.r){
    Body.setStatic(object2.body,false)
	
 }
  
}
