// IMPORT =========================================================================================
import React from 'react';
import './Contact.scss'

// EXPORT =========================================================================================
export default function Contact() {
  return(
    <div className='row section scrollspy' id='secContact'>
      <div className='col s12 center'>

        {/* Contact Me Header */}
        <h3> Contact Me </h3>

          <div className='col s6 offset-s3 center'>
            <form className='contact' action='https://formspree.io/xkngaojw' method='POST'>
              
              <input className='contactInfo' id='contactName' type='text' name='Name' placeholder='John Doe'/>
              <label for='contactName'> Name </label>

              <input className='contactInfo' id='contactEmail' type='email' name='_replyto' placeholder='YourEmail@email.com'/>
              <label for='contactEmail'> Email </label>

              <textarea className='contactInfo' id='contactMessage' name='message' placeholder='Your Message Here'></textarea>
              <label for='contactMessage'> Message </label>

              <br/>

              <button className='submitBtn'>
                <input type='submit' value='Submit'/>
              </button>
            </form>
          </div>

          {/* <div id='contactOverlay'>
            Coming Soon!
          </div> */}
      </div>
    </div>
  )
}
