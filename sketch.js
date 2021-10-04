var startGameButton,hanging_place,head,body,left_hand,right_hand,left_leg,right_leg;
var startGameBg,hanging_place_image,head_image,body_image,left_leg_image,right_leg_image,right_hand_image,left_hand_image;

function preload(){
  startGameBg = loadImage("Hangman Start Page.png");
  hanging_place_image = loadImage("Hangman-1.png");
  head_image = loadImage("head.png");
  body_image = loadImage("Body.png");
  left_leg_image = loadImage("LH.png");
  right_leg_image = loadImage("RH.png");
  left_hand_image = loadImage("LH.png");
  right_hand_image = loadImage("RH.png")
}

function setup() {
  createCanvas(584,371)

  startGameButton = createButton("Start Game");
  startGameButton.mousePressed(start);

  hanging_place = addImage("hanging",hanging_place_image);
}

function draw() 
{
 
background(startGameBg);

}

function start(){
  background("white");
  startGameButton.visible = false;
  hanging_place.visible = true;
}
