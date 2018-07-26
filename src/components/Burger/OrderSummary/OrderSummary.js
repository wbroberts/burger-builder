import React from 'react';

import capitalize from '../../../functions/capitalize';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients);

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with:</p>

      <ul>
        {ingredientSummary.map((key, i) => {
          return (
            <li key={i}>
              {capitalize(key)}: {props.ingredients[key]}
            </li>
          );
        })}
      </ul>

      <p>
        Total: <strong>${props.price.toFixed(2)}</strong>
      </p>

      <p>Continue to checkout?</p>
      <Button buttonType={'cancel'} clicked={props.cancelOrder}>
        Cancel
      </Button>
      <Button buttonType={'continue'} clicked={props.continueOrder}>
        Place Order
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
