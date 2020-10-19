const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1; 
var log1; 
function setup(){
    var canvas = createCanvas(90800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,60,60);
    box2 = new Box(600,100,60,60);
    ground = new Ground(400,height,800,20) 
    pig1 = new Pig(550,100); 
    log1 = new Log(500,200,200,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display(); 
    pig1.display();  
    log1.display();
}