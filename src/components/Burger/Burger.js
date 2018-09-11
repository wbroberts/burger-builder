import React from 'react';

import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  // Pulls keys from ingredients and resets them in order for correct
  // display of order ingredients. (DB sends data in alphabetical order.)
  const { tomato, lettuce, cheese, bacon, meat } = props.ingredients;
  const ingredients = { tomato, lettuce, bacon, cheese, meat };

  // Loop through the keys in the ingredients Object (from props)
  let allIngredients = Object.keys(ingredients)
    .map(ingr => {
      // Create a new array that is the length of the amount of each ingredient
      // for the next map function call
      return [...Array(props.ingredients[ingr])].map((_, i) => {
        // This returns the correct amount of the ingredient that is wanted
        return <BurgerIngredient ingredient={ingr} key={ingr + i} />;
      });
    })
    .reduce((arr, el) => {
      // Creates an empty array if there are no ingredients to display a message
      return arr.concat(el);
    }, []);

  if (allIngredients.length === 0) {
    allIngredients = <p>Please start building your burger</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient ingredient="BreadTop" />
      {allIngredients}
      <BurgerIngredient ingredient="BreadBottom" />
    </div>
  );
};

export default burger;
