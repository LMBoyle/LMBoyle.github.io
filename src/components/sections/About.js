// IMPORT =========================================================================================
import React from 'react';

// EXPORT =========================================================================================
export default function About() {
  return(
    <div class="row section scrollspy" id="secAbout">

      {/* About Me Heading */}
      <h3 style="text-align:center"> About Me </h3>

      {/* About Me Description  */}
      <div class="col s12 l4">
        <div class="aboutMeDes">
          <p class="info"> 
            Full-stack developer with a lifelong passion for technology. After exploring different paths, came across a coding bootcamp and jumped at the chance to take it. Quickly fell in love with the process of writing code and learning how it works. Currently working on small projects here and there while looking for employment. (If you call me in for an interview, I can bribe you with cookies!)
          </p>
        </div>
      </div>

      {/* About Me Photo  */}
      <div class="col s12 l4">
        <div class="aboutMeImg center">
          <img class="headshot" src="assets/img/headshotWhiteBlack.png" />
        </div>
      </div>

      {/* About Me Personal Info  */}
      <div class="col s12 l4">
        <div class="aboutMeInfo">
          <p class="info perInfo"> Name: <span style="padding-left: 31px"> Luke Boyle </span></p>
          <p class="info perInfo"> Phone: <span style="padding-left: 29px"> (336) 380-7229 </span></p>
          <p class="info perInfo"> Email: <span style="padding-left: 37px"> boylelukem@gmail.com </span></p>
          <p class="info perInfo"> Address: <span style="padding-left: 20px"> Burlington, North Carolina </span></p>
        </div>

        <div class="aboutMeSocial">
          <ul>
            <li>
              {/* linkedIn  */}
              <a href="https://www.linkedin.com/in/lukemboyle" class="btn-floating waves-effect waves-light white">
                <i class="fab fa-linkedin"></i>
              </a>
              {/* Github  */}
              <a href="https://github.com/LMBoyle" class="btn-floating waves-effect waves-light white">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}