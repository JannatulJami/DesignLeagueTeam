const container = document.querySelector('.game');

var character = {
  x:50,
  y: canvas.height-70,
  width:40,
  height:60,
  jumping:false,
  jumpHeight:20,
  jumpSpeed:10,
  gravity:1
};
 
var charcterImg = newImage();
charcterImg.src = "game_img/cat.jpg";

function updateCharcter() {
  if (charcter.jumping){
    charcter.y -= charcter.jumpSpeed-= charcter.gravity;
  
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
if (event.code === "u")
  jump();
}
});
  
