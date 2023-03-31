let shape1_x, shape1_y, shape2_x, shape2_y, shape3_x, shape3_y;
let shape1_speed, shape2_speed, shape3_speed;
let title_size;
let size_dir = 1;

function setup() {
  createCanvas(400, 400);
  shape1_x = random(width);
  shape1_y = random(height);
  shape2_x = random(width);
  shape2_y = random(height);
  shape3_x = random(width);
  shape3_y = random(height);
  shape1_speed = random(1, 3);
  shape2_speed = random(1, 3);
  shape3_speed = random(1, 3);
  title_size = 24;
}

function draw() {
  background(220);
  
  // Move shapes along x-axis
  shape1_x += shape1_speed;
  if (shape1_x > width || shape1_x < 0) {
    shape1_speed *= -1;
  }
  
  shape2_x += shape2_speed;
  if (shape2_x > width || shape2_x < 0) {
    shape2_speed *= -1;
  }
  
  // Move shapes along y-axis
  shape1_y += shape1_speed;
  if (shape1_y > height || shape1_y < 0) {
    shape1_speed *= -1;
  }
  
  shape2_y += shape2_speed;
  if (shape2_y > height || shape2_y < 0) {
    shape2_speed *= -1;
  }
  
  // Move shape diagonally
  shape3_x += shape3_speed;
  shape3_y += shape3_speed;
  if (shape3_x > width || shape3_x < 0) {
    shape3_speed *= -1;
  }
  if (shape3_y > height || shape3_y < 0) {
    shape3_speed *= -1;
  }
  
  // Draw shapes
  fill(255, 0, 0);
  ellipse(shape1_x, shape1_y, 50, 50);
  
  fill(0, 255, 0);
  ellipse(shape2_x, shape2_y, 50, 50);
  
  fill(0, 0, 255);
  rect(shape3_x, shape3_y, 50, 50);
  
  // Resize title
  textSize(title_size);
  textAlign(CENTER);
  text("Self-Portrait", width/2, height/2);
  
  // Change title size
  title_size += 5 * size_dir;
  if (title_size > 48 || title_size < 24) {
    size_dir *= -1;
  }
}