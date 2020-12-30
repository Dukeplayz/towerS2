
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b17,b9,b10,b11,b12,b13,b14,b15,b16;

var b17, b18, b19, b20, b21, b22, b23, b24, b25;

var ground;

var stand1, stand2;

var polygon;

var slingshot;




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;


  b1 = new Box(600, 255, 30, 40);
  b2 = new Box(570, 255, 30, 40);
  b3 = new Box(540, 255, 30, 40);
  b4 = new Box(510, 255, 30, 40);
  b5 = new Box(630, 255, 30, 40);
  b6 = new Box(660, 255, 30, 40);
  b7 = new Box(690, 255, 30, 40);
  b9 = new Box(600, 215, 30, 40);
  b10 = new Box(570, 215, 30, 40);
  b11 = new Box(540, 215, 30, 40);
  b12=new Box(510,270);
  //3rd level on 1st ground
  b13=new Box(500,175,30,40);
  b14=new Box(530,175,30,40);
  b15=new Box(560,175,30,40);
  //4th level on 1st ground
  b16=new Box(500,135,30,40);
  //1st level on 2nd ground
  b17=new Box(800,130,30,40);
  b18=new Box(770,130,30,40);
  b19=new Box(740,130,30,40);
  b20=new Box(830,130,30,40);
  b21=new Box(860,130,30,40);
  //2nd level on 2nd ground
  b22=new Box(800,110,30,40);
  b23=new Box(770,110,30,40);
  b24=new Box(830,110,30,40);
  //3rd level on 2nd ground
  b25=new Box(800,90,30,40);

  

  ground = new Ground(600, 380, 1200, 10);

  stand1 = new Ground(600, 280, 210, 10);
  ground3=new Ground(800,150,210,10);

  polygon = new Polygon(200, 270, 23, 23);

  slingshot = new SlingShot(polygon.body, {x:200, y:260});


  
  
}

function draw() {
  background(200);
  Engine.update(engine);  

  console.log(polygon.body.position);


  drawSprites();
  ground.display();
  polygon.display();
  slingshot.display();
  stand1.display();
  ground3.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  

}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
  
  
  }
  
  
  function mouseReleased(){
  slingshot.fly();
  
  }

  function keyPressed(){
    if(keyCode=== 32){
      
      Matter.Body.setPosition(polygon.body,{x:150,y:200});
      slingshot.attach(polygon.body);
    }
  }