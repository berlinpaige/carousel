var interval = 4500;
var switching = setInterval("forwardButtonClicked(visiblePhotoIndex, slides.length)", interval);
var forwardButton = document.getElementById("forwardButton");
var backButton = document.getElementById("backButton");
var pauseButton = document.getElementById("pauseButton");
var leafButtons = document.getElementsByClassName("leaf");
var slides = document.getElementsByTagName("li");
var visiblePhotoIndex = 0;

forwardButton.addEventListener('click', function(event) {
  forwardButtonClicked(visiblePhotoIndex, slides.length);
});
backButton.addEventListener('click', function(event) {
  backButtonClicked(visiblePhotoIndex, slides.length);
});
pauseButton.addEventListener('click', function(event) {
  if (pauseButton.classList.contains("play")){
    pauseButton.classList.remove("play");
    clearInterval(switching);
  }else{
    pauseButton.classList.add("play");
    switching = setInterval("forwardButtonClicked(visiblePhotoIndex, slides.length)", interval);
  }
});

function forwardButtonClicked(photoIndex, totalSlides) {
  slides[visiblePhotoIndex].classList.remove("active");
  if(photoIndex === totalSlides-1){
    visiblePhotoIndex = 0;  
  }else{
    visiblePhotoIndex = photoIndex+1;
  }
  slides[visiblePhotoIndex].classList.add("active");
}
function backButtonClicked(photoIndex, totalSlides) {
  slides[visiblePhotoIndex].classList.remove("active");
  if(photoIndex === 0){
    visiblePhotoIndex = totalSlides-1;
  }else{
    visiblePhotoIndex = photoIndex-1;
  }
  slides[visiblePhotoIndex].classList.add("active");
}
//leafButtonClicked//
for(var i = 0; i < leafButtons.length; i++) {
  leafButtons[i].addEventListener('click', function(event) {
    for(var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    this.parentNode.classList.add("active");
    for(var i = 0; i < slides.length; i++) {
      if(slides[i].classList.contains("active")) {
        visiblePhotoIndex = i;
      }
    }
  });
}



