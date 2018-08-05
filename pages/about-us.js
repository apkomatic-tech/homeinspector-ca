import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="about us" title="About us" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">About Us</h1>

        <section style={{ margin: '4rem 0' }}>
          At Home Inspectors California, we are dedicated to setting the standard in affordability, professionalism, and
          efficiency in the home inspection business. We understand that every real estate transaction is different,
          each property is unique. Our goal is to give you the best price for your property inspection. As certified
          members of the International Association of Certified Home Inspectors, we also believe that educating our
          clients clearly and transparently about the purchase or sale they are considering is a considerable quality.
          Knowledge only can help to make informed decisions. We will provide you with an honest evaluation of the house
          or condo so you can make the right decision. The home inspection business is very personal. It is based a lot
          on the individual personalities and abilities of the inspector. We want our clients to feel like family, and
          from our family to yours, we are bringing peace of mind back to your home.
        </section>
        <section className="featured row d-flex align-items-center">
          <div className="col-md-6" style={{ marginBottom: '1rem' }}>
            <img className="img-fluid" src="/static/img/about-knowledge.jpg" alt="knowledge" />
          </div>
          <div className="col-md-6">
            <h3>Knowledgeable Home Inspector Experts</h3>
            <p>
              The main purpose of a home inspection is to give you the information needed to make an informed decision
              on the purchase. It is critical to choose the right inspector for one of the most important emotional
              decisions and financial investments that you will ever make. Home inspections are an instrumental part of
              the home buying process that can save you a lot of time and money in the long run.
            </p>
          </div>
        </section>

        <section className="featured row d-flex align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <h3>We Notice the Little Things</h3>
            <p>
              {' '}
              Our inspections are based upon the International Standards of Practice for Performing a General Home
              Inspection, provided by InterNachi. This checklist may be used to perform a visual inspection of a home
              and provide the inspector with a written report identifying the defects that were (1) observed and (2)
              deemed material.
            </p>
          </div>
          <div className="col-md-6 order-md-2 order-1" style={{ marginBottom: '1rem' }}>
            <img className="img-fluid" src="/static/img/about-detail.jpg" alt="notice" />
          </div>
        </section>

        <section className="featured row d-flex align-items-center">
          <div className="col-md-6" style={{ marginBottom: '1rem' }}>
            <img className="img-fluid" src="/static/img/about-confidence.jpg" alt="confident" />
          </div>
          <div className="col-md-6">
            <h3>Be Confident In Your Property Transaction</h3>
            <p>
              When you work with us, we provide professional home inspectors that give their full attention to your
              home. We pride ourselves on the high standard we set for our inspections, because we know what a safe home
              means to you.
            </p>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);
