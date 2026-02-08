const slider = document.getElementById("slider");

function slideRight() {
  slider.scrollLeft += 420; // image width + gap
}

function slideLeft() {
  slider.scrollLeft -= 420;
}
