
const Body= Matter.Body
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var groundSprite,ballSprite

function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world

groundSprite=createSprite(0,380,1000,20);
ball=Bodies.circle(200,200,60,{restitution:1.0});
 
World.add(world,ball);

ground=Bodies.rectangle(0,380,1000,10,{isStatic:true});
World.add(world,ground);

ball1=Bodies.circle(200,10,40,{restitution:1.0});
World.add(world,ball1);

console.log(ball)
}

function draw() {
  background("yellow");  

  Engine.update(engine);
fill("green")
circle(ball.position.x,ball.position.y,20);

groundSprite.x=ground.position.x;
groundSprite.y=ground.position.y

fill("red");
circle(ball1.position.x,ball1.position.y,40);
  drawSprites();
}