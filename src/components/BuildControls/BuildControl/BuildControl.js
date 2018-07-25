import React from 'react';

import styles from './BuildControl.css';

// Buttons to remove or add ingredients to the burger
const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Remove}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Remove
      </button>
      <button className={styles.Add} onClick={props.added}>
        Add
      </button>
    </div>
  );
};

export default BuildControl;
