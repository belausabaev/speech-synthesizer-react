let playing = false;
Tone.getContext().rawContext.suspend();



let audioFile = "";

const audioBuffer = new Tone.ToneBufferSource(audioFile, () => {
    console.log('loaded');
    grainBuffer.buffer = audioBuffer.buffer;
}).toDestination();



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

var audioType = "audio/mpeg";
var serverSrc = "/text-to-speech";

//document.getElementById('serverAudioStream').disabled = true;
//document.getElementById('serverAudioFile').disabled = true;
document.getElementById('clientAudioAzure').disabled = true;

// update src URL query string for Express.js server
function updateSrc() {

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

    // authorization for Speech service
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(resourceKey, resourceRegion);

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

// Initialization
document.addEventListener("DOMContentLoaded", function () {

    var clientAudioAzureControl = document.getElementById("clientAudioAzure");
    var resultDiv = document.getElementById("resultDiv");

    resourceKey = document.getElementById('resourceKey').value;
    resourceRegion = document.getElementById('resourceRegion').value;
    phrase = document.getElementById('phraseDiv').value;
    if (!!window.SpeechSDK) {
        SpeechSDK = window.SpeechSDK;
        clientAudioAzure.disabled = false;

   //     document.getElementById('content').style.display = 'block';
    }
});