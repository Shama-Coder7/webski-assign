import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactus">
      <div className="Card">
        <div className="card-head">
          <div id="head">contactus</div>{' '}
          <div id="touch">get in touch with us</div>
        </div>

        <div className="card-body">
          <p>
            Please contact us for creative solutions based on your unique
            situation. Our focus is on establishing long-term supports and
            resources for high-conflict cases involving abuse and
            post-separation abuse in family court.{' '}
          </p>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="ZIP Code" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea type="text" placeholder="Type your message here" />
            </div>
          </div>
        </div>
<div className='submit'>
           <button>Submit</button>
 
</div>
      </div>
    </div>
  );
}

export default ContactUs;
