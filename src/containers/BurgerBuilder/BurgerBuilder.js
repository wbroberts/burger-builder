import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    burgerPrice: 4,
    canOrder: false,
    ordering: false
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

    this.updateOrderState(updatedIngredients);
  };

  removeIngredientHandle = ingredient => {
    const oldCount = this.state.ingredients[ingredient];
    // Exit out of function if ingredient is already at 0
    if (oldCount === 0) return;
    // Update the ingredient state
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

    this.updateOrderState(updatedIngredients);
  };

  updateOrderState = obj => {
    let canOrder;
    const total = Object.values(obj).reduce((sum, next) => sum + next);

    total >= 1 ? (canOrder = true) : (canOrder = false);
    this.setState({ canOrder });
  };

  orderHandler = () => {
    this.setState({ ordering: true });
  };

  cancelOrderHandler = () => {
    this.setState({ ordering: false });
  };

  continueOrderHandler = () => {
    alert('You placed an order');
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    // Convert each key to true or false for disabling the removeIngredient button
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    return (
      <React.Fragment>
        <Modal show={this.state.ordering} closeModal={this.cancelOrderHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.burgerPrice}
            cancelOrder={this.cancelOrderHandler}
            continueOrder={this.continueOrderHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
          disabled={disabledIngredients}
          price={this.state.burgerPrice}
          canOrder={this.state.canOrder}
          ordering={this.orderHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
