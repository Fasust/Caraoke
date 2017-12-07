
var playing = 0;

function activateLyricAninmation() {

    if(playing){
        //Animation
        document.getElementById("lyric-text").style.animationPlayState = "paused";

        //Switch Icons
        document.getElementById("playButton").classList.add('glyphicon-play');
        document.getElementById("playButton").classList.remove('glyphicon-pause');
        playing = 0;
    }else{
        //Animation
        document.getElementById("lyric-text").style.animationPlayState = "running";
        document.getElementById("lyric-text").classList.toggle('lyric-text-active');

        //Switch Icons
        document.getElementById("playButton").classList.remove('glyphicon-play');
        document.getElementById("playButton").classList.add('glyphicon-pause');
        playing = 1;
    }


}