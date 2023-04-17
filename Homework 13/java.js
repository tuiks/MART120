const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  color: 'blue'
};

const obstacles = [
  { x: 50, y: 50, size: 20, color: 'red' },
  { x: 200, y: 100, size: 30, color: 'green' }
];

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const speed = 5;
  if (event.key === 'ArrowUp') {
    player.y -= speed;
  } else if (event.key === 'ArrowDown') {
    player.y += speed;
  } else if (event.key === 'ArrowLeft') {
    player.x -= speed;
  } else if (event.key === 'ArrowRight') {
    player.x += speed;
  }
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

function drawObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    ctx.fillStyle = obstacle.color;
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
  }
}

function updateObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    obstacle.x += Math.random() * 4 - 2;
    obstacle.y += Math.random() * 4 - 2;

    if (obstacle.x < 0) {
      obstacle.x = canvas.width;
    } else if (obstacle.x > canvas.width) {
      obstacle.x = 0;
    }
    if (obstacle.y < 0) {
      obstacle.y = canvas.height;
    } else if (obstacle.y > canvas.height) {
      obstacle.y = 0;
    }
  }
}


function checkExitCollision() {
  const exit = { x: canvas.width - 50, y: canvas.height - 50, size: 20, color: 'yellow' };
  const dx = player.x - exit.x;
  const dy = player.y - exit.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < player.size + exit.size) {
    alert('You won!');
  }
}



canvas.addEventListener('click', addObstacle);


function addObstacle(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX
  rect.left;
const mouseY = event.clientY - rect.top;

const newObstacle = {
x: mouseX,
y: mouseY,
size: 30,
color: 'purple'
};

obstacles.push(newObstacle);
}

function drawExit() {
  const exit = { x: canvas.width - 50, y: canvas.height - 50, size: 20, color: 'yellow' };
  ctx.fillStyle = exit.color;
  ctx.beginPath();
  ctx.arc(exit.x, exit.y, exit.size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

// Main
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(); 
  drawObstacles(); 
  drawExit(); 
  updateObstacles(); 
  checkExitCollision();
  requestAnimationFrame(gameLoop); 
}

gameLoop();