
var isname = false;
function doPlay(soundId) {
   // var my_media = null;
    var mediaTimer = null;
    //var mediapath = "/android_asset/www/music/" + soundId.srcElement.id + ".mp3"
    var mediapath = null;
    if (isname)
        mediapath = "/android_asset/www/music/" + soundId.srcElement.id + "_name.mp3"
       else
        mediapath = "/android_asset/www/music/" + soundId.srcElement.id + ".mp3"


     EnableDisableAll(true);
 
    var my_media = new Media(mediapath,
         // success callback
         function () {
             console.log("playAudio():Audio Success");
         },
         // error callback
         function (err) {
             console.log("playAudio():Audio Error: " + err);
         },
        function (mediaStatus) {
            console.log("playAudio():Audio status: " + mediaStatus);
        }
     );
    // Play audio
    my_media.play();

    // Update my_media position every second
    if (mediaTimer == null) {
        mediaTimer = setInterval(function () {
            // get my_media position
            my_media.getCurrentPosition(
                // success callback
                function (position) {
                    if (position > -1) {
                        setAudioPosition('Time : ' + (position) + " sec");
                    }
                    if (position == my_media.getDuration() || position + 1 > my_media.getDuration()) {
                        setAudioPosition('');
                        clearInterval(mediaTimer);
                        my_media.stop();
                        my_media.release();
                        EnableDisableAll(false);
                    }
                },
                // error callback
                function (e) {
                   // console.log("Error getting pos=" + e);
                    setAudioPosition("Error: " + e);
                }
            );
        }, 1000);
       
    }
}

function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}


function EnableDisableAll(boolvalue)
{
    document.getElementById("1Dog").disabled = boolvalue;
    document.getElementById("2Cat").disabled = boolvalue;
    document.getElementById("3Monkey").disabled = boolvalue;
    document.getElementById("4Horse").disabled = boolvalue;
    document.getElementById("5Pig").disabled = boolvalue;
    document.getElementById("6Sheep").disabled = boolvalue;
    document.getElementById("7Dinosaur").disabled = boolvalue;
    document.getElementById("8Goat").disabled = boolvalue;
    document.getElementById("9Lion").disabled = boolvalue;
    document.getElementById("10Rat").disabled = boolvalue;
    document.getElementById("Snake").disabled = boolvalue;
    document.getElementById("12Tiger").disabled = boolvalue;
}
function doNav(navid) {
    if (navid.srcElement.id == "nameid")
        isname = true;
    else
        isname = false;

   }