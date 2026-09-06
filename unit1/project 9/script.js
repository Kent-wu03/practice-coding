const videocomponent = document.querySelector("video");

console.log(videocomponent)
function play() {
    console.log("Playing")
    videocomponent.play();
}

function pause() {
    console.log("Pause")
    videocomponent.pause();
}

function minimize() {
    console.log("Minimize")
    videocomponent.requestPictureInPicture();
}