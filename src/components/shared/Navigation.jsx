import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

class Navigation extends Component {

  render() {
    return (
      <div className={styles.appNavigation} >

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/home">
          <span className={styles.navigationLinkContent}>Home</span>
        </NavLink>

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/sticky">
          <span className={styles.navigationLinkContent}>Sticky</span>
        </NavLink>

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/contacts">
          <span className={styles.navigationLinkContent}>Company</span>
        </NavLink>

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/contacts">
          <span className={styles.navigationLinkContent}>iBanking</span>
        </NavLink>

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/contacts">
          <span className={styles.navigationLinkContent}>Apply</span>
        </NavLink>

        <NavLink activeClassName="activeLink" className={styles.navigationLink} to="/contacts">
          <span className={styles.navigationLinkContent}>Login</span>
        </NavLink>

      </div>
    );
  }

}

export default Navigation;
