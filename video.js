const video = document.getElementById("video");
const duration = 32;
const pageHeight = 1342;

setInterval(() => {
  var scroll = window.scrollY;

  var value = scroll * duration / pageHeight;

  video.currentTime = value;
}, 33.3);