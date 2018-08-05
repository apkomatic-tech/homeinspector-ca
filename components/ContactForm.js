import React from 'react';
import { CONTACT_ENDPOINT, EMAIL_CONFIRMATION_URL } from './../config/config';
import _utils from './../utils';

const ContactForm = () => (
  <form action={CONTACT_ENDPOINT} className="content__form" method="POST">
    <div className="form-group">
      <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
    </div>
    <div className="form-group">
      <input className="form-control" id="email-address" name="_replyto" placeholder="Email*" type="email" required />
    </div>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="phone"
        placeholder="Phone"
        name="phone"
        ref={input => {
          this.phoneNumber = input;
        }}
        onBlur={() => {
          if (_utils.parsePhoneNumber(this.phoneNumber.value)) {
            this.phoneNumber.value = _utils.parsePhoneNumber(this.phoneNumber.value);
          }
        }}
      />
    </div>
    <div className="form-group">
      <input
        className="form-control"
        id="address"
        name="address"
        placeholder="Address (Street, City, ZipCode)"
        type="text"
      />
    </div>
    <div className="form-group">
      <textarea className="form-control" cols="30" id="message" name="message" placeholder="Message" rows="5" />
    </div>
    <input
      type="text"
      name="_gotcha"
      style={{
        display: 'none'
      }}
    />
    <input type="hidden" name="_next" value={EMAIL_CONFIRMATION_URL} />
    <input type="hidden" name="_subject" value="You got a quote inquiry" />
    <button type="submit" className="btn btn-lg d-block w-100 text-white">
      Send <i className="fa fa-telegram" />
    </button>
  </form>
);

export default ContactForm;
