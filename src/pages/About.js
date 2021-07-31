// IMPORT =========================================================================================
import React from 'react';
import './About.scss';
import '../styles/scss/_animations.scss'

// EXPORT =========================================================================================
export default function About() {

  return(
    <section  id='secAbout'>
        
      <div className='typeCode'>
        {/* Name */}
        <h1 className='codeText col-start-2 col-span-4 text-5xl text-brightGreen font-code'>
          Luke Boyle
          <div className="cursor"></div>
        </h1>
        {/* Title/s */}
        <h2 className='codeText text-lg col-start-2 col-span-4 text-brightGreen font-code'>
          Technical Consultant Team Lead @ Salesforce
          <div className="cursor"></div>
        </h2>
        <p className='codeText text-lg col-start-2 col-span-4 text-brightGreen font-code'>
          Teaching Assistant @ Trilogy Education Services, a 2U, Inc. brand
          <div className="cursor"></div>
        </p>
        
        {/* <h2> Freelance developer and UI/UX/Design </h2> */}
        <p className='codeText text-lg col-start-2 col-span-4 text-brightGreen font-code'>
          Amateur Baker
          <div className="cursor"></div>
        </p>
      </div>
     
      <br/>

      {/* About */}
      <p className='text-s col-start-2 col-span-4 text-brightGreen font-code'>
        Full-stack developer with a lifelong passion for technology. After exploring different paths, came across a coding bootcamp and jumped at the chance to take it. Quickly fell in love with the process of writing code and learning how it works. Always exploring new technologies and expanding my knowledge.
      </p>

      {/* Links */}

    </section>
  )
}

// {/* <section id='secAbout'>
//       <div className='row section scrollspy'>

//       {/* About Me Heading */}
//       <h3 style={{textAlign:'center'}}> About Me </h3>

//       {/* About Me Description  */}
//       <div className='col s12 l4'>
//         <div className='aboutMeDes'>
//           <p className='info'> 
//             Full-stack developer with a lifelong passion for technology. After exploring different paths, came across a coding bootcamp and jumped at the chance to take it. Quickly fell in love with the process of writing code and learning how it works. Currently working on small projects here and there while looking for employment. (If you call me in for an interview, I can bribe you with cookies!)
//           </p>
//         </div>
//       </div>

//       {/* About Me Photo  */}
//       <div className='col s12 l4'>
//         <div className='aboutMeImg center'>
//           <img className='headshot' src='assets/img/headshotWhiteBlack.png' alt='' />
//         </div>
//       </div>

//       {/* About Me Personal Info  */}
//       <div className='col s12 l4'>
//         <div className='aboutMeInfo'>
//           <p className='info perInfo'> Name: <span style={{paddingLeft: '31px'}}> Luke Boyle </span></p>
//           <p className='info perInfo'> Phone: <span style={{paddingLeft: '29px'}}> (336) 380-7229 </span></p>
//           <p className='info perInfo'> Email: <span style={{paddingLeft: '37px'}}> boylelukem@gmail.com </span></p>
//           <p className='info perInfo'> Address: <span style={{paddingLeft: '20px'}}> Burlington, North Carolina </span></p>
//         </div>

//         <div className='aboutMeSocial'>
//           <ul>
//             <li>
//               {/* linkedIn  */}
//               <a href='https://www.linkedin.com/in/lukemboyle' className='btn-floating waves-effect waves-light white'>
//                 <i className='fab fa-linkedin'></i>
//               </a>
//               {/* Github  */}
//               <a href='https://github.com/LMBoyle' className='btn-floating waves-effect waves-light white'>
//                 <i className='fab fa-github'></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
    
//     </div>
//     </section> */}