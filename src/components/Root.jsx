import React, { createContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom';
export const ProductContext=createContext([])
export const CartContext=createContext([])
const Root = () => {
    const {product, initialCart}=useLoaderData()
    const [cart,setCart]=useState(initialCart)
    return (
        <div>
         <ProductContext.Provider value={product}>
         <CartContext.Provider value={[cart,setCart]}>
         <Header/>
          <Outlet/>
          <Footer/>
         </CartContext.Provider>
         </ProductContext.Provider>
        </div>
    );
};

export default Root;