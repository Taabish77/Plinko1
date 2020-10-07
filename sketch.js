const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos=[];
var particles=[];
var divisions=[];
var divisonHeight=300;

ground = new Ground(600,height,1200,20);



function setup() {
  createCanvas(480,800);
}




function draw() {
  background("black");  
  drawSprites();
  for (j=0;j< particles.length; j++) {
 
    particles[j].display();
  }
  for  (k=0;k  < divisions.length; k++) {
divisions[k].display();
  }
}
function MouseReleased(){
if(frameCount%60==0){
particles.push(new Particle(random(width/2-10,width/2+10)) ,10,10)
}
}