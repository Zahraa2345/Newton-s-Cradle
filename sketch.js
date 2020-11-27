
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var  polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9, ground, roof;
var string1, string2, string3, string4, string5, string6, string7, string8, string9;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,700,800,10);
	roof=new Ground(400,50,650,30)
	polygon1=new Polygon(400,50,25);
	polygon2=new Polygon(350,50,25);
	polygon3=new Polygon(300,50,25);
	polygon4=new Polygon(250,50,25);
	polygon5=new Polygon(200,50,25);
	polygon6=new Polygon(450,50,25);
	polygon7=new Polygon(500,50,25);
	polygon8=new Polygon(550,50,25);
	polygon9=new Polygon(600,50,25);
	string1=new Chain(polygon1.body, {x:400, y:50});
    string2=new Chain(polygon2.body, {x:350, y:50});
    string3=new Chain(polygon3.body, {x:300, y:50});
	string4=new Chain(polygon4.body, {x:250, y:50});
    string5=new Chain(polygon5.body, {x:200, y:50});
	string6=new Chain(polygon6.body, {x:450, y:50});
	string7=new Chain(polygon7.body, {x:500, y:50});
	string8=new Chain(polygon8.body, {x:550, y:50});
	string9=new Chain(polygon9.body, {x:600, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 roof.display(); 
 polygon5.display();
 polygon4.display();
 polygon3.display();
 polygon2.display();
 polygon1.display();
 polygon6.display();
 polygon7.display();
 polygon8.display();
 polygon9.display();
 string5.display();
 string4.display();
 string3.display();
 string2.display();
 string1.display();
 string6.display();
 string7.display();
 string8.display();
 string9.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon5.body, {x: mouseX , y: mouseY});
}

/*function mouseDragged(){
	Matter.Body.setPosition(polygon2.body, {x: mouseX , y: mouseY});
}

function mouseDragged(){
	Matter.Body.setPosition(polygon3.body, {x: mouseX , y: mouseY});
}

function mouseDragged(){
	Matter.Body.setPosition(polygon4.body, {x: mouseX , y: mouseY});
}

function mouseDragged(){
	Matter.Body.setPosition(polygon5.body, {x: mouseX , y: mouseY});
}

function mouseDragged(){
	Matter.Body.setPosition(polygon6.body, {x: mouseX , y: mouseY});
}



/*function mouseReleased(){
	string1.fly();
	string2.fly();
	string3.fly();
  }*/