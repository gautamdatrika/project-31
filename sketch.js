var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,690,800,20);

  
  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  

  
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  
  
 for (var j=50; j<width-10; j=j+50) {
   plinkos.push(new Plinko(j,375));
 }

  
  
    
}
 


function draw() {
  rectMode(CENTER);
  background(0);

  



  for (var n = 0; n<divisions.length; n++) {
    divisions[n].display();
  }

  if(frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10)) ;
  }
   for(var h = 0; h<particles.length; h++) {
     particles[h].display();
   }
   for (var j = 0; j<plinkos.length; j++) {
     plinkos[j].display();
   }

  ground.display();
  



}

  
