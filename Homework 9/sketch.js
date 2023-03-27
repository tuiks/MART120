function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    fill(120, 45, 78);
    strokeWeight(2);
    stroke(0);
    
    // neck
    rect(175, 300, 50, 70);

    // face
    fill(236, 188, 180);
    ellipse(200, 200, 200, 250);
    
    // eyes
    fill(0);
    ellipse(160, 180, 20, 25);
    ellipse(240, 180, 20, 25);
    
    // nose
    fill(360);
    triangle(200, 190, 190, 220, 210, 220);
    
    // mouth
    strokeWeight(3);
    line(180, 240, 220, 240);
    
    // eyebrows
    strokeWeight(10);
    line(150, 150, 190, 180);
    line(250, 150, 210, 180);
    
     // horns
    strokeWeight(2);
    fill(255, 0, 0);
    triangle(160, 50, 140, 100, 180, 100);
    triangle(240, 50, 220, 100, 260, 100);

    



    // signature
    textSize(20);
    fill(255);
    strokeWeight(3);
    textAlign(CENTER);
    text("Taylor Denton", 200, 390);
  }
