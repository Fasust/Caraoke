
var playing = 0;

function activateLyricAninmation() {

    if(playing){
        document.getElementById("lyric-text").style.animationPlayState = "paused";
        playing = 0;
    }else{
        document.getElementById("lyric-text").style.animationPlayState = "running";
        document.getElementById("lyric-text").classList.toggle('lyric-text-active');
        playing = 1;
    }


}