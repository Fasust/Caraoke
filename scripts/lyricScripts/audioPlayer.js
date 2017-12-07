
var audio = new Audio('././audio/Hallelujah.mp3');

function playHallelujah() {
    if(!playing){
        audio.pause();
    }else{
        audio.play();
    }

}
