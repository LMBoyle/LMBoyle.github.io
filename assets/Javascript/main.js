// VARS ===============================



// FUNCTIONS ==========================

// On scroll, change selected nav item
  var sections = $('.section');
  var nav = $('header');
  var nav_height = nav.outerHeight();
  
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

// On click, scroll to div
  $(".nav-link").click(function() {
    var text = $('#text');
    
    switch (this.text) {
      case ("Home"):
        scroll(".secTitle");
        break;
      case ("About"):
        scroll(".secAbout");
        break;
      case ("Resume"):
        scroll(".secResume");
        break;
      case ("Skills"):
        scroll(".secSkills");
        break;      
      case ("Portfolio"):
        scroll(".secPort");
        break;
    }

    function scroll(sec) {
      $('html,body').animate({
        scrollTop: $(sec).offset().top},
        'slow');
      }
  });


// CALLBACK ===========================
$(document).ready(function () {
  // $(window).on('scroll', changedSelected());
})