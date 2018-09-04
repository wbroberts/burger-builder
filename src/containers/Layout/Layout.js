import React from 'react';

import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
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
