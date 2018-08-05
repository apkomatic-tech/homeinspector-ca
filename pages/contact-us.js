import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import ContactForm from './../components/ContactForm';
import './content.scss';

export default () => (
  <div id="site">
    <Header page="contact" title="Contact us" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">Contact Us</h1>
        <div className="row">
          <section className="col-lg-6">
            <div className="border p-3 mb-3 contact-message">Contact us for a quote. We can work with your budget.</div>
            <ContactForm />
          </section>

          <section className="contact-callout col-lg-6 text-center d-flex justify-content-center flex-column border" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
