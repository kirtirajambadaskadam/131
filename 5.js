function setup(){
    canvas= createCanvas(640,420);
    canvas.center();;
}

img="";

function preload(){
    img= loadImage("5i.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
}