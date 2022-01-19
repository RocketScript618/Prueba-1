var disc1,disc1_design;

var disc2,disc2_design;

var disc3;

var touch1,touch2,touch3;

var program1,pro1,pro1L,pro1R,pro1_img,pro1L_img,pro1R_img, derezz1;
var program2,pro2,pro2L,pro2R,pro2_img,pro2L_img,pro2R_img, derezz2;

var back,back_img;

var center1,center1_img,center1_press,center2_press,center2,center2_img;

var button1,button2,button3,button4,button1_img,button1_press;

var button5,button6,button7,button8,button2_img,button2_press;

var question,quest_img,quest_press;

var reload,button3_img,button3_press;

var topEdge,bottomEdge,leftEdge,rightEdge,edges;

var play,play_img,play_press;

var arrow_img,arrow1,arrow2,arrow3;

var exit,exit_img,exit_press;

var menu,menu_img,menu_text;

var select;

var score1,score2;

var gameState = "stand-by";

function preload() {

  menu_img = loadImage("menu.png");

  exit_img = loadImage("close.png");
  exit_press = loadImage("press8.png");

  play_img = loadImage("play.png");
  play_press = loadImage("press7.png");

  quest_img = loadImage("tips.png");
  quest_press = loadImage("press6.png");

  center1_img = loadImage("centerB1.png");
  center1_press = loadImage("press5.png");

  center2_img = loadImage("centerB2.png");
  center2_press = loadImage("press3.png");

  button1_img = loadImage("button1.png");
  button1_press = loadImage("press1.png");

  button2_img = loadImage("button2.png");
  button2_press = loadImage("press2.png")

  button3_img = loadImage("rButton.png");
  button3_press = loadImage("press4.png");

  disc1_design = loadImage("Disc1.png");
  disc2_design = loadImage("Disc3.png");

  pro2_img = loadImage("pro2.png");
  pro2L_img = loadImage("pro2L.png");
  pro2R_img = loadImage("pro2R.png");
  derezz2 = loadImage("derezz2.png")

  pro1_img = loadImage("pro1.png");
  pro1L_img = loadImage("pro1L.png");
  pro1R_img = loadImage("pro1R.png");
  derezz1 = loadImage("derezz1.png")

  back_img = loadImage("back.png");

  arrow_img = loadImage("arrow.png");
}

