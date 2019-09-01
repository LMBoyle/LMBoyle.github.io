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
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 6px",
  },
  {
    name: "Elon University",
    period: "2017-2018",
    address: "Elon, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 161px",
  },
  {
    name: "National Academy of Sports Medicine",
    period: "2018",
    address: "Burlington, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 270px",
  },
  {
    name: "The Coding Boot Campt at UNC-Chapel Hill",
    period: "2019",
    address: "Raleigh, North Carolina",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 336px",
  },
]
var eduNum = 0;

var work = [
  {
    name: "Brian Doby Shell",
    period: "2017-Present",
    address: "Burlington, North Carolina",
    role: "Shift Manager",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 85px",
  },
  {
    name: "Elon University Campus Recreation",
    period: "2017-2018",
    address: "Elon, North Carolina",
    role: "Koury Operations Assistant",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit massa. Etiam sed dapibus nibh, id posuere nunc. Quisque eu felis odio.",
    arrow: "top: 211px"
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
    console.log(cur_pos.toFixed(2))

    if (0 < cur_pos && cur_pos < 656) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navHome").attr("id", "selected");
    }
    else if (656 < cur_pos && cur_pos < 1149) {
      $(".navHome").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navAbout").attr("id", "selected");
    }
    else if (1149 < cur_pos && cur_pos < 1746) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navHome").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navRes").attr("id", "selected");
    }
    else if (1746 < cur_pos && cur_pos < 1940) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navPort").removeAttr("id", "selected");
      $(".navSkill").attr("id", "selected");
    }
    else if (1940 < cur_pos) {
      $(".navAbout").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navRes").removeAttr("id", "selected");
      $(".navSkill").removeAttr("id", "selected");
      $(".navPort").attr("id", "selected");
    }
  };

// On button click, show new school/work
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

// Show education based on number
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

    if (place === education[2].name) {
      $("#eduPlace").text(place);
      $("#eduPlace").attr("style", "font-size: 13px;")
    }
    else if (place === education[3].name) {
      $("#eduPlace").text(place);
      $("#eduPlace").attr("style", "font-size: 11px;")
    }
    else {
      $("#eduPlace").text(place);
      $("#eduPlace").attr("style", "font-size: 18px;")
    }

    $("#eduLength").text(year);
    $("#eduCity").text(city);
    $("#eduDes").text(des);

    moveArrow();
  }

// Show work based on number
  function workShow(n) {
    if (n >= work.length){
      workNum = 0;
    }
    else if (n === -1){
      workNum = work.length - 1;
    }
    console.log("Working Num: ", workNum)

    var place = work[workNum].name;
    var year = work[workNum].period;
    var city = work[workNum].address;
    var role = work[workNum].role;
    var des = work[workNum].des;

    if (place === work[1].name) {
      $("#workPlace").text(place);
      $("#workPlace").attr("style", "font-size: 14px;")
    }
    else {
      $("#workPlace").text(place);
      $("#workPlace").attr("style", "font-size: 18px;")
    }

    $("#workLength").text(year);
    $("#workCity").text(city);
    $("#workRole").text(role);
    $("#workDes").text(des);

    moveArrow();
  }

// On dot click, change style and show correct card
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
  $(window).scroll(changedSelected);

  $(".nav-link").click(scrollSelected);

  // On Resume Card Button Clicks
  $(".resBtn").click(resumeCycle);

  // On Dot Select
  $(".dot").click(chooseDot);

})