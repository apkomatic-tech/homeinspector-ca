import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="services" title="Services" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">Services</h1>

        <div className="featured row d-flex align-items-center">
          <div className="col-md-6" style={{ marginBottom: '1rem' }}>
            <img className="img-fluid" src="/static/img/services-buyer.jpg" alt="Buyer Inspections" />
          </div>
          <div className="col-md-6">
            <h2>Buyer Inspections</h2>
            <p>
              A home inspection is a mainly visual evaluation of a home’s condition. Home inspectors typically provide
              inspection services to determine the performance of the home. The inspection isn’t just about identifying
              problems with the house. A thorough inspector considers the appointment a master class in your new home.
              We are trained to identify all problem areas both small and large that may have been unknown to the
              previous owners and to identify which require immediate attention.
            </p>
          </div>
        </div>

        <div className="featured row d-flex align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <h2>Seller Inspections</h2>
            <p>
              Whether you are selling your home on your own or using a Realtor, it’s always a wise idea to have a
              professional home inspection. Knowledge is power and all homes have strengths and weaknesses. While an
              inspection prepared for a seller will not be a substitute for a buyer's inspection, it nevertheless serves
              a useful purpose -- alerting the seller to potential conditions that could alter or delay a sale.
            </p>
          </div>
          <div className="col-md-6 order-md-2 order-1" style={{ marginBottom: '1rem' }}>
            <img className="img-fluid" src="/static/img/services-seller.jpg" alt="Seller Inspections" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
