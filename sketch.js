
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var d,t

function preload()
{
  d=loadImage("hi/boy.png")
  t=loadImage("hi/tree.png")
  
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone=new Ball(140,605)
 sling= new Slingshot(stone.body,{x:140, y:605});
 ground = new Ground(600,700,1200,20)
 m1 = new Mango(600,450)
 m2 = new Mango(800,400)
 m3 = new Mango(910,350)
 m4 = new Mango(1030,420)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  imageMode(CENTER);
  image(d,200,655,200,200);
  image(t,800,500,800,500)

  stone.display()
  sling.display()
  ground.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  
  istouch(stone,m1)
  istouch(stone,m2)
  istouch(stone,m3)
  istouch(stone,m4)

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  sling.fly()
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(stone.body);
  }
}

function istouch(object1,object2){
    var distance = dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y)
    if(distance <= 45){
      Matter.Body.setStatic(object2.body,false)
    }
}