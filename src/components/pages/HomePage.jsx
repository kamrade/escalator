import React, { Component } from 'react';

import styles from './HomePage.module.scss';

class HomePage extends Component {

  render() {
    return (
      <div className="page">
        <div className={styles.pageTitle}>
          HOME PAGE
        </div>
      </div>
    );
  }

}

export default HomePage;
