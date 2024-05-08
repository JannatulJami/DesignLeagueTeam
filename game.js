const container = document.querySelector('.game');

var character = {
  x:50,
  y: canvas.height-70,
  width:40,
  height:50,
  jumping:false,
  jumpHeight:20,
  jumpSpeed:10,
  gravity:1
};

var monster = {
  x: 200,
  y : 200,
  width:30,
  height: 30,
};

let score = 0;

function drawScore() {
  ctx.fillStyle = 'black';
  ctx.font = '24px Arial';
  ctx.fillText('Score: $(score)', 10, 30);
}
 
var characterImg = newImage();
characterImg.src = "game_img/cat.jpg";

//Function to update character's position
function updateCharacter() {
  if (character.jumping){
    character.y -= character.jumpSpeed-= character.gravity;
  
    if (character.y >= canvas.height - charcter.jumpHeight) {
      character.jumping = false;
      character.jumpSpeed = 5;
      character.y  = canvas.height - 70;
    }
  }
}

//function to jump
function jump() {
  if(!character.jumping){
    character.jumping = true;
  }
}

//event listeener for jumping 
function (event) {
if (event.code === "ArrowKeyUp")
  jump();
};
  
