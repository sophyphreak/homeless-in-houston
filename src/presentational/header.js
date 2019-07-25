import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`
      }}
    >
      <div>
        <h1 className="header">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="contact-us">
        <Link
          className="contact-us-text"
          style={{ textDecoration: 'none' }}
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
