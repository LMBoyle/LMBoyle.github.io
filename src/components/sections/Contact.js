// IMPORT =========================================================================================
import React from 'react';

// EXPORT =========================================================================================
export default function Contact() {
  return(
    <div class="row section scrollspy" id="secContact">
      <div class="col s12 center">

        {/* Contact Me Header */}
        <h3> Contact Me </h3>

          <div class="col s6 offset-s3 center">
            <form class="contact" action="https://formspree.io/xkngaojw" method="POST" role="form">
              
              <input class="contactInfo" id="contactName" type="text" name="Name" placeholder="John Doe"/>
              <label for="contactName"> Name </label>

              <input class="contactInfo" id="contactEmail" type="email" name="_replyto" placeholder="YourEmail@email.com"/>
              <label for="contactEmail"> Email </label>

              <textarea class="contactInfo" id="contactMessage" name="message" placeholder="Your Message Here"></textarea>
              <label for="contactMessage"> Message </label>

              <br/>

              <button class="submitBtn">
                <input type="submit" value="Submit"/>
              </button>
            </form>
          </div>

          {/* <div id="contactOverlay">
            Coming Soon!
          </div> */}
      </div>
    </div>
  )
}
