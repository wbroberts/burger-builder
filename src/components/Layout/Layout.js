import React from 'react';

import styles from './Layout.css';

const layout = props => {
  return (
    <React.Fragment>
      <div className={styles.head}>Toolbar, SideDrawer, Backdrop</div>

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
