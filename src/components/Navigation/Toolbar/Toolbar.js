import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '../../UI/MenuIcon/MenuIcon';

const toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <MenuIcon clicked={props.openSideDrawer} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
