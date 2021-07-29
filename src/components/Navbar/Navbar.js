// IMPORT =========================================================================================
import React from 'react';
import './Navbar.scss'

// EXPORT =========================================================================================
export default function Navbar() {
  return(
    <header>
      {/* Nav Bar */}
      <div class='navbar-fixed'>
        <nav role='navigation'>
          <div class='nav-wrapper container'>
            <a href='https://lmboyle.github.io/' data-target='mobileNav' class='sidenav-trigger' ><i class='material-icons' style={{lineHeight: '50px'}}>menu</i></a>
            <ul id='nav-mobile' class='right hide-on-med-and-down'>
  
              <li class='nav-item selected'>
                <a class='nav-link navHome' href='#secTitle'><i class='fas fa-home'></i>Home</a>
              </li>
  
              <li class='nav-item'>
                <a class='nav-link navAbout' href='#secAbout'><i class='fas fa-address-card'></i>About</a>
              </li>
  
              <li class='nav-item'>
                <div class='dropdown'>
                    <a class='nav-link navRes' href='#secResume'><i class='fas fa-user-graduate'></i>Resume<i class='material-icons right'>arrow_drop_down</i></a>
                    <div class='dropdown-content'>
                      <button><i class='fas fa-user-graduate'></i>Resume<i class='material-icons right'>arrow_drop_down</i></button>
                      <a target='_blank' href='assets/img/LukeBoyle_Resume.pdf' style={{padding:'5px', fontSize: '13px'}}><i class='fas fa-file-download'></i>Download Resume</a>
                    </div>
                </div>
              </li>

              <li class='nav-item'>
                <a class='nav-link navSkill' href='#secSkills'><i class='fas fa-user-tie'></i>Skills</a>
              </li>
  
              <li class='nav-item'>
                <a class='nav-link navPort' href='#secPort'><i class='fas fa-laptop-code'></i>Portfolio</a>
              </li>

              <li class='nav-item'>
                <a class='nav-link navContact' href='#secContact'><i class='fas fa-envelope-open-text'></i>Contact Me</a>
              </li>
  
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Side Bar */}
      <ul class='sidenav' id='mobileNav'>
        <li class='nav-item'>
          <a href='https://lmboyle.github.io/' class='nav-link navHome' id='selected'><i class='fas fa-home'></i>Home</a>
        </li>
        <li class='nav-item'>
          <a href='https://lmboyle.github.io/' class='nav-link navAbout'><i class='fas fa-address-card'></i>About</a>
        </li>
        <li class='nav-item'>
          <div class='dropdown'>
              <a href='https://lmboyle.github.io/' class='nav-link navRes'><i class='fas fa-user-graduate'></i>Resume<i class='material-icons right'>arrow_drop_down</i></a>
              <div class='dropdown-content'>
                <a href='https://lmboyle.github.io/' class='nav-link'><i class='fas fa-user-graduate'></i>Resume<i class='material-icons right'>arrow_drop_down</i></a>
                <a target='_blank' href='assets/img/LukeBoyle_Resume.pdf' style={{padding:'5px', fontSize: '13px'}}><i class='fas fa-file-download'></i>Download Resume</a>
              </div>
          </div>
        </li>
        <li class='nav-item'>
          <a class='nav-link navSkill' href='https://lmboyle.github.io/'><i class='fas fa-user-tie'></i>Skills</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link navPort' href='https://lmboyle.github.io/'><i class='fas fa-laptop-code'></i>Portfolio</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link navContact' href='https://lmboyle.github.io/'><i class='fas fa-envelope-open-text'></i>Contact Me</a>
        </li>
      </ul>
    </header>
  )
}
