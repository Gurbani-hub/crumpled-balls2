
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies

var engine, world;


function setup() {
	createCanvas(1200,800);
	engine = Engine.create();
    world = engine.world;
    ground= Bodies.rectangle(600,580,1200,20)
	World.add(world,ground)
	
	paper= new Paper(135,540,30)

	Rbox1= new Rbox(600,450,180,20)
	Rbox2= new Rbox(513,500,20,200)
	Rbox3= new Rbox(713,500,20,200)


	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  paper.display()
  Rbox1.display();
  Rbox2.display();
  Rbox3.display();


  ground.isStatic=true;
  Rbox1.isStatic=true;
  Rbox2.isStatic=true;
  Rbox3.isStatic=true;

    text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)

    rectMode(CENTER) 
    rect(ground.position.x,ground.position.y,1200,20)

    
  
  drawSprites();
 
}

function keyPressed() {
if(keyCode===(UP_ARROW))  {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}
}



