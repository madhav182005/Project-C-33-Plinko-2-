const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;
var score = 0; 
var count = 0; 
var gameState = "start"; 

function setup() {
    createCanvas(480, 800);

    engine = Engine.create();
    world = engine.world;

    border1 = new Ground(240, 745, 480, 15);
    border2 = new Ground(3, 375, 15, 750);
    border3 = new Ground(475, 375, 15, 750);

    for (var i = 0; i <= 480; i = i + 80) {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }
    for (var k = 40; k <= 470; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= 460; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= 480; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= 400; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }
}

function draw() {
    background(0);
    textSize(35); 
    text("Score : "+score, 20, 40); 
    fill("white"); 

    textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

    Engine.update(engine);
    border1.display();
    border2.display();
    border3.display();


    if ( gameState =="end") {
    
        textSize(100);
        text("GameOver", 150, 250);
        //return
      }

    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var m = 0; m < divisions.length; m++) {
        divisions[m].display();
    }
    
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
}
