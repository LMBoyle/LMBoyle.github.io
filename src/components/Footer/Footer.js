// IMPORT =========================================================================================
import React from 'react';
import './Footer.scss';

// EXPORT =========================================================================================
export default function Footer() {
  return(
    <footer class='page-footer'>
      <div class='footer-copyright'>
        <div class='container' style={{opacity: 0.5}}>
          <span id='footerText'> &copy; 2021 Luke Boyle </span>

          <div class='footerSocial right'>
              <a href='https://www.linkedin.com/in/lukemboyle'>
                <i class='fab fa-linkedin'></i>
              </a>
              <a href='https://github.com/LMBoyle'>
                <i class='fab fa-github'></i>
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}