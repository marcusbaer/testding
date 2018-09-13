var sliderImages, slideIndex;

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }



function checkSlide(e){
  console.log(e);
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight)- sliderImage.height /2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}


function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-show");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 7000); // Change image every 7 seconds
}


function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
} else {
    document.getElementById("myBtn").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function initaliseImages() {
    sliderImages = document.querySelectorAll('.slide-in');
    slideIndex = 0;
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    window.addEventListener('scroll', debounce(checkSlide, ));

    carousel();

}