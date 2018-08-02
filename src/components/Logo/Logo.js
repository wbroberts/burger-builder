import React from 'react';

import burgerLogo from '../../assets/img/burger-logo.png';
import styles from './Logo.css';

const logo = props => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Build-a-burger logo" />
    </div>
  );
};

export default logo;
