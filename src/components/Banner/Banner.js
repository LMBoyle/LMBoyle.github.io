// IMPORT =========================================================================================
import React from 'react';
import './Banner.scss';

// EXPORT =========================================================================================
export default function Banner() {
  return(
    <div className='index-banner ' id='secTitle'>
    <div id='indexOverlay'>
      <div className='container titleContain'>

        <div id='titleInfo'>
          <h1 className='titleName header center col s12'> Luke Boyle </h1>
  
          <div className='row center'>
            <p className='titleAdj header col s12'> Creative - Professional - Passionate </p>
          </div>
  
          <div className='row center'>
            <div className='titleBox col s12'> Full Stack Developer </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}