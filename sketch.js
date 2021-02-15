const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops = []
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(400,400)

   engine = Engine.create();
   world = engine.world;

   
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),8,8));
     }
    
    
}

function draw(){
  Engine.update(engine);
    background("black");

    umbrella = new Box(200, 20, 20,20)


    

        
for(var i=0; i<drops.length;i++){
  drops[i].display()
  drops[i].update()

}

umbrella.display()

    

    
}   

