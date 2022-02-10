const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var ground;
var right;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(200,390,400,20);
  right = new Ground(390,340,10,100);
  cage = new Ground(290,340,10,100);
  bottom = new Ground(340,380,100,10)
  var ballOptions = {
    restitution:0
  }
  ball = Bodies.circle(25,100,20,ballOptions);
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  right.show();
  bottom.show();
  cage.show();
  ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine);
}
function edgeForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.018,y:-0.1})
  }
}