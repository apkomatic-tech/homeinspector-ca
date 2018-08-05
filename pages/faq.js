import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="faq" title="FAQ" />
    <main id="content" className="content">
      <div className="container faq">
        <h1 className="content__heading">Frequently Asked Questions</h1>
        <p className="lead">
          <i className="fa fa-question-circle" /> What is a Home Inspection?
        </p>
        <p>
          A general home inspection is a non-invasive, visual examination of the accessible areas of a residential
          property (as delineated below), performed for a fee, which is designed to identify defects within specific
          systems and components defined by these Standards that are both observed and deemed material by the inspector.
          The scope of work may be modified by the Client and Inspector prior to the inspection process.
        </p>
        <p className="lead">
          {' '}
          <i className="fa fa-question-circle" /> What areas do you service?
        </p>
        <p>Fresno, San Diego, Riverside, and Orange County.</p>

        <p className="lead">
          <i className="fa fa-question-circle" /> What do the services cost?
        </p>

        <p>
          Home inspections are priced individually. The price is based generally on the property’s size, age and
          location. Please call for a quote and appointment.
        </p>

        <p className="lead">
          <i className="fa fa-question-circle" /> Are you open on weekends?
        </p>

        <p>Yes, our inspectors take weekend appointments.</p>

        <p className="lead">
          <i className="fa fa-question-circle" /> How long does the inspection take?
        </p>

        <p>
          A home inspection typically takes between 2 to 3 hours. We suggest that you leave small children with a sitter
          if possible as you will want to follow the inspector closely as he inspects your new home and explains his
          findings.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);
