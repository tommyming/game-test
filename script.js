var count = $('.row').length;

for(var i = 1; i <= count; i++){
    var numRand = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    var src1 = "assets/"+numRand+".png";
    $(".img"+i).attr("src",src1);
}

