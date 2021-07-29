// IMPORT =========================================================================================
import React from 'react';

// EXPORT =========================================================================================
export default function Resume() {
  return(
    <div class="row section scrollspy" id="secResume">
      
      {/* Education  */}
      <div class="eduBox col m12 l5">
        <h3 class="center"> Education </h3>

        <div class="education card-panel">
          <span class="arrow eduArrow hide-on-med-and-down"></span>
          <div>
            <p class="eduInfo" style="max-height: 43.8px"><span class="hide-on-med-and-down" style="padding-right: 25px"> Name: </span><span id="eduPlace"> NC State University </span></p>
            <p class="eduInfo"><span class="hide-on-med-and-down" style="padding-right: 23px"> Period: </span><span id="eduLength"> 2015-2016 </span></p>
            <p class="eduInfo"><span class="hide-on-med-and-down" style="padding-right: 12px"> Address: </span><span id="eduCity"> Raleigh, North Carolina </span></p>
            <p class="eduInfo" id="eduDes">
              Spent one year at NC State University, starting towards Technology, Engineering, and Design Education major.
            </p>
            <a class="waves-light white btn-floating btn-small resBtn" id="eduLeft"><i class="material-icons">chevron_left</i></a>
            <a class="waves-light white btn-floating btn-small resBtn" id="eduRight"><i class="material-icons">chevron_right</i></a>
          </div>
        </div>
      </div>

      {/* Timeline Bar  */}
      <div class="secTime hide-on-med-and-down">
        <span class="timelineBar"></span>
        <span class="dot dotSelected" id="eduState"></span>
        <span class="dot dotSelected" id="workDoby"></span>
        <span class="dot" id="eduElon"></span>
        <span class="dot" id="workRec"></span>
        <span class="dot" id="eduPT"></span>
        <span class="dot" id="eduCode"></span>
      </div>

      {/* Work  */}
      <div class="workBox col m12 l5 right">
      <h3 class="center"> Work </h3>

      <div class="work card-panel">
        <span class="arrow workArrow hide-on-med-and-down"></span>
        <div>
          <p class="workInfo" style="max-height: 43.8px"><span class="hide-on-med-and-down" style="padding-right: 25px"> Name: </span><span id="workPlace"> Brian Doby Shell </span></p>
          <p class="workInfo"><span class="hide-on-med-and-down" style="padding-right: 23px"> Period: </span><span id="workLength"> 2017-2020 </span></p>
          <p class="workInfo"><span class="hide-on-med-and-down" style="padding-right: 12px"> Address: </span><span id="workCity"> Burlington, North Carolina </span></p>
          <p class="workInfo"><span class="hide-on-med-and-down" style="padding-right: 36px"> Role: </span><span id="workRole"> Shift Manager </span></p>
          <p class="workInfo" id="workDes">Two and a half years quickly rising through the ranks to shift manager. Primarily cashier work and renting U-Hauls with minor automotive work.</p>
          <a class="waves-light white btn-floating btn-small resBtn" id="workLeft"><i class="material-icons">chevron_left</i></a>
          <a class="waves-light white btn-floating btn-small resBtn" id="workRight"><i class="material-icons">chevron_right</i></a>  
        </div>
      </div>
    </div>
  
    </div>
  )
}
