import React from 'react';

import './Footer.scss';

function getCurrentYear() {
  const d = new Date();
  return d.getFullYear();
}

const Footer = () => (
  <footer className="ftr text-white">
    <div className="container">
      <div className="row">
        {/* <div className="col-sm-6 ftr__info">
          <p>
            <small>Serving Fresno, Orange County, San Diego, Riverside areas</small>
          </p>
        </div> */}
        <div className="col-sm-6 ftr__contact ml-auto">
          <p>
            <small>
              858.247.2631 <br />
              <a href="mailto:homeinspectorsca@gmail.com" className="text-white">
                homeinspectorsca@gmail.com
              </a>
            </small>
          </p>
          <p>
            <small>
              {' '}
              <a href="https://www.facebook.com/homeinspectorsca/">
                <i className="fa fa-facebook-official text-white" />
              </a>{' '}
            </small>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ftr__bottom">
          <p>
            <small>Copyright &copy; {getCurrentYear()} Home Inspectors California - All Rights Reserved.</small>
          </p>
          <p>
            {' '}
            Designed and Developed by{' '}
            <a style={{ color: '#d4bc71' }} href="https://www.apkomatic.com">
              Apkomatic
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
