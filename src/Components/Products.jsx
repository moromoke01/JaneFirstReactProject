import React from 'react';
import ProductBox from './ProductBox';
import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
 import f4 from './images/f4.jpg';
 import food3 from './images/fast-food.jpg';

function Products() {
  return (
    <div className='product-page'>
        <h1>Be familiar with our Dishes</h1>
        <h2>CHOOSE AND ENJOY THE MEAL</h2>
        <div className='p-space'>
        <ProductBox image={food1}  title='Salad'/>
        <ProductBox image={food2}  title='Spaghetti Sauce'/>
        <ProductBox image={food3} title='Sandwich'/>
        <ProductBox image={f4}  title='Chips Sauce'/>
        </div>
        
    </div>
  )
}

export default Products