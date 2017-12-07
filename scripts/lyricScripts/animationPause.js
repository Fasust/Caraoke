
var playing = 0;

function activateLyricAninmation() {

    if(playing){
        document.getElementById("lyric-text").style.animationPlayState = "paused";
        playing = 0;
    }else{
        document.getElementById("lyric-text").style.animationPlayState = "running";
        document.getElementById("lyric-text").classList.toggle('lyric-text-active');
        playing = 1;
        progBarMove();
    }


}

function progBarMove() {
    var progBar = document.getElementById("progBar");
    var width = 1;
    var id = setInterval(partialFrame, 150);
    function partialFrame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width+=0.1;
            progBar.style.width = width + '%';
        }
    }
}
