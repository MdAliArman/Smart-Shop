import React from 'react'
import { useContext } from 'react'
import { CartContext, ProductContext } from './Root'
import Product from '../components/Product'
import { useState } from 'react'
import { addToDb } from '../utils/fakeDB'
import { toast } from 'react-toastify'

const Shop = () => {
  const products=useContext(ProductContext)
  const [cart, setCart]= useContext(CartContext)

  const addToCart=product=>{
      let newCart=[];
      const exist=cart.find(pd=>pd.id === product.id);
      if(!exist){
        product.quantity=1;
        newCart=[...cart, product]
      }
      else{
        const rest=cart.filter(pd=>pd.id !== product.id);
        exist.quantity=exist.quantity+1;
        newCart=[...rest, exist]
      }
      setCart(newCart)
      toast.success('Product added!!!', {autoClose: 500})
      addToDb(product.id)
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
       {
        products.map(product=> <Product
        key={product.id}
        product={product}
        addToCart={addToCart}
        ></Product>)
       }
      </div>
    </div>
  )
}

export default Shop