function setup() {
  createCanvas(1200,900);

  // Creación de entorno y preparación para los juegos

  select = true;

  touch1 = true;
  touch2 = true;
  touch3 = true;

  menu_text = false;

  score1 = 0;
  score2 = 0;

  program1 = createGroup();
  program2 = createGroup();

  back = createSprite(600,450);
  back.addImage(back_img);
  back.scale=1.5;

  topEdge = createSprite(600,0,1200,20);
  topEdge.visible = false;

  bottomEdge = createSprite(600,height,1200,20);
  bottomEdge.visible = false;

  leftEdge = createSprite(0,600,20,1200);
  leftEdge.visible = false;

  rightEdge = createSprite(width,600,20,1200);
  rightEdge.visible = false;

  // Creación de Programas y Discos de Identidad

    //Programa 1:
  pro1 =createSprite(width-100,height/2,20,20);
  pro1.setCollider("rectangle",0,0,30,70);
  pro1.scale = 2;
  pro1.addImage("play",pro1_img);
  pro1.addImage("derezz",derezz1);
  program1.add(pro1);

  pro1L =createSprite(pro1.x,pro1.y+25,10,10);
  pro1L.addImage(pro1L_img);
  pro1L.setCollider("circle",0,0,8);
  pro1L.depth = pro1.depth+1;
  pro1L.scale = 2;
  program1.add(pro1L);

  pro1R =createSprite(pro1.x,pro1.y-25,10,10);
  pro1R.addImage(pro1R_img);
  pro1R.depth = pro1.depth-1;
  pro1R.setCollider("circle",0,0,8);
  pro1R.scale = 2;
  program1.add(pro1R);

    //Programa 2:
  pro2 =createSprite(100,height/2,20,20);
  pro2.setCollider("rectangle",0,0,30,70);
  pro2.scale=2;
  pro2.addImage("play",pro2_img);
  pro2.addImage("derezz",derezz2);
  program2.add(pro2);

  pro2L =createSprite(pro2.x+13,pro2.y-3,10,10);
  pro2L.addImage(pro2L_img);
  pro2L.setCollider("circle",0,0,8);
  pro2L.depth = pro2.depth-1;
  pro2L.scale=2;
  program2.add(pro2L);

  pro2R =createSprite(pro2.x+5,pro2.y+15,10,10);
  pro2R.setCollider("circle",0,0,8);
  pro2R.addImage(pro2R_img);
  pro2R.scale=2;
  program2.add(pro2R);

    //Disco 1:
  disc1 = createSprite(pro1L.x,pro1L.y);
  disc1.addImage(disc1_design);
  disc1.depth = pro1L.depth-1;
  disc1.setCollider("circle",0,0,13.5);

    //Disco 2:
  disc2 = createSprite(pro2L.x+4,pro2L.y);
  disc2.addImage(disc2_design); 
  disc2.depth = pro2L.depth-1;
  disc2.setCollider("circle",0,0,13.5);

    //Disco 3:
  disc3 = createSprite(pro2R.x+4,pro2R.y);
  disc3.addImage(disc2_design); 
  disc3.depth = pro2R.depth-1;
  disc3.setCollider("circle",0,0,13.5);

  // Creación de Botones de Juego:

    //Programa 1:
  button1 = createSprite(width-200,height-240);
  button1.addImage("release1",button1_img);
  button1.addImage("press1",button1_press);
  button1.visible=false;
  button1.scale = 2;

  button2 = createSprite(button1.x,button1.y+100);
  button2.addImage("release2",button1_img);
  button2.addImage("press2",button1_press);
  button2.visible=false;
  button2.scale = 2;
  button2.rotation=180;

  button3 = createSprite(button1.x-50,button1.y+50);
  button3.addImage("release3",button1_img);
  button3.addImage("press3",button1_press);
  button3.visible=false;
  button3.scale = 2;
  button3.rotation=270;

  button4 = createSprite(button1.x+50,button1.y+50);
  button4.addImage("release4",button1_img);
  button4.addImage("press4",button1_press);
  button4.visible=false;
  button4.scale = 2;
  button4.rotation=90;

  center1 = createSprite(button1.x,button1.y+50)
  center1.addImage("release5",center1_img);
  center1.visible=false;
  center1.scale = 2;
  center1.addImage("press5",center1_press);

    //Programa 2:
  button5 = createSprite(200,height-240);
  button5.addImage("release6",button2_img);
  button5.addImage("press6",button2_press);
  button5.visible=false;
  button5.scale = 2;
  button5.addImage(button2_img);

  button6 = createSprite(button5.x,button5.y+100);
  button6.addImage("release7",button2_img);
  button6.addImage("press7",button2_press);
  button6.visible=false;
  button6.scale = 2;
  button6.rotation=180;

  button7 = createSprite(button5.x+50,button5.y+50);
  button7.addImage("release8",button2_img);
  button7.addImage("press8",button2_press);
  button7.visible=false;
  button7.scale = 2;
  button7.rotation=90;

  button8 = createSprite(button5.x-50,button5.y+50);
  button8.addImage("release9",button2_img);
  button8.addImage("press9",button2_press);
  button8.visible=false;
  button8.scale = 2;
  button8.rotation=270;

  center2 = createSprite(button5.x,button5.y+50)
  center2.addImage("release10",center2_img);
  center2.addImage("press10",center2_press);
  center2.visible=false;
  center2.scale = 2;

    //Funciones:
  question = createSprite(width-60,height-60,20,20);
  question.addImage("release11",quest_img);
  question.addImage("press11",quest_press);
  question.scale=2;

  play = createSprite(width/2,height/2);
  play.addImage("release12",play_img);
  play.addImage("press12",play_press);
  play.visible=false;
  play.scale=4;

  menu = createSprite(600,450);
  menu.addImage("menu",menu_img);
  menu.visible=false;
  menu.scale=11.5;

  exit = createSprite(menu.x-240,menu.y-175);
  exit.addImage("release13",exit_img);
  exit.addImage("press13",exit_press);
  exit.visible=false;
  exit.scale=2;

  //Flechas:
  arrow1 = createSprite(question.x-45,question.y-45);
  arrow1.addImage("arrow",arrow_img);
  arrow1.scale = 3;
  arrow1.rotation=135;

  arrow2 = createSprite(95,100);
  arrow2.addImage("arrow",arrow_img);
  arrow2.visible=false;
  arrow2.scale=3;
  arrow2.rotation=315;

  arrow3 = createSprite(width-80,100);
  arrow3.addImage("arrow",arrow_img);
  arrow3.visible=false;
  arrow3.scale=3;
  arrow3.rotation=45;
}


function draw() {
  background("black");
  edges = createEdgeSprites();

  pro1L.x = pro1.x-15;
  pro1L.y = pro1.y+30;

  pro1R.x = pro1.x-23;
  pro1R.y = pro1.y;

  
  if(pro1.x<=width/2+15){
    pro1.x = width/2+15;
  }
  if(pro1.x>=width-100){
    pro1.x=width-100;
  }
  if(pro1.y>=height-100){
    pro1.y=height-100;
  }
  if(pro1.y<=100){
    pro1.y=100;
  }

  pro2L.x = pro2.x+23;
  pro2L.y = pro2.y;

  pro2R.x = pro2.x+15;
  pro2R.y = pro2.y+30;

  if(pro2.x<=100){
    pro2.x=100;
  }
  if(pro2.x>=width/2-15){
    pro2.x = width/2-15;
  }
  if(pro2.y>=height-100){
    pro2.y=height-100;
  }
  if(pro2.y<=100){
    pro2.y=100;
  }

  if(gameState=="stand-by"){
    program1.setVelocityXEach(0);
    program1.setVelocityYEach(0);

    program2.setVelocityXEach(0);
    program2.setVelocityYEach(0);

    disc1.velocityX = 0;
    disc1.velocityY = 0;

    disc2.velocityX = 0;
    disc2.velocityY = 0;

    disc3.velocityX = 0;
    disc3.velocityY = 0;

    arrow1.visible=true;
    play.visible=true;

    if(mousePressedOver(play)){
      play.changeImage("press12");
      select = true;
      gameState = "play";
    }
    else{
      play.changeImage("release12");
    }
  }
  if(gameState=="play"){
    play.visible=false;
    arrow1.visible=false;

    if(select == true){
      reset();
    }

    if(disc1.isTouching(pro2)){
      pro2.changeImage("derezz",derezz2);
      pro2L.visible=false;
      pro2R.visible=false;

      score1 =score1+1;

      gameState = "stand-by";
    }

    if(disc2.isTouching(pro1)||disc3.isTouching(pro1)){
      pro1.changeImage("derezz",derezz1);
      pro1L.visible=false;
      pro1R.visible=false;
      
      score2 = score2+1;

      gameState = "stand-by";
    }

    if(disc1.isTouching(pro1L)){
      if(touch1 == true){
        disc1.velocityX = 0;
        disc1.velocityY = 0;
        disc1.x = pro1L.x-4;
        disc1.y = pro1L.y;
      }
    }
    if(disc2.isTouching(pro2)){
      if(touch2 == true){
        disc2.velocityX = 0;
        disc2.velocityY = 0;
        disc2.x = pro2L.x+4;
        disc2.y = pro2L.y;
      }
    }
    if(disc3.isTouching(pro2)){
      if(touch3 == true){
        disc3.velocityX = 0;
        disc3.velocityY = 0;
        disc3.x = pro2R.x+4;
        disc3.y = pro2R.y;
      }
    }
  
  if(disc1.isTouching(topEdge)||disc1.isTouching(leftEdge)){
    disc1.velocityX = disc1.velocityX+2;
    disc1.velocityY = disc1.velocityY-2;
    if(disc1.velocityX >= 16){
      disc1.velocityX = 16;
    }
    if(disc1.velocityY <= -16){
      disc1.velocityY = -16;
    }
  }
  if(disc1.isTouching(bottomEdge)||disc1.isTouching(rightEdge)){
    disc1.velocityX = disc1.velocityX-2;
    disc1.velocityY = disc1.velocityY+2;
    if(disc1.velocityX <= -16){
      disc1.velocityX = -16;
    }
    if(disc1.velocityY >= 16){
      disc1.velocityY = 16;
    }
  }

  if(keyDown("enter")){
    if(disc1.isTouching(pro1L)||disc1.isTouching(pro1R)){
      center1.changeImage("press5",center1_press);
      disc1.velocityX = -10;
      disc1.velocityY = -10;
      touch1 = false;
    }
  }
  if(keyWentUp("enter")){
    center1.changeImage("release5",center1_img);
  }

  if(disc2.isTouching(topEdge)||disc2.isTouching(leftEdge)){
    disc2.velocityX = disc2.velocityX+2;
    disc2.velocityY = disc2.velocityY-2;
    if(disc2.velocityX >= 16){
      disc2.velocityX = 16;
    }
    if(disc2.velocityY <= -16){
      disc2.velocityY = -16;
    }
  }
  if(disc2.isTouching(bottomEdge)||disc2.isTouching(rightEdge)){
    disc2.velocityX = disc2.velocityX-2;
    disc2.velocityY = disc2.velocityY+2;
    if(disc2.velocityX <= -16){
      disc2.velocityX = -16;
    }
    if(disc2.velocityY >= 16){
      disc2.velocityY = 16;
    }
  }

  if(keyDown("q")){
    if(disc2.isTouching(pro2L)){
      center2.changeImage("press10",center2_press);
      disc2.velocityX = 10;
      disc2.velocityY = -10;
      touch2 = false;
    }
  }
  if(keyWentUp("q")){
    center2.changeImage("release10");
  }

  if(disc3.isTouching(topEdge)||disc3.isTouching(leftEdge)){
    disc3.velocityX = disc3.velocityX-2;
    disc3.velocityY = disc3.velocityY+2;
    if(disc3.velocityX <= -16){
      disc3.velocityX = -16;
    }
    if(disc3.velocityY >= 16){
      disc3.velocityY = 16;
    }
    
  }
  if(disc3.isTouching(bottomEdge)||disc3.isTouching(rightEdge)){
    disc3.velocityX = disc3.velocityX+2;
    disc3.velocityY = disc3.velocityY-2;
    if(disc3.velocityX >= 16){
      disc3.velocityX = 16;
    }
    if(disc3.velocityY <= -16){
      disc3.velocityY = -16;
    }
  }

  if(keyDown("e")){
    if(disc3.isTouching(pro2R)){
      center2.changeImage("press10",center2_press)
      disc3.velocityX = 10;
      disc3.velocityY = 10;
      touch3 = false;
    }
  }
  if(keyWentUp("e")){
    center2.changeImage("release10");
  }

  if(keyDown("w")){
    button5.changeImage("press6",button2_press);
    program2.setVelocityYEach(-6);
  }
  if(keyWentUp("w")){
    button5.changeImage("release6",button2_img);
    program2.setVelocityYEach(0);
  }
  
  if(keyDown("s")){
    button6.changeImage("press7",button2_press);
    program2.setVelocityYEach(6);
  }
  if(keyWentUp("s")){
    button6.changeImage("release7",button2_img);
    program2.setVelocityYEach(0);
  }

  if(keyDown("d")){
    button7.changeImage("press8",button2_press);
    program2.setVelocityXEach(6);
  }
  if(keyWentUp("d")){
    button7.changeImage("release8",button2_img);
    program2.setVelocityXEach(0);
  }

  if(keyDown("a")){
    button8.changeImage("press9",button2_press);
    program2.setVelocityXEach(-6);
  }
  if(keyWentUp("a")){
    button8.changeImage("release9",button2_img);
    program2.setVelocityXEach(0);
  }

  if(keyDown("RIGHT_ARROW")){
    button4.changeImage("press4",button1_press);
    program1.setVelocityXEach(6);
  }
  if(keyWentUp("RIGHT_ARROW")){
    button4.changeImage("release4",button1_img);
    program1.setVelocityXEach(0);
  }

  if(keyDown("LEFT_ARROW")){
    button3.changeImage("press3",button1_press);
    program1.setVelocityXEach(-6);
  }
  if(keyWentUp("LEFT_ARROW")){
    button3.changeImage("release3",button1_img);
    program1.setVelocityXEach(0);
  }

  if(keyDown("UP_ARROW")){
    button1.changeImage("press1",button1_press);
    program1.setVelocityYEach(-6);
  }
  if(keyWentUp("UP_ARROW")){
    button1.changeImage("release1",button1_img);
    program1.setVelocityYEach(0);
  }

  if(keyDown("DOWN_ARROW")){
    button2.changeImage("press2",button1_press);
    program1.setVelocityYEach(6);
  }
  if(keyWentUp("DOWN_ARROW")){
    button2.changeImage("release2",button1_img);
    program1.setVelocityYEach(0);
  }

  if(disc1.isTouching(edges)){
    if(touch1==false){
      touch1=true;
    }
  }

  if(disc2.isTouching(edges)){
    if(touch2==false){
      touch2=true;
    }
  }

  if(disc3.isTouching(edges)){
    if(touch3==false){
      touch3=true;
    }
  }
  
  if(disc1.isTouching(program1)){
    disc1.bounciness = 0;
    disc2.bounceOff(disc1);
    disc3.bounceOff(disc1);
  }else {
    disc1.bounciness = 1;
    disc2.bounce(disc1);
    disc3.bounce(disc1);
  }

  if(disc2.isTouching(pro2L)){
    disc2.bounciness = 0;
    disc1.bounceOff(disc2);
    disc3.bounceOff(disc2);
  }else {
    disc2.bounciness = 1;
    disc1.bounce(disc2);
    disc3.bounce(disc2);
  }

  if(disc3.isTouching(pro2R)){
    disc3.bounciness = 0;
    disc2.bounceOff(disc3);
    disc1.bounceOff(disc3);
  }else {
    disc3.bounciness = 1;
    disc1.bounce(disc3);
    disc2.bounce(disc3);
    }
  }

  disc1.bounceOff(edges);
  disc2.bounceOff(edges);
  disc3.bounceOff(edges);

  program1.collide(edges);
  program2.collide(edges);

  drawSprites();

  fill("orange");
  textSize(36);
  text(score2,60,75);

  fill("cyan");
  text(score1,width-60,75);

  if(gameState!="play"){

    fill("white");
    textSize(18);
    text("Para controles y tips, haz click aquí", arrow1.x-190,arrow1.y-35);
    
    if(mousePressedOver(question)){
      question.changeImage("press11");
      arrow2.visible=true;
      arrow3.visible=true;
      exit.visible=true;
      menu.visible=true;
      menu_text = true;

  } else if(menu_text==true){

    fill("black");
    text("El objetivo es usar tu disco o discos de identidad para anular al",360,350);
    text("programa contrario, este juego require dos jugadores presenciales.",340,375);

    fill("cyan");
    text("Controla el programa azul con las flechas de dirección y lanza tu disco",319,425);
    text("con la tecla enter. Tus victorias estarán en la parte derecha superior", 330,450);

    fill("orange");
    text("Controla el programa naranja con las teclas W,A,S,D y lanza tus discos",315,500);
    text("con las teclas Q y E. Tus victorias estarán en la parte izquierda superior", 314,525);

    if(mousePressedOver(exit)){

    exit.changeImage("press12",exit_press);
    arrow2.visible=false;
    arrow3.visible=false;
    exit.visible=false;
    menu.visible=false;
    menu_text = false;

  } }else{
    question.changeImage("release11");
    }
  }
}

function reset(){

  pro1.changeImage("play");
  pro1.x = width-100;
  pro1.y = height/2;

  pro1L.visible = true;
  pro1R.visible = true;

  disc1.x = pro1L.x;
  disc1.y = pro1L.y;

  pro2.changeImage("play");
  pro2.x = 100;
  pro2.y = height/2;

  pro2L.visible=true;
  pro2R.visible=true;

  disc2.x = pro2L.x;
  disc2.y = pro2L.y;

  disc3.x = pro2R.x;
  disc3.y = pro2R.y;

  touch1 = true;
  touch2 = true;
  touch3 = true;

  select = false;
}