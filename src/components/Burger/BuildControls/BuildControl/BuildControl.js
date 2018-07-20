import React from 'react';

import styles from './BuildControl.css';

const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.label}>{props.label}</div>
      <button className={styles.Remove} onClick={props.removed}>
        Remove
      </button>
      <button className={styles.Add} onClick={props.added}>
        Add
      </button>
    </div>
  );
};

export default BuildControl;
