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

function init(){
    handleResize();
    window.onresize = handleResize;
}