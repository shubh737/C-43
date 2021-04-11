var valtriake;
var akenies;
var aiger,aigerImg,aigerLaunching,aigerOverPowered;
var vault,vaultImg,valtLaunching;
var stadium,stadiumImg;
var launcher1;
var launcher2;
var refree,refreeImg;

function preload(){
stadiumImg = loadImage("images/Stadium.jfif");
aigerImg = loadImage("images/aiger.jfif");
refreeImg = loadImage("images/Refree.jfif");
vaultImg = loadImage("images/Vault.jfif");
aigerLaunching = loadImage("images/Aiger launching.jfif")
}

function setup(){
createCanvas(displayWidth-2,displayHeight-102);

var stadium = createSprite(displayWidth/2,displayHeight/2.7,1300,750);
stadium.addImage(stadiumImg);
stadium.scale = 5.1;

var aiger = createSprite(windowWidth-60,250,10,80);
aiger.addImage(aigerImg);
aiger.scale = 0.8;

var refree = createSprite(windowWidth/2,windowHeight-50,20,40);
refree.addImage(refreeImg);
refree.scale = 0.6

var vault = createSprite(windowWidth/25,250,20,40)
vault.addImage(vaultImg);
vault.scale = 0.8;
}

function draw(){
background("lightblue");

textSize(30);
fill(224, 35, 35);
text("YOU",windowWidth-100,30);

textSize(27);
fill(224, 35, 35);
text("Computer",windowWidth-1532,30);

textSize(30);
fill(224, 35, 35);
text("Score-",windowWidth-120,60);

textSize(27);
fill(224, 35, 35);
text("Score-",windowWidth-1532,60);



drawSprites();
}