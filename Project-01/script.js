// canvas stuff
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// dog image stuff
const playerImage = new Image(); // built in constructor to make image
playerImage.src = 'shadow_dog.png';

//sprite stuff
// size of sprite sheet in pixels/number of rows or columns
const spriteWidth = 575;
const spriteHeight = 523;
let x = 0;
// animate
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(playerImage,sx,sy,sw,sh,0,0, 20,20);
    ctx.drawImage(playerImage,spriteWidth,x*spriteHeight,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    requestAnimationFrame(animate); // actually animates it over and over
    x+=0.01;
}
animate();