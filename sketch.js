const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster, monster001 ,rope,ground;
var bg2, cloudImg, cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, rain1, rain2, rain3, rain5, rain6, rainImg

function preload() {
  bg = loadImage("bg2.jpg");
  bg2 = loadImage("bg3.jpg");
  cloudImg = loadImage("clouds.png")
  rainImg = loadImage("rain.png")
}

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 700, 1200, 20);

  hero = new Hero(100,800,250);
  rope = new Rope(hero.body, { x: 50, y: 100 });
  monster = new Monster(1100,550,300);

  monster001 = createSprite(100,100,100,100)
  monster001.visible = false 

  cloud1 = createSprite(100,20,100,50)
  cloud1.addImage(cloudImg)
  cloud2 = createSprite(600,20,100,50)
  cloud2.addImage(cloudImg)
  cloud3 = createSprite(400,20,100,50)
  cloud3.addImage(cloudImg)
  cloud4 = createSprite(800,20,100,50)
  cloud4.addImage(cloudImg)
  cloud5 = createSprite(1300,20,100,50)
  cloud5.addImage(cloudImg)
  cloud6 = createSprite(1100,20,100,50)
  cloud6.addImage(cloudImg)
  cloud1.visible = false
  cloud2.visible = false
  cloud3.visible = false
  cloud4.visible = false
  cloud5.visible = false
  cloud6.visible = false

  rain1 = createSprite(100-100,20,100,50)
  rain1.addImage(rainImg)
  rain2 = createSprite(600-150,20,100,50)
  rain2.addImage(rainImg)
  rain3 = createSprite(400-100,20,100,50)
  rain3.addImage(rainImg)
  rain4 = createSprite(900-100,20,100,50)
  rain4.addImage(rainImg)
  rain5 = createSprite(1400-150,20,100,50)
  rain5.addImage(rainImg)
  rain6 = createSprite(1200-100,20,100,50)
  rain6.addImage(rainImg)
  rain1.visible = false
  rain2.visible = false
  rain3.visible = false
  rain4.visible = false
  rain5.visible = false
  rain6.visible = false

  box1 = new Box(510, 655.0500002777779, 70, 70);
  box2 = new Box(510, 585.2024482303393, 70, 70);
  box3 = new Box(510, 515.6525144421686, 70, 70);
  box4 = new Box(440, 655.0500002777779, 70, 70);
  box5 = new Box(440, 585.2024482303393, 70, 70);
  box6 = new Box(440, 515.6525144421686, 70, 70);
  box7 = new Box(895, 655.0500002777779, 70, 70);
  box8 = new Box(895, 585.2024482303393, 70, 70);
  box9 = new Box(895, 515.6525144421686, 70, 70);
  box10 = new Box(965, 655.0500002777779, 70, 70);
  box11 = new Box(965, 585.2024482303393, 70, 70);
  box12 = new Box(965, 515.6525144421686, 70, 70);
  box13 = new Box(510, 446.32337591315104, 70, 70);
  box14 = new Box(440, 446.32337591315104, 70, 70);
  box15 = new Box(895, 446.32337591315104, 70, 70);
  box16 = new Box(965, 446.32337591315104, 70, 70);
  box17 = new Box(580, 655.0500002777779, 70, 70);
  box18 = new Box(580, 585.2024482303393, 70, 70);
  box19 = new Box(580, 515.6525144421686, 70, 70);
  box20 = new Box(825, 655.0500002777779, 70, 70);
  box21 = new Box(825, 585.2024482303393, 70, 70);
  box22 = new Box(825, 515.6525144421686, 70, 70);
  box23 = new Box(475, 404.1851696256135, 140, 20);
  box24 = new Box(930, 404.1851696256135, 140, 20);
  box25 = new Box(630, 655.0500002777779, 40, 70);
  box26 = new Box(770, 655.0500002777779, 40, 70);
  box27 = new Box(700,610,175,20)
  box28 = new Box(665,576,85,48)
  box29 = new Box(755,576,85,48)
  box30 = new Box(660,518,85,70)
  box31 = new Box(755,518,85,70)
  box32 = new Box(700,471,315,20)
  sq1 = new Box(420,374,20,40)
  sq2 = new Box(470,374,20,40)
  sq3 = new Box(530,374,20,40)
  sq4 = new Box(580,442,20,40)
  sq5 = new Box(620,442,20,40)
  rect1 = new Box(700,432,110,60)
  rect2 = new Box(700,350,60,60)
  rect3 = new Box(700,300,40,40)
  sq6 = new Box(780,442,20,40)
  sq7 = new Box(820,442,20,40)
  sq8 = new Box(880,374,20,40)
  sq9 = new Box(930,374,20,40)
  sq10 = new Box(980,374,20,40)

}

function draw() {
  background(bg);
  Engine.update(engine);
  if(monster001.y > 2000){
    background(bg2)
  }
  if(monster001.y > 600){

  cloud1.visible = true
  cloud2.visible = true
  cloud3.visible = true
  cloud4.visible = true
  cloud5.visible = true
  cloud6.visible = true
  cloud1.velocityX = 4
  cloud2.velocityX = 4
  cloud3.velocityX = 4
  cloud4.velocityX = 4
  cloud5.velocityX = 4
  cloud6.velocityX = 4

  rain1.visible = true
  rain2.visible = true
  rain3.visible = true
  rain4.visible = true
  rain5.visible = true
  rain6.visible = true
  rain1.velocityY = 4
  rain2.velocityY = 4
  rain3.velocityY = 4
  rain4.velocityY = 4
  rain5.velocityY = 4
  rain6.velocityY = 4

  }
  monster001.x = monster.body.position.x
  monster001.y  = monster.body.position.y - 100

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()
  box29.display()
  box30.display()
  box31.display()
  box32.display()
  rect1.display()
  sq1.display()
  sq2.display()
  sq3.display()
  sq4.display()
  sq5.display()
  sq6.display()
  sq7.display()
  sq8.display()
  sq9.display()
  sq10.display()
  rect2.display()
  rect3.display()

  hero.display();
  rope.display();
  monster.display();

 

  drawSprites()

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x:mouseX, y: mouseY});
}

