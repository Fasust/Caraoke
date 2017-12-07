
var playing = 0;
var width = 1;
//var timePlayed = 0;
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
        progBarMove();
    }


}

function progBarMove() {
    var progBar = document.getElementById("progBar");

    var id = setInterval(partialFrame, 150);
    function partialFrame() {
        if (playing == 0) {
            clearInterval(id);
        } else {
            width+=0.1;
            progBar.style.width = width + '%';
        }
    }
}

/*function timeCount(){
    var counter = document.getElementsById("timeBar");
    var id = setInterval(add,60);
    function add(){
        if(playing == 0){
            clearInterval(id);
        } else {
            timePlayed += 5;
        }
    }
}
*/