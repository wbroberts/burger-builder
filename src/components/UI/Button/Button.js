import React from 'react';

import capitalize from '../../../functions/capitalize';
import styles from './Button.css';

const button = props => {
  return (
    <button
      onClick={props.clicked}
      className={`${styles.Button} ${styles[capitalize(props.buttonType)]}`}
    >
      {props.children}
    </button>
  );
};

export default button;
