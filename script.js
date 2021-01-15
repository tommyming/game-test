$(document).ready(function() {
    $(".img1").click(function(){
        $(this).animate({"top":"550px","left": "-170px"});
    });
    $(".img2").click(function(){
        $(this).animate({"top":"590px","left": "-180px"});
    });
    $(".img3").click(function(){
        $(this).animate({"top":"550px","left": "-190px"});
    });
    $(".img4").click(function(){
        $(this).animate({"top":"570px","left": "-220px"});
    });
    $(".img5").click(function(){
        $(this).animate({"top":"400px","left": "220px"});
    });
    $(".img6").click(function(){
        $(this).animate({"top":"470px","left": "200px"});
    });
    $(".img7").click(function(){
        $(this).animate({"top":"400px","left": "220px"});
    });
    $(".img8").click(function(){
        $(this).animate({"top":"470px","left": "270px"});
        window.setTimeout(function(){
            window.location = "prize.html";
        },2000);

    })
});

window.setTimeout(function() {
    window.location.href = 'try-again.html';
}, 20000);