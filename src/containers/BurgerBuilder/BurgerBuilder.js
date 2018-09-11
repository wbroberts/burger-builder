import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';

import axios from '../../axios-order';

const ingredientPrices = {
  tomato: 0.25,
  lettuce: 0.25,
  bacon: 1.5,
  cheese: 1.0,
  meat: 1.25
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    burgerPrice: 5,
    canOrder: false,
    ordering: false,
    loading: false
  };

  componentDidMount = () => {
    // Updates ingredients dynamically from backend
    axios.get('/ingredients.json').then(res => {
      const ingredients = res.data;
      this.setState({ ingredients });
    });
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
    // Show spinner
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.burgerPrice
    };

    axios
      .post('/orders.json', order)
      .then(res => {
        // Stop spinner
        this.setState({ loading: false, ordering: false });

        console.log(res.data);
      })
      .catch(e => {
        // Stop spinner
        this.setState({ loading: false, ordering: false });
        console.log(e);
      });
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    // Convert each key to true or false for disabling the removeIngredient button
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] === 0;
    }

    // Can be a spinner or the actual order summary
    let orderSummary = null;

    // Make spinner for when ingredients are loading
    let burger = <Spinner />;

    if (this.state.ingredients) {
      // Ingredients are loaded so now display all burger data and UI
      burger = (
        <React.Fragment>
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

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.burgerPrice}
          cancelOrder={this.cancelOrderHandler}
          continueOrder={this.continueOrderHandler}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <React.Fragment>
        <Modal show={this.state.ordering} closeModal={this.cancelOrderHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);
