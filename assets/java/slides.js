var currentSlide = 1;
var availableSlides = [
  "url(assets/media/s1.jpg)",
  "url(assets/media/s2.jpg)",
  "url(assets/media/s3.jpg)",
  "url(assets/media/s4.jpg)",
  "url(assets/media/s5.jpg)",
  "url(assets/media/s6.jpg)",
  "url(assets/media/s7.jpg)",
  "url(assets/media/s8.jpg)"
]

var timeo;

function plusSlides(x){
  clearTimeout(timeo);
  slide = document.getElementById('inner_slide');
  currentSlide += x;
  if(currentSlide <= 0){
    currentSlide = availableSlides.length;
  }
  else if(currentSlide > availableSlides.length){
    currentSlide = 1;
  }
  slide.style.backgroundImage = availableSlides[currentSlide-1];
  setNum(currentSlide);
  timeo = setTimeout(plusSlides, 5000, 1);
}
function setNum( i ){
  num = document.getElementById('slidenum');
  num.innerHTML = String(i)+ "/" + String(availableSlides.length);
}