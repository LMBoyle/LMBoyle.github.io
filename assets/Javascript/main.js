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
    des: " Spent one year at NC State University, starting towards Technology, Engineering, and Design Education major.",
    arrow: "top: 6px",
  },
  {
    name: "Elon University",
    period: "2017-2018",
    address: "Elon, North Carolina",
    des: "Spent a semester at Elon University, working towards a business and a exercise science degree.",
    arrow: "top: 161px",
  },
  {
    name: "Nat'l Acad of Sports Medicine",
    period: "2018",
    address: "Burlington, North Carolina",
    des: "Online certification course to become a personal trainer. After years of loving going to the gym, wanted to help others reach their fitness goals.",
    arrow: "top: 270px",
  },
  {
    name: "The Coding Boot Camp at UNC-Chapel Hill",
    period: "2019",
    address: "Raleigh, North Carolina",
    des: "Six month certification course for full stack web development. Technology has always come easy and been a passion of mine, this course allowed for further learning.",
    arrow: "top: 310px",
  },
]
var eduNum = 0;

var work = [
  {
    name: "Brian Doby Shell",
    period: "2017-Present",
    address: "Burlington, North Carolina",
    role: "Shift Manager",
    des: "Two and a half years quickly rising through the ranks to shift manager. Primarily cashier work and renting U-Hauls with minor automotive work.",
    arrow: "top: 85px",
  },
  {
    name: "Elon University Campus Recreation",
    period: "2017-2018",
    address: "Elon, North Carolina",
    role: "Koury Operations Assistant",
    des: "Front desk sign in and watching over patrons on the gym floor during my time at Elon University.",
    arrow: "top: 211px"
  },
]
var workNum = 0;

// FUNCTIONS ==========================
// * On click, scroll to div
// ! Smooth scroll to top
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
      case ("Contact Me"):
        scroll(".secContact");
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

// * On scroll, change selected nav item
  function changedSelected() {
    var cur_pos = $(this).scrollTop();
    // console.log(cur_pos.toFixed(2));

    if (0 < cur_pos && cur_pos < 655) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navContact").removeAttr("id", "selected");
      $(".navHome").attr("id", "selected");
    }
    else if (655 < cur_pos && cur_pos < 1120) {
      $(".navHome").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navContact").removeAttr("id", "selected");
      $(".navAbout").attr("id", "selected");
    }
    else if (1120 < cur_pos && cur_pos < 1700) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navHome").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navContact").removeAttr("id", "selected");
      $(".navRes").attr("id", "selected");
    }
    else if (1700 < cur_pos && cur_pos < 1863) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navContact").removeAttr("id", "selected");
      $(".navSkill").attr("id", "selected");
    }
    else if (1863 < cur_pos && cur_pos < 2388) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navContact").removeAttr("id", "selected");
      $(".navPort").attr("id", "selected");
    }
    else if (2388 < cur_pos) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navContact").attr("id", "selected");
    }
  };

// * On button click, show new school/work
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

// * Show education based on number
  function eduShow(n) {
    if (n >= education.length){
      eduNum = 0;
    }
    else if (n === -1){
      eduNum = education.length - 1;
    }
    // console.log("Working Num: ", eduNum)

    var place = education[eduNum].name;
    var year = education[eduNum].period;
    var city = education[eduNum].address;
    var des = education[eduNum].des;

    if (place === education[2].name) {
      $("#eduPlace").attr("style", "font-size: 15px;")
    }
    else if (place === education[3].name) {
      $("#eduPlace").attr("style", "font-size: 10px;")
    }
    else {
      $("#eduPlace").attr("style", "font-size: 18px;")
    }

    $("#eduPlace").text(place);
    $("#eduLength").text(year);
    $("#eduCity").text(city);
    $("#eduDes").text(des);

    moveArrow();
  }

