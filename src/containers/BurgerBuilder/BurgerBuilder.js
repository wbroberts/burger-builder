import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const ingredientPrices = {
  tomato: 0.25,
  lettuce: 0.25,
  bacon: 1.5,
  cheese: 1.0,
  meat: 1.25
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    burgerPrice: 4
  };

  addIngredientHandle = ingredient => {
    // Update the ingredient state
    const oldCount = this.state.ingredients[ingredient];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredient] = updatedCount;

    // Update the price state
    const oldPrice = this.state.burgerPrice;
    const ingredientPrice = ingredientPrices[ingredient];
    const updatedPrice = oldPrice + ingredientPrice;

    this.setState({
      ingredients: updatedIngredients,
      burgerPrice: updatedPrice
    });
  };

  removeIngredientHandle = ingredient => {
    // Update the ingredient state
    const oldCount = this.state.ingredients[ingredient];

    // Exit out of function if ingredient is already at 0
    if (oldCount === 0) return;

    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[ingredient] = updatedCount;

    // Update the price state
    const oldPrice = this.state.burgerPrice;
    const ingredientPrice = ingredientPrices[ingredient];
    const updatedPrice = oldPrice - ingredientPrice;

    this.setState({
      ingredients: updatedIngredients,
      burgerPrice: updatedPrice
    });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    // Convert each key to true or false
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
          disabled={disabledIngredients}
          price={this.state.burgerPrice}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
