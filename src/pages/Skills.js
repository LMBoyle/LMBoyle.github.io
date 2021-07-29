// IMPORT =========================================================================================
import React from 'react';

// EXPORT =========================================================================================
export default function Skills() {
  return(
    <div class="row section scrollspy" id="secSkills">
      
      {/* Programming */}
      <div class="programming col s12 m6 center">
          <h3> Programming Skills </h3>

          <div class="skillBack z-depth-2">
            <i class="fab fa-github proSkill" ></i>
            <span class="tooltipText"> Github </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-gitlab proSkill"></i>
            <span class="tooltipText"> Gitlab </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-html5 proSkill"></i>
            <span class="tooltipText"> HTML5 </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-css3-alt proSkill"></i>
            <span class="tooltipText"> CSS3 </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-js-square proSkill"></i>
            <span class="tooltipText"> Javascript </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="icon-jquery proSkill"></i>
            <span class="tooltipText"> jQuery </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="icon-reactjs proSkill" id="reactIcon"></i>
            <span class="tooltipText"> React </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-bootstrap proSkill"></i>
            <span class="tooltipText"> Bootstrap </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fab fa-node-js proSkill"></i>
            <span class="tooltipText"> Node.js </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="icon-heroku proSkill" id="herokuIcon"></i>
            <span class="tooltipText"> Heroku </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="icon-mongodb proSkill"></i>
            <span class="tooltipText"> Mongo DB </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="icon-mysql-alt proSkill"></i>
            <span class="tooltipText"> My SQL </span>
          </div>

        </div>

      {/* Hobbies */}
      <div class="hobbies col s12 m6 center">
          <h3> Hobbies & Interests </h3>

          <div class="skillBack z-depth-2">
            <i class="fas fa-dumbbell hobInt"></i>
            <span class="tooltipText"> Working Out </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fas fa-feather-alt hobInt"></i>
            <span class="tooltipText"> Writing </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fas fa-book-reader hobInt"></i>
            <span class="tooltipText"> Reading </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fas fa-cookie-bite hobInt"></i>
            <span class="tooltipText"> Baking </span>
          </div>

          <div class="skillBack z-depth-2">
            <i class="fas fa-gamepad hobInt"></i>
            <span class="tooltipText"> Gaming </span>
          </div>
        </div>
    
    </div>
  )
}
