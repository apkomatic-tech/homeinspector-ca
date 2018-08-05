import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import MobileLink from './MobileLink';
import { LINKS } from './../config/config';

import './Header.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: false,
      links: LINKS
    };

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
  }

  toggleMobileNav() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  closeMobileNav() {
    this.setState({
      mobileNavOpen: false
    });
  }

  renderLinks(options) {
    const { isMobile } = options;
    const { links } = this.state;
    const { page } = this.props;
    const navigationClass = isMobile ? 'mobile-nav' : 'header__nav';
    const mobileNavOpen = isMobile && this.state.mobileNavOpen;
    return (
      <nav className={`${navigationClass}${mobileNavOpen ? ' open' : ''}`}>
        {links.map(link => {
          const { id, href, label } = link;

          if (isMobile) {
            return (
              <Link key={id} href={href}>
                <MobileLink
                  onCustomClick={() => {
                    this.closeMobileNav();
                  }}
                >
                  {label}
                </MobileLink>
              </Link>
            );
          }

          return (
            <Link key={id} href={href}>
              <a className={`${page === label.toLowerCase() ? 'active' : ''}`}>{label}</a>
            </Link>
          );
        })}
        <a href="tel:+18582472631" className="btn btn-outline-light call-now">
          <i className="fa fa-phone" /> 858.247.2631
        </a>
      </nav>
    );
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{`Home Inspectors California${title ? ` | ${title}` : ''}`}</title>
          <link rel="icon" href="/static/favicon.png" />
          <link rel="stylesheet" href="/static/nprogress.css" />
        </Head>
        <header className="header">
          <div className="container header__content">
            <Link href="/">
              <div className="header__logo">
                <img src="/static/img/logo.png" alt="Home Inspectors California" />
                <span>Home Inspectors California</span>
              </div>
            </Link>
            <i className="header__mobile-toggle fa fa-bars" onClick={this.toggleMobileNav} />
            {this.renderLinks({ isMobile: false })}
          </div>
        </header>
        {this.renderLinks({ isMobile: true })}
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
