import React from 'react';

import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: true
  };

  showSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar openSideDrawer={this.showSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.showSideDrawerHandler}
        />
        <main className={styles}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
