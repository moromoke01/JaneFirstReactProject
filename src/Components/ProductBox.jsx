import React from 'react'

function ProductBox(props) {
  return (
      <>
    <div className='p-box'>
        <div className='box-img'>
            <img src={props.image} alt='' />
        </div>

    

     <div className="box-text">
       <h2 className='image-text'>{props.title}</h2>
        <button className="product-button">Order Now</button>
     </div>
  </div>
     </>
  )
}

export default ProductBox