let playing = false;
Tone.getContext().rawContext.suspend();



let audioFile = "";

const audioBuffer = new Tone.ToneBufferSource(audioFile, () => {
    console.log('loaded');
    grainBuffer.buffer = audioBuffer.buffer;
}).toDestination();

//var resourceKey ="d49b04f4c7c349efa12a8bc81c872521";

// status fields and start button in UI
var phraseDiv;
var resultDiv;

// subscription key and region for speech services.
var resourceKey = null;
var resourceRegion = "germanywestcentral";
var authorizationToken;
var SpeechSDK;
var synthesizer;

var phrase = "all good men must come to the aid"
var queryString = null;
var skript_text = "";

var audioType = "audio/mpeg";
var serverSrc = "/text-to-speech";

var number;

var inhalt = true;
var koord = false;
var sz = false;
var info = false;

var voice = "de-DE-ElkeNeural";

//document.getElementById('serverAudioStream').disabled = true;
//document.getElementById('serverAudioFile').disabled = true;
document.getElementById('clientAudioAzure').disabled = true;





//const btnInhalt = document.getElementById(".inhalt").value;




/*
const btnKoord = document.querySelector(".koordinaten");
const btnSZ = document.querySelector(".sz");
const btnInfo = document.querySelector(".info");


btnInhalt.onclick = () => {
    if (inhalt) {
        inhalt = false;
        toggleBtnColorDeact(btnInhalt);
    }
    else {
        inhalt = true;
        toggleBtnColorActive(btnInhalt);
    }
}


toggleBtnColorActive = (btnName) => {
    btnName.style.color = "blue";
};

toggleBtnColorDeact = (btnName) => {
    btnName.style.color = "yellow";
};

// same as toggle sound above
btnInhalt.addEventListener("click", function () {
    if (inhalt) {
        inhalt = false;
        toggleBtnColorDeact(btnInhalt);
    }
    else {
        inhalt = true;
        toggleBtnColorActive(btnInhalt);
    }
});
*/


function setVoice(v){
    if(v == 'moritz'){
        voice = "de-DE-KillianNeural";
    }
    else if(v == 'maxi'){
        voice = "de-DE-ElkeNeural";
    }
}

function setMode(n) {
    if (n == 1) {

        inhalt = true;
        koord = false;
        sz = false;
        info = false;

    }
    else if (n == 2) {
        inhalt = false;
        koord = true;
        sz = false;
        info = false;
  

    }
    else if (n == 3) {
        inhalt = false;
        koord = false;
        sz = true;
        info = false;

    }
    else if (n == 4) {
        inhalt = false;
        koord = false;
        sz = false;
        info = true;

    }
}

// update src URL query string for Express.js server
function updateSrc2() {

    // input values
    resourceKey = document.getElementById('resourceKey').value.trim();
    resourceRegion = resourceRegion;

}

function setInputTxt(number) {
    console.log(number);
    console.log(skript[number]);
    skript_text = skript[number];
    phrase = skript[number];
    console.log(phrase);
    //var clientAudioAzureControl = document.getElementById('clientAudioAzure');
    //clientAudioAzureControl.disabled = false;
    //  document.getElementById('phraseDiv').innerHTML = skript_text;
    //phrase = skript[number];
}



// update src URL query string for Express.js server
function updateSrc() {
    console.log("in update src");
    // input values
    resourceKey = document.getElementById('resourceKey').value.trim();
    resourceRegion = document.getElementById('resourceRegion').value.trim();
    phrase = document.getElementById('phraseDiv').value.trim();

    /*
    // server control - by file
    var serverAudioFileControl = document.getElementById('serverAudioFile');
    queryString += `%file=true`;
    const fileQueryString = `file=true&region=${resourceRegion}&key=${resourceKey}&phrase=${phrase}`;
    serverAudioFileControl.src = `${serverSrc}?${fileQueryString}`;
    console.log(serverAudioFileControl.src)
    serverAudioFileControl.type = "audio/mpeg";
    serverAudioFileControl.disabled = false;
 
    // server control - by stream
    var serverAudioStreamControl = document.getElementById('serverAudioStream');
    const streamQueryString = `region=${resourceRegion}&key=${resourceKey}&phrase=${phrase}`;
    serverAudioStreamControl.src = `${serverSrc}?${streamQueryString}`;
    console.log(serverAudioStreamControl.src)
    serverAudioStreamControl.type = "audio/mpeg";
    serverAudioStreamControl.disabled = false;
    */
    // client control
    var clientAudioAzureControl = document.getElementById('clientAudioAzure');
    clientAudioAzureControl.disabled = false;

}



function DisplayError(error) {
    window.alert(JSON.stringify(error));
}

// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure() {


    console.log(phrase);
    // authorization for Speech service
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(resourceKey, resourceRegion);
    speechConfig.speechSynthesisVoiceName = voice;

    // new Speech object
    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(
        phrase,
        function (result) {

            // Success function

            // display status
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {

                // load client-side audio control from Azure response
                audioElement = document.getElementById("clientAudioAzure");
                const blob = new Blob([result.audioData], { type: "audio/mpeg" });
                const url = window.URL.createObjectURL(blob);

            } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                // display Error
                throw (result.errorDetails);
            }

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        },
        function (err) {

            // Error function
            throw (err);
            audioElement = document.getElementById("audioControl");
            audioElement.disabled = true;

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        });

}


// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure(phrase) {


    console.log(phrase);
    // authorization for Speech service
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(resourceKey, resourceRegion);
    speechConfig.speechSynthesisVoiceName = voice;

    // new Speech object
    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synthesizer.speakTextAsync(
        phrase,
        function (result) {

            // Success function

            // display status
            if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {

                // load client-side audio control from Azure response
                audioElement = document.getElementById("clientAudioAzure");
                const blob = new Blob([result.audioData], { type: "audio/mpeg" });
                const url = window.URL.createObjectURL(blob);

            } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                // display Error
                throw (result.errorDetails);
            }

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        },
        function (err) {

            // Error function
            throw (err);
            audioElement = document.getElementById("audioControl");
            audioElement.disabled = true;

            // clean up
            synthesizer.close();
            synthesizer = undefined;
        });

}



// Client-side request directly to Azure Cognitive Services
function getSpeechFromAzure_modus(x, y) {

    if (x != undefined && y != undefined) {


        if (inhalt) {
            console.log("x: " + x + " y: " + y + " " + tabelle_excel[x][y]);
            getSpeechFromAzure(tabelle_excel[x][y]);
        }
        else if (koord) {
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }
            else {
                getSpeechFromAzure(tabelle_excel[x][y] + " Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
            }
        }
        else if(info){
            if (x == 0) {
                getSpeechFromAzure("Tabellenzeile " + y);
            }
            else if (y == 0) {
                getSpeechFromAzure("Tabellenspalte " + tabelle_excel[x][0]);
            }
            else {
            getSpeechFromAzure("Tabellenzelle " + tabelle_excel[x][0] + " " + tabelle_excel[0][y]);
            }
        }

        else if(sz){
            if(x == 2 && y!=1){
                getSpeechFromAzure(tabelle_excel[x][1] + " " + tabelle_excel[x][y]);
            }
            else if(y == 1){
                getSpeechFromAzure("Überschrift Spalte " + tabelle_excel[x][1]);
            }
            else {
            getSpeechFromAzure(tabelle_excel[2][y] +" "+ tabelle_excel[x][1] + " " + tabelle_excel[x][y]);
            }
        }

    }
}






// Initialization
document.addEventListener("DOMContentLoaded", function () {

    var clientAudioAzureControl = document.getElementById("clientAudioAzure");
    var resultDiv = document.getElementById("resultDiv");

    resourceKey = document.getElementById('resourceKey').value;
    resourceRegion = document.getElementById('resourceRegion').value;
    phrase = document.getElementById('phraseDiv').value;
    //   skript_text = document.getElementById('text').value;



    if (!!window.SpeechSDK) {
        SpeechSDK = window.SpeechSDK;
        clientAudioAzure.disabled = false;

        document.getElementById('content').style.display = 'block';
    }
});


