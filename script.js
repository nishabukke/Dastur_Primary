
// about tabs

function activeTab(evt, id) {
           
  // Get all elements with class="tablinks" and remove the class "active"
   let tabactive = document.getElementsByClassName("TabButtonSelected");
   tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

   document.getElementById(id).style.display = "block";
   evt.currentTarget.className += " TabButtonSelected";

   displaySection(evt,id)
}

function displaySection(evt, id) {

   let tabactive = document.getElementsByClassName("tab-section");
   tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
   // add below line of codes
   [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
   document.getElementById("Section" + id).style.display = "block";
   evt.currentTarget.className += " d-chart-show";

}

// sticky header

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $("#sticky-wrapper").position().top) {
    $('.sticky-area').css('width', '100%');
    $('.sticky-area').css('max-width', '1600px');
    $('.sticky-area').css('margin', '0 auto');
    $('.sticky-area').css('position', 'fixed');
    $('.sticky-area').css('top', '0px');
    $('.sticky-area').css('background', '#e9f2ff');
    $('.sticky-area ul.nav .nav-li > a').css('color', '#085291');
    $('.school-name').css('color', '#085291');
    $('.sticky-area ul li a').css('font-weight', '700');
    $('.sticky-area').css('z-index', '111');
    $('.sticky-area').css('box-shadow', '0 3px 5px -2px #ebe8e8');
    $('#sticky-wrapper').addClass('is-sticky');

  }
  else{
  $('.sticky-area').removeAttr('style');
  $('.sticky-area ul.nav .nav-li > a').removeAttr('style');
  $('.school-name').removeAttr('style');

  }
  
});
