const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var birdie,box1,piggie,log1,log2,box3,box4,piggie2,box5,log3,log4,bird2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    //piggie = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2)
    bird2=new Bird(500,200)
    box3 =new Box(700,240,70,70)
    box4 =new Box(920,240,70,70)
    piggie2 = new Bird(1150,200);
    log2=new Log(810,180,300,PI/2)

    box5=new Pig(810,160,70,70)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(870,120,150,-PI/7)
     piggie=new Box(500,320,50,200);00
    birdie = new Box(1150,320,50,200);

    ground = new Ground(600,400,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    log1.display();
    box1.display();
    box2.display();
  piggie.display();

   log2.display();
   box3.display();
   box4.display();
 piggie2.display();
   
    bird2.display();

   log3.display();
   log4.display();
   box5.display();

    birdie.display();

   ground.display();
}