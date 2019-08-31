// VARS ===============================
var sections = $('.section');
var nav = $('header');
var nav_height = nav.outerHeight();
var text = $('#text');


// FUNCTIONS ==========================
// * On click, scroll to div
// TODO Smooth scroll to top
  function scrollSelected() {
    switch (this.text) {
      case ("Home"):
        scroll(".secTitle");
        break;
      case ("About"):
        scroll(".secAbout");
        break;
      case ("Resumearrow_drop_down"):
        scroll(".secResume");
        break;
      case ("Skills"):
        scroll(".secSkills");
        break;      
      case ("Portfolio"):
        scroll(".secPort");
        break;
      default:
        scroll(".secTitle");
    }

    function scroll(sec) {
      var top = $(sec).offset().top - nav_height;

      if (sec === ".secTitle") {
        $('html,body').animate({
          scrollTop: $(sec).top},
          'slow');
        }
      else {
        $('html,body').animate({
          scrollTop: top},
          'slow');
        }
      }
    };

// TODO On scroll, change selected nav item
  function changedSelected() {
    var cur_pos = $(this).scrollTop();
  
    sections.each(function() {
      var top = $(this).offset().top - nav_height;
      var bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeAttr("id");
  
        $(this).attr('id', 'selected');
        // nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      };
    });
  };

// TODO On button click, show new school/work
// TODO On button click, move school/work arrow





// CALLBACK ===========================
$(document).ready(function () {
  $(".nav-link").click(scrollSelected);
})