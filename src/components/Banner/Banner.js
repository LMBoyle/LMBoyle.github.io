// IMPORT =========================================================================================
import React from 'react';
import './Banner.scss';

// EXPORT =========================================================================================
export default function Banner() {
  return(
    <div class='index-banner ' id='secTitle'>
    <div id='indexOverlay'>
      <div class='container titleContain'>

        <div id='titleInfo'>
          <h1 class='titleName header center col s12'> Luke Boyle </h1>
  
          <div class='row center'>
            <p class='titleAdj header col s12'> Creative - Professional - Passionate </p>
          </div>
  
          <div class='row center'>
            <div class='titleBox col s12'> Full Stack Developer </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}