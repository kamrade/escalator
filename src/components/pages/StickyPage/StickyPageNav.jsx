import React, { Component } from 'react';
import { Link } from 'react-scroll'

import './StickyPageNav.scss';

class StickyPageNav extends Component {

  render() {
    return (
      <div className="sticky-page-nav">
        <div className="container">

          <Link
            className="section-link"
            to="section1"
            smooth={true}
            duration={2000}>
            Section 1</Link>

        </div>
      </div>
    );
  }

}

export default StickyPageNav;
