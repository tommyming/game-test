var pos = [
    [50, 741],
    [140, 909],
    [330,799],
    [620, 857],
    [900,804],
    [1220,821],
    [1530,869],
    [1750,713]
];

var balpos = [
    [120,330],
    [310,458],
    [550,305],
    [725,477],
    [1000,306],
    [1220,460],
    [1490,307],
    [1737,425]
];

var order = [];
var status = 1;
var counter = 0;


// function move(){
//     var d = document.getElementById("a7");
//     d.style.position = "absolute";
//     d.style.left = balpos[0][0]*100/1920 + "%";
//     d.style.top = balpos[0][1]*100/1080 + "%";
// }
var timeout = 0;
function handleResize(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var ratio = width/1920 < height/1080 ? width/1920 : height/1080;
    var p = document.getElementById("parent");
    var curwidth = ratio*0.9*1920;
    var curheight = ratio*0.9*1080;
    var left = Math.floor((width - curwidth) /2);
    var top = Math.floor((height - curheight) /2);
    p.style.transform = "matrix("+ratio*0.9+",0,0,"+ratio*0.9+","+left+","+top+")";
}
function init() {
    handleResize();
    window.onresize = handleResize;
    window.setTimeout(function() {
        var t = document.getElementById("tryagain");
        t.style.visibility = "visible";
        timeout = 1;
    }, 15000); 
}

function start(){
    for(var i = 0; i < 8; i++){
        var x = Math.floor(Math.random()*8);
        var temp = pos[i];
        pos[i] = pos[x];
        pos[x] = temp;
    }
    for(var i = 0; i < 8; i++){
        var d = document.getElementById(String("a"+i));
        d.style.position = "absolute";
        // d.style.left = pos[i][0]*100/1920 + "%";
        // d.style.top = pos[i][1]*100/1080 + "%";
        d.style.left = pos[i][0]+Math.random()*100-50 + "px";
        d.style.top = pos[i][1]+Math.random()*100-50 + "px";
        d.addEventListener("click", function() {
            if (timeout == 1 || this.done == 1) return;
            this.done = 1;
            this.style.position = "absolute";
            // this.style.left = balpos[counter][0]*100/1920 + "%";
            // this.style.top = balpos[counter][1]*100/1080 + "%";
            this.style.left = balpos[counter][0] + "px";
            this.style.top = balpos[counter][1] + "px";
            if (this.id != "a" + counter) {
                status = 0;
            }
            counter++; 
            if (counter == 8) {
                if (status == 1) {
                    document.getElementById("success").style.visibility = "visible";
                } else {
                    document.getElementById("tryagain").style.visibility = "visible";
                }
            }
        })
    }
}
// init();
