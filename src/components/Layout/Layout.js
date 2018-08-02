import React from 'react';

import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
