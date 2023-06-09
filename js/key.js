//Audio
const boom = new Audio('../sounds/boom.wav');
const clap = new Audio('../sounds/clap.wav');
const hihat = new Audio('../sounds/hihat.wav');
const kick = new Audio('../sounds/kick.wav');
const openhat = new Audio('../sounds/openhat.wav');
const ride = new Audio('../sounds/ride.wav');
const snare = new Audio('../sounds/snare.wav');
const tink = new Audio('../sounds/tink.wav');
const tom = new Audio('../sounds/tom.wav');

//Delay Function
const delay = ms => new Promise(res => setTimeout(res, ms));

//Function for Changing Button
async function changeButton(name) {
    let btn = document.getElementById(name)
    btn.classList.add("active")
    await delay(250);
    btn.classList.remove("active")
}

//Function for Playing
function playAudio(name) {
    if (name.toLowerCase() == "boom") {
        boom.play()
    } else if (name.toLowerCase() == "clap") {
        clap.play()
    } else if (name.toLowerCase() == "hihat") {
        hihat.play()
    } else if (name.toLowerCase() == "kick") {
        kick.play()
    } else if (name.toLowerCase() == "openhat") {
        openhat.play()
    } else if (name.toLowerCase() == "ride") {
        ride.play()
    } else if (name.toLowerCase() == "snare") {
        snare.play()
    } else if (name.toLowerCase() == "tink") {
        tink.play()
    } else if (name.toLowerCase() == "tom") {
        tom.play()
    }
}

//Function for Button Click
function buttonClick(name) {
    playAudio(name)
}

//Function for User Inputs
function input(event) {
    if (event.key == "1") {
        playAudio("boom")
        changeButton("boom")
    } else if (event.key == "2") {
        playAudio("clap")
        changeButton("clap")
    } else if (event.key == "3") {
        playAudio("hihat")
        changeButton("hihat")
    } else if (event.key == "4") {
        playAudio("kick")
        changeButton("kick")
    } else if (event.key == "5") {
        playAudio("openhat")
        changeButton("openhat")
    } else if (event.key == "6") {
        playAudio("ride")
        changeButton("ride")
    } else if (event.key == "7") {
        playAudio("snare")
        changeButton("snare")
    } else if (event.key == "8") {
        playAudio("tink")
        changeButton("tink")
    } else if (event.key == "9") {
        playAudio("tom")
        changeButton("tom")
    }
}