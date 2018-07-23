import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Tomato', ingredient: 'tomato' },
  { label: 'Lettuce', ingredient: 'lettuce' },
  { label: 'Bacon', ingredient: 'bacon' },
  { label: 'Cheese', ingredient: 'cheese' },
  { label: 'Meat', ingredient: 'meat' }
];

const buildControls = props => {
  return (
    <div className={styles.buildControls}>
      <p>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>

      {controls.map((ingr, i) => {
        return (
          <BuildControl
            label={ingr.label}
            key={ingr.label}
            added={() => props.addIngredient(ingr.ingredient)}
            removed={() => props.removeIngredient(ingr.ingredient)}
            disabled={props.disabled[ingr.ingredient]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
