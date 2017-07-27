const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const cWidth = canvas.width = "1000";
const cHeight = canvas.height = "500";
const ballSize = 20;
const ballXStart = 245;
const ballYStart = 495;
let ballX = cWidth/2 - ballSize/2;
let ballY = cHeight/2 - ballSize/2;
const rWidth = 20;
const rHeight = 100;
const playerX = 70;
const aiX = 910;
let playerY = 200;
let aiY = 200;
let ballSpeedX = 2;
let ballSpeedY = 2;

function player(){
  ctx.fillStyle = "#00E676";
  ctx.fillRect(playerX, playerY, rWidth, rHeight);
}
function ai(){
  ctx.fillStyle = "#9E9E9E";
  ctx.fillRect(aiX, aiY, rWidth, rHeight);
}
function ball(){
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(ballX, ballY, ballSize, ballSize);
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if(ballY <= 0 || ballY+ballSize>= cHeight){
    ballSpeedY= -ballSpeedY;
  }
  if(ballX <=0 || ballX+ballSize >= cWidth){
    ballSpeedX= -ballSpeedX;
  }
}
function table(){
  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = "#c0c0c0";
  for(let linePosition = 10; linePosition < cHeight; linePosition+=35){
    ctx.fillRect(496, linePosition, 5, 20);

  }
}
function game(){
  table()
  ball()
  player()
  ai()
}

setInterval(game, 16.6);
