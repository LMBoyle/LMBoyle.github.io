// IMPORT =========================================================================================
import React from 'react';
import './Skills.scss';

// EXPORT =========================================================================================
export default function Skills() {
  return(
    <div className="row section scrollspy" id="secSkills">
      
      {/* Programming */}
      <div className="programming col s12 m6 center">
          <h3> Programming Skills </h3>

          <div className="skillBack z-depth-2">
            <i className="fab fa-github proSkill" ></i>
            <span className="tooltipText"> Github </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-gitlab proSkill"></i>
            <span className="tooltipText"> Gitlab </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-html5 proSkill"></i>
            <span className="tooltipText"> HTML5 </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-css3-alt proSkill"></i>
            <span className="tooltipText"> CSS3 </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-js-square proSkill"></i>
            <span className="tooltipText"> Javascript </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="icon-jquery proSkill"></i>
            <span className="tooltipText"> jQuery </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="icon-reactjs proSkill" id="reactIcon"></i>
            <span className="tooltipText"> React </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-bootstrap proSkill"></i>
            <span className="tooltipText"> Bootstrap </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fab fa-node-js proSkill"></i>
            <span className="tooltipText"> Node.js </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="icon-heroku proSkill" id="herokuIcon"></i>
            <span className="tooltipText"> Heroku </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="icon-mongodb proSkill"></i>
            <span className="tooltipText"> Mongo DB </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="icon-mysql-alt proSkill"></i>
            <span className="tooltipText"> My SQL </span>
          </div>

        </div>

      {/* Hobbies */}
      <div className="hobbies col s12 m6 center">
          <h3> Hobbies & Interests </h3>

          <div className="skillBack z-depth-2">
            <i className="fas fa-dumbbell hobInt"></i>
            <span className="tooltipText"> Working Out </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fas fa-feather-alt hobInt"></i>
            <span className="tooltipText"> Writing </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fas fa-book-reader hobInt"></i>
            <span className="tooltipText"> Reading </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fas fa-cookie-bite hobInt"></i>
            <span className="tooltipText"> Baking </span>
          </div>

          <div className="skillBack z-depth-2">
            <i className="fas fa-gamepad hobInt"></i>
            <span className="tooltipText"> Gaming </span>
          </div>
        </div>
    
    </div>
  )
}
