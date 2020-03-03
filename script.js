let kick = document.getElementById('kick');
let closed = document.getElementById('closed');
let clap = document.getElementById('clap');
let eightoeight = document.getElementById('808');
let hat = document.getElementById('hat');
let snare = document.getElementById('snare');


function playKick() {
    let audiokick = document.createElement('audio');
    audiokick.setAttribute('src', 'snd/kick.mp3');
    audiokick.play()
}

function playClosed() {
    let audioclosed = document.createElement('audio');
    audioclosed.setAttribute('src', 'snd/closed.mp3');
    audioclosed.play()
}

function playClap() {
    let audioclap = document.createElement('audio');
    audioclap.setAttribute('src', 'snd/clap.mp3');
    audioclap.play()
}

function playEightoeight() {
    let audioEightoeight = document.createElement('audio');
    audioEightoeight.setAttribute('src', 'snd/808.mp3');
    audioEightoeight.play()
}

function playHat() {
    let audiohat = document.createElement('audio');
    audiohat.setAttribute('src', 'snd/hat.mp3');
    audiohat.play()
}

function playSnare() {
    let audiosnare = document.createElement('audio');
    audiosnare.setAttribute('src', 'snd/snare.mp3');
    audiosnare.play()
}

function checkPressesKey(key){
    switch (key.keyCode) {
        case 65:
            playKick()
        break;
        case 90:
            playClosed()
        break;
        case 69:
            playClap()
        break;
        case 81:
            playEightoeight()
        break;
        case 83:
            playHat()
        break;
        case 68:
            playSnare()
        break;
        default:
            console.log("Cette touche n'est pas prise en compte.")
        break;
    }
}



kick.addEventListener('click', event => playKick())
closed.addEventListener('click', event => playClosed())
clap.addEventListener('click', event => playClap())
Eightoeight.addEventListener('click', event => playEightoeight())
hat.addEventListener('click', event => playHat())
snare.addEventListener('click', event => playSnare())


window.addEventListener('keydown', checkPressesKey, false);

