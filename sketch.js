 var canvas,tom,jerry,I,I1,I2,I3,I4,I5,I6;
 var bg;

function preload() {
    //load the images here
I = loadAnimation("images/cat1.png");
I2 = loadAnimation("images/mouse1.png");
I3 = loadAnimation("images/mouse2.png","images/mouse3.png");
I4 = loadAnimation("images/cat2.png","images/cat3.png");
I5 = loadAnimation("images/mouse4.png");
I6 = loadAnimation("images/cat4.png");
bg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addAnimation(I);
tom.scale=0.2;

jerry = createSprite(200,600);
jerry.addAnimation(I2);
jerry.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x=jerry.x < (tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastImage",I6);
    tom.x=300;
    tom.scale=0.2;
    tom.changeAnimation("tomlastImage");
    jerry.addAnimation("jerrylastImage",I5);
    jerry.scalle=0.15;
    jerry.addAnimation("jerrylastImage");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",I4);
    tom.changeAnimation("tomRunning");

    jerrry.addAnimation("jerryTeasing",I3);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay=25;
}
}