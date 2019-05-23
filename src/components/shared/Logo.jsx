import React, { Component } from 'react';
import { ReactComponent as CardpayLogo } from 'assets/cardpay_logo.svg';
import styles from './Logo.module.scss';

class Logo extends Component {

  render() {
    return (
      <div className={styles.appLogo}>
        <div className="container">
          <div className={styles.appLogoContainer}>
            <CardpayLogo />
          </div>
        </div>
      </div>
    );
  }

}

export default Logo;