// * Show work based on number
  function workShow(n) {
    if (n >= work.length){
      workNum = 0;
    }
    else if (n === -1){
      workNum = work.length - 1;
    }
    // console.log("Working Num: ", workNum)

    var place = work[workNum].name;
    var year = work[workNum].period;
    var city = work[workNum].address;
    var role = work[workNum].role;
    var des = work[workNum].des;

    if (place === work[1].name) {
      $("#workPlace").attr("style", "font-size: 13px;");
      $("#workRole").attr("style", "font-size: 16px;");
    }
    else {
      $("#workPlace").attr("style", "font-size: 18px;");
      $("#workRole").attr("style", "font-size: 17px;");
    }

    $("#workPlace").text(place);
    $("#workLength").text(year);
    $("#workCity").text(city);
    $("#workRole").text(role);
    $("#workDes").text(des);

    moveArrow();
  }

// * On dot click, change style and show correct card
  function chooseDot() {
    var dot = this.id;

    switch (dot) {
      case ("eduState"):
        eduNum = 0;
        eduShow(eduNum);
        break;
      case ("workDoby"):
        workNum = 0;
        workShow(workNum);
        break;
      case ("eduElon"):
        eduNum = 1;
        eduShow(eduNum);
        break;
      case ("workRec"):
        workNum = 1;
        workShow(workNum);
        break;
      case ("eduPT"):
        eduNum = 2;
        eduShow(eduNum);
        break;
      case ("eduCode"):
        eduNum = 3;
        eduShow(eduNum);
        break;
      default:
        eduNum = 0;
        eduShow(eduNum);
        workNum = 0;
        workShow(workNum);
    }
  }

// On button click, move school/work arrow
  function moveArrow() {
    switch (eduNum) {
      case (0):
        $(".eduArrow").attr("style", education[0].arrow);
        $("#eduState").addClass("dotSelected");
        $("#eduElon").removeClass("dotSelected");
        $("#eduPT").removeClass("dotSelected");
        $("#eduCode").removeClass("dotSelected");
        break;
      case (1):
        $(".eduArrow").attr("style", education[1].arrow);
        $("#eduElon").addClass("dotSelected");
        $("#eduState").removeClass("dotSelected");
        $("#eduPT").removeClass("dotSelected");
        $("#eduCode").removeClass("dotSelected");
        break;
      case (2):
        $(".eduArrow").attr("style", education[2].arrow);
        $("#eduPT").addClass("dotSelected");
        $("#eduState").removeClass("dotSelected");
        $("#eduElon").removeClass("dotSelected");
        $("#eduCode").removeClass("dotSelected");
        break;
      case (3):
        $(".eduArrow").attr("style", education[3].arrow)
        $("#eduCode").addClass("dotSelected");
        $("#eduState").removeClass("dotSelected");
        $("#eduElon").removeClass("dotSelected");
        $("#eduPT").removeClass("dotSelected");
        break;
      default:
        $(".eduArrow").attr("style", education[0].arrow);
        $("#eduState").addClass("dotSelected");
        $("#eduElon").removeClass("dotSelected");
        $("#eduPT").removeClass("dotSelected");
        $("#eduCode").removeClass("dotSelected");
    }

    switch (workNum) {
      case (0):
        $(".workArrow").attr("style", work[0].arrow);
        $("#workDoby").addClass("dotSelected");
        $("#workRec").removeClass("dotSelected");
        break;
      case (1):
        $(".workArrow").attr("style", work[1].arrow);
        $("#workRec").addClass("dotSelected");
        $("#workDoby").removeClass("dotSelected");
        break;
      default:
        $(".workArrow").attr("style", work[0].arrow);
        $("#workDoby").addClass("dotSelected");
        $("#workRec").removeClass("dotSelected");
    }
  }

// CALLBACK ===========================
$(document).ready(function () {
  // When scrolling, change the selected nav item
  $(window).scroll(changedSelected);

  // On mobile screens, show sidenav
  $('.sidenav').sidenav();

  // Scroll to section when nav item is clicked
  $(".nav-link").click(scrollSelected);

  // On resume card button clicks
  $(".resBtn").click(resumeCycle);

  // On dot select
  $(".dot").click(chooseDot);

})