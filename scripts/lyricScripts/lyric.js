//Access-Control-Allow-Origin: *

var request = new XMLHttpRequest();

request.open("GET","http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433");

/*var theUrl = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
*/

/*
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}
*/