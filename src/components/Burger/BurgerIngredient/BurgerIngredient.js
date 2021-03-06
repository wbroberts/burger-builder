import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

// Capitalizes the ingredient for the css
import capitalize from '../../../functions/capitalize';

class BurgerIngredient extends Component {
  render() {
    return <div className={styles[capitalize(this.props.ingredient)]} />;
  }
}

BurgerIngredient.propTypes = {
  // Ingredient must be capitalized to work as well
  ingredient: PropTypes.string.isRequired
};

export default BurgerIngredient;
