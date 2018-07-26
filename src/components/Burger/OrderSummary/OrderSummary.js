import React from 'react';

import capitalize from '../../../functions/capitalize';

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
      <p>Continue to checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </React.Fragment>
  );
};

export default orderSummary;
