import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
