var img1status = false;
var img2status = false;
var img3status = false;
var img4status = false;
var img5status = false;
var img6status = false;
var img7status = false;
var img8status = false;


$(document).ready(function() {
    $(".img1").click(function(){
        $(this).animate({"top":"550px","left": "-170px"});
        img1status = true;
    });
    $(".img2").click(function(){
        $(this).animate({"top":"590px","left": "-180px"});
        img2status = true;
    });
    $(".img3").click(function(){
        $(this).animate({"top":"550px","left": "-190px"});
        img3status = true;
    });
    $(".img4").click(function(){
        $(this).animate({"top":"570px","left": "-220px"});
        img4status = true;
    });
    $(".img5").click(function(){
        $(this).animate({"top":"400px","left": "220px"});
        img5status = true;
    });
    $(".img6").click(function(){
        $(this).animate({"top":"470px","left": "200px"});
        img6status = true;
    });
    $(".img7").click(function(){
        $(this).animate({"top":"400px","left": "220px"});
        img7status = true;
    });
    $(".img8").click(function(){
        $(this).animate({"top":"470px","left": "270px"});
        if(img1status = img2status = img3status = img4status = img5status = img6status = img7status){
            window.setTimeout(function(){
                window.location = "prize.html";
            },2000);
        };
    })
});

window.setTimeout(function() {
    window.location.href = 'try-again.html';
}, 20000);