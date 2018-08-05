import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="thank-you" title="Thanks" />
    <main id="content" className="content">
      <div className="container text-center">
        <h1 className="content__heading">Thanks!</h1>
        <p>Thank you for contacting us! We will reach out to you within 24 hours of request.</p>
      </div>
    </main>
    <Footer />
  </div>
);
