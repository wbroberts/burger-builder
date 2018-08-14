import React from 'react';

import styles from './MenuIcon.css';

const menuIcon = props => {
  return (
    <div className={styles.MenuIcon} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default menuIcon;
