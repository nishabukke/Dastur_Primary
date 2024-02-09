
// Open the Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    // var mainContainer = document.getElementById('mainC');
    //   mainContainer.style.display = 'none';
  }
  
  // Close the Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // var mainContainer = document.getElementById('mainC');
    // mainContainer.style.display = 'block';
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n, slideId) {
    showSlides(slideIndex += n, slideId);
  }
  
  // Thumbnail image controls
  function currentSlider(n,slideId) {
    showSlides(slideIndex = n, slideId);
  }
  
  function showSlides(n, slideId) {
    var i;
    var slides = document.getElementsByClassName(slideId);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  
  
  