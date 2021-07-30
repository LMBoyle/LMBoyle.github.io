// IMPORT =========================================================================================
import React from 'react';
import './Resume.scss';

// EXPORT =========================================================================================
export default function Resume() {
  return(
    <div className='row section scrollspy' id='secResume'>
      
      {/* Education  */}
      <div className='eduBox col m12 l5'>
        <h3 className='center'> Education </h3>

        <div className='education card-panel'>
          <span className='arrow eduArrow hide-on-med-and-down'></span>
          <div>
            <p className='eduInfo' style={{maxHeight: '43.8px'}}><span className='hide-on-med-and-down' style={{paddingRight: '25px'}}> Name: </span><span id='eduPlace'> NC State University </span></p>
            <p className='eduInfo'><span className='hide-on-med-and-down' style={{paddingRight: '23px'}}> Period: </span><span id='eduLength'> 2015-2016 </span></p>
            <p className='eduInfo'><span className='hide-on-med-and-down' style={{paddingRight: '12px'}}> Address: </span><span id='eduCity'> Raleigh, North Carolina </span></p>
            <p className='eduInfo' id='eduDes'>
              Spent one year at NC State University, starting towards Technology, Engineering, and Design Education major.
            </p>
            <button className='waves-light white btn-floating btn-small resBtn' id='eduLeft'><i className='material-icons'>chevron_left</i></button>
            <button className='waves-light white btn-floating btn-small resBtn' id='eduRight'><i className='material-icons'>chevron_right</i></button>
          </div>
        </div>
      </div>

      {/* Timeline Bar  */}
      <div className='secTime hide-on-med-and-down'>
        <span className='timelineBar'></span>
        <span className='dot dotSelected' id='eduState'></span>
        <span className='dot dotSelected' id='workDoby'></span>
        <span className='dot' id='eduElon'></span>
        <span className='dot' id='workRec'></span>
        <span className='dot' id='eduPT'></span>
        <span className='dot' id='eduCode'></span>
      </div>

      {/* Work  */}
      <div className='workBox col m12 l5 right'>
      <h3 className='center'> Work </h3>

      <div className='work card-panel'>
        <span className='arrow workArrow hide-on-med-and-down'></span>
        <div>
          <p className='workInfo' style={{maxHeight: '43.8px'}}><span className='hide-on-med-and-down' style={{paddingRight: '25px'}}> Name: </span><span id='workPlace'> Brian Doby Shell </span></p>
          <p className='workInfo'><span className='hide-on-med-and-down' style={{paddingRight: '23px'}}> Period: </span><span id='workLength'> 2017-2020 </span></p>
          <p className='workInfo'><span className='hide-on-med-and-down' style={{paddingRight: '12px'}}> Address: </span><span id='workCity'> Burlington, North Carolina </span></p>
          <p className='workInfo'><span className='hide-on-med-and-down' style={{paddingRight: '36px'}}> Role: </span><span id='workRole'> Shift Manager </span></p>
          <p className='workInfo' id='workDes'>Two and a half years quickly rising through the ranks to shift manager. Primarily cashier work and renting U-Hauls with minor automotive work.</p>
          <button className='waves-light white btn-floating btn-small resBtn' id='workLeft'><i className='material-icons'>chevron_left</i></button>
          <button className='waves-light white btn-floating btn-small resBtn' id='workRight'><i className='material-icons'>chevron_right</i></button>  
        </div>
      </div>
    </div>
  
    </div>
  )
}
