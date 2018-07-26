import React, { Component } from 'react';

import styles from './App.css';
import Layout from '../../components/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
