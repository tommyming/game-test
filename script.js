var c =  document.getElementById("canvas");
var ctx= c.getContext("2d");


var img1 = new Image();
img1.src = "assets/01.png";

var img2 = new Image();
img2.src = "assets/02.png";

var img3 = new Image();
img3.src = "assets/03.png";

var img4 = new Image();
img4.src = "assets/04.png";

var img5 = new Image();
img5.src = "assets/05.png";

var img6 = new Image();
img6.src = "assets/06.png";

var img7 = new Image();
img7.src = "assets/07.png";

var img8 = new Image();
img8.src = "assets/08.png";

function randomcord() {
    x = Math.floor(Math.random()*700);
    y = Math.floor(Math.random()*200);
}

img1.onload = function() {
    randomcord();
    ctx.drawImage(img1, x , y,100,100);
}

img2.onload = function() {
    randomcord();
    ctx.drawImage(img2, x , y,100,100);
}

img3.onload = function() {
    randomcord();
    ctx.drawImage(img3, x , y,100,100);
}

img4.onload = function() {
    randomcord();
    ctx.drawImage(img4, x , y,100,100);
}

img5.onload = function() {
    randomcord();
    ctx.drawImage(img5, x , y,100,100);
}

img6.onload = function() {
    randomcord();
    ctx.drawImage(img6, x , y,100,100);
}

img7.onload = function() {
    randomcord();
    ctx.drawImage(img7, x , y,100,100);
}

img8.onload = function() {
    randomcord();
    ctx.drawImage(img8, x , y,100,100);
}


