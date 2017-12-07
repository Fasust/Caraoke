
var favorite = 0;

function switchFavorite() {
    if(favorite){
        document.getElementById("favoriteHeart").style.color = 'lightgray';

        favorite = 0;

    }else {
        document.getElementById("favoriteHeart").style.color = 'darkred';

        favorite = 1;
    }



}