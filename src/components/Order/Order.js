/** @format */

import React from 'react'
import classes from './Order.css'

const Order = (props) => {
  const ingredients = []

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    })
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          color: 'green',
          padding: '10px',
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    )
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price:{' '}
        <strong>
          <span
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #eee',
              color: 'red',
              padding: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            $ {Number.parseFloat(props.price).toFixed(2)}
          </span>
        </strong>{' '}
      </p>
    </div>
  )
}

export default Order
