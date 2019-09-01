// VARS ===============================
var sections = $('.section');
var nav = $('header');
var nav_height = nav.outerHeight();
var text = $('#text');

var education = [
  {
    name: "NC State University",
    period: "2015-2016",
    address: "Raleigh, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
  {
    name: "Elon University",
    period: "2017-2018",
    address: "Elon, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
  {
    name: "National Academy of Sports Medicine",
    period: "2018",
    address: "Burlington, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
  {
    name: "The Coding Boot Campt at UNC-Chapel Hill",
    period: "2019",
    address: "Raleigh, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
]
var eduNum = 0;

var work = [
  {
    name: "Elon University Campus Recreation",
    period: "2017-2018",
    address: "Elon, North Carolina",
    role: "Koury Operations Assistant",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
  {
    name: "Brian Doby Shell",
    period: "2017-Present",
    address: "Burlington, North Carolina",
    role: "Shift Manager",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio."
  },
]
var workNum = 0;

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
  function resumeCycle() {
    var btn = this.id;

    switch (btn) {
      case ("eduLeft"):
        eduNum --;
        eduShow(eduNum);
        break;
      case ("eduRight"):
        eduNum ++;
        eduShow(eduNum);
        break;
      case ("workLeft"):
        workNum --;
        workShow(workNum);
        break;
      case ("workRight"):
        workNum ++;
        workShow(workNum);
        break;
    }
  }

  function eduShow(n) {
    if (n >= education.length){
      eduNum = 0;
    }
    else if (n === -1){
      eduNum = education.length - 1;
    }
    console.log("Working Num: ", eduNum)

    var place = education[eduNum].name;
    var year = education[eduNum].period;
    var city = education[eduNum].address;
    var des = education[eduNum].des;

    $("#eduPlace").text(place);
    $("#eduLength").text(year);
    $("#eduCity").text(city);
    $("#eduDes").text(des);

    /*
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
      */
  }




// CALLBACK ===========================
$(document).ready(function () {
  $(".nav-link").click(scrollSelected);

  // On Resume Card Button Clicks
  $(".resBtn").click(resumeCycle);

})