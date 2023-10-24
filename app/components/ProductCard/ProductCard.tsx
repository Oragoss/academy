import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
// import styles from './ProductCard.module.css';

const ProductCard = () => {
    
  return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">I should add something here about me and constrain this thing so it's smaller.</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard