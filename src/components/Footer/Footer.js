// IMPORT =========================================================================================
import React from 'react';
import './Footer.scss';

// EXPORT =========================================================================================
export default function Footer() {
  return(
    <footer className='page-footer'>
      <div className='footer-copyright'>
        <div className='container' style={{opacity: 0.5}}>
          <span id='footerText'> &copy; 2021 Luke Boyle </span>

          <div className='footerSocial right'>
              <a href='https://www.linkedin.com/in/lukemboyle'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://github.com/LMBoyle'>
                <i className='fab fa-github'></i>
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}