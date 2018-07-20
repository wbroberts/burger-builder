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
      {controls.map((control, i) => {
        return (
          <BuildControl
            label={control.label}
            key={control.label}
            added={() => props.addIngredient(control.ingredient)}
            removed={() => props.removeIngredient(control.ingredient)}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
