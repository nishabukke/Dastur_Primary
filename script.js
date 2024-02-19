// mobile menu

function openNav(){
  // var element = document.getElementsByClassName("menu_mobile");
  document.getElementById("menu_mobile").style.marginLeft = '0px';
  document.getElementById('menu_mobile_overlay').style.display = 'block';
  document.getElementById('icon-cancel').style.display = 'block';
}

function closeNav(){
  // var element = document.getElementsByClassName("menu_mobile");
  document.getElementById("menu_mobile").style.marginLeft = '-300px';
  document.getElementById('menu_mobile_overlay').style.display = 'none';
  document.getElementById('icon-cancel').style.display = 'none';
}

document.querySelectorAll('.accordion-title').forEach((accordionToggle) => {

  accordionToggle.addEventListener('click', () => { 
    
    const accordionItem = accordionToggle.parentNode;
    const accordionContent = accordionToggle.nextElementSibling;
  
  // If this accordion item is already open, close it.
  
  if (accordionContent.style.maxHeight) {
  accordionContent.style.maxHeight = null;
  accordionItem.classList.remove('active');
    } else {
    accordionContent.style.maxHeight = 'max-content';
    // accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    accordionItem.classList.add('active');
    }
    });
    });




// Open the Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    // var mainContainer = document.getElementById('top_header');
    //   mainContainer.style.display = 'none';
  }
  
  // Close the Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // var mainContainer = document.getElementById('top_header');
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
 