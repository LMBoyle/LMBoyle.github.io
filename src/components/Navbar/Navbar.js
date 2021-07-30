// IMPORT =========================================================================================

import React, { useState, Component } from "react";
import { HomeIcon, IdentificationIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import {Link} from 'react-scroll';
// import './Navbar.scss';

// EXPORT =========================================================================================

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    // Nav Bar
    <nav className="bg-black" role='navigation'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-right">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Home/Top */}
                <Link
                  activeClass="active" 
                  to="secTitle" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <HomeIcon className='inline-block h-5 w-5 mr-1'></HomeIcon>
                  Home
                </Link>

                {/* About */}
                <Link
                  activeClass="active" 
                  to="secAbout" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <IdentificationIcon className='inline-block h-5 w-5 mr-1'></IdentificationIcon>
                  About
                </Link>

                {/* Resume */}
                <Link
                  activeClass="active" 
                  to="secResume" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <AcademicCapIcon className='inline-block h-5 w-5 mr-1'></AcademicCapIcon>
                  Resume
                </Link>

                {/* Skills */}
                <Link
                  activeClass="active" 
                  to="secSkills" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <i className='inline-block h-5 w-5 mr-1 fas fa-user-tie'></i>
                  Skills
                </Link>

                {/* Portfolio */}
                <Link
                  activeClass="active" 
                  to="secPortfolio" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <i className='inline-block h-5 w-5 mr-1 fas fa-laptop-code'></i>
                  Portfolio
                </Link>

                {/* Contact */}
                <Link
                  activeClass="active" 
                  to="secContact" 
                  spy={true} 
                  smooth={true}
                  className="inline-flex items-center hover:shadow-test text-brightGreen px-3 py-2 text-sm font-code"
                >
                  <i className='inline-block h-5 w-5 mr-1 fas fa-envelope-open-text'></i>
                  Contact
                </Link>

              </div> 
            </div>
          </div>
          
          {/* Hamburger Icon */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>

  )
}

// <header>
    //   {/* Nav Bar */}
    //   <div className='navbar-fixed'>
    //     <nav role='navigation'>
    //       <div className='nav-wrapper container'>
    //         <a href='https://lmboyle.github.io/' data-target='mobileNav' className='sidenav-trigger' ><i className='material-icons' style={{lineHeight: '50px'}}>menu</i></a>
    //         <ul id='nav-mobile' className='right hide-on-med-and-down'>
  
    //           <li className='nav-item selected'>
    //             <a className='nav-link navHome' href='#secTitle'><i className='fas fa-home'></i>Home</a>
    //           </li>
  
    //           <li className='nav-item'>
    //             <a className='nav-link navAbout' href='#secAbout'><i className='fas fa-address-card'></i>About</a>
    //           </li>
  
    //           <li className='nav-item'>
    //             <div className='dropdown'>
    //                 <a className='nav-link navRes' href='#secResume'><i className='fas fa-user-graduate'></i>Resume<i className='material-icons right'>arrow_drop_down</i></a>
    //                 <div className='dropdown-content'>
    //                   <button><i className='fas fa-user-graduate'></i>Resume<i className='material-icons right'>arrow_drop_down</i></button>
    //                   <a target='_blank' href='assets/img/LukeBoyle_Resume.pdf' style={{padding:'5px', fontSize: '13px'}}><i className='fas fa-file-download'></i>Download Resume</a>
    //                 </div>
    //             </div>
    //           </li>

    //           <li className='nav-item'>
    //             <a className='nav-link navSkill' href='#secSkills'><i className='fas fa-user-tie'></i>Skills</a>
    //           </li>
  
    //           <li className='nav-item'>
    //             <a className='nav-link navPort' href='#secPort'><i className='fas fa-laptop-code'></i>Portfolio</a>
    //           </li>

    //           <li className='nav-item'>
    //             <a className='nav-link navContact' href='#secContact'><i className='fas fa-envelope-open-text'></i>Contact Me</a>
    //           </li>
  
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>

    //   {/* Mobile Side Bar */}
    //   <ul className='sidenav' id='mobileNav'>
    //     <li className='nav-item'>
    //       <a href='https://lmboyle.github.io/' className='nav-link navHome' id='selected'><i className='fas fa-home'></i>Home</a>
    //     </li>
    //     <li className='nav-item'>
    //       <a href='https://lmboyle.github.io/' className='nav-link navAbout'><i className='fas fa-address-card'></i>About</a>
    //     </li>
    //     <li className='nav-item'>
    //       <div className='dropdown'>
    //           <a href='https://lmboyle.github.io/' className='nav-link navRes'><i className='fas fa-user-graduate'></i>Resume<i className='material-icons right'>arrow_drop_down</i></a>
    //           <div className='dropdown-content'>
    //             <a href='https://lmboyle.github.io/' className='nav-link'><i className='fas fa-user-graduate'></i>Resume<i className='material-icons right'>arrow_drop_down</i></a>
    //             <a target='_blank' href='assets/img/LukeBoyle_Resume.pdf' style={{padding:'5px', fontSize: '13px'}}><i className='fas fa-file-download'></i>Download Resume</a>
    //           </div>
    //       </div>
    //     </li>
    //     <li className='nav-item'>
    //       <a className='nav-link navSkill' href='https://lmboyle.github.io/'><i className='fas fa-user-tie'></i>Skills</a>
    //     </li>
    //     <li className='nav-item'>
    //       <a className='nav-link navPort' href='https://lmboyle.github.io/'><i className='fas fa-laptop-code'></i>Portfolio</a>
    //     </li>
    //     <li className='nav-item'>
    //       <a className='nav-link navContact' href='https://lmboyle.github.io/'><i className='fas fa-envelope-open-text'></i>Contact Me</a>
    //     </li>
    //   </ul>
    // </header>