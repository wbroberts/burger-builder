import React from 'react';

import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
