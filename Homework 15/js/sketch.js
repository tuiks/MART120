var characterX = 100;
var characterY = 100;
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;

var mouseShapeX;
var mouseShapeY;

var shape1, shape2, shape3, shape4;
function setup() {
    createCanvas(500, 600);
    shape1 = new Rectangle(300,450,20,30,120,20,200);
    shape2 = new Rectangle(200,300,50,80,220,0,20);
    shape3 = new Rectangle(0,0,100,200,0,120,20);
    shape4 = new Rectangle(150,100,300,25,128,128,128);
    
    createCharacter(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(16);
    text("EXIT", width - 50, height - 50)

    drawCharacter();
    characterMovement();


    fill(13, 145, 14);
  

    shape1.draw();
    shape2.draw();
    shape3.draw();
    shape4.draw();
    
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}