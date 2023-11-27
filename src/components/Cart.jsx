import React, { useContext } from 'react'

import { CartContext } from '../Redux/Cart'

const Cart = () => {
  const Store = useContext(CartContext)
  console.log(Store)
const total = Store.items.reduce((a, b)=>a+b.price,0)

  return (
    <div>
        <h1>Cart</h1>
        { Store && Store.items.map((item)=><li>{item.name}-{item.price}</li>)}
        <p>Total Bill:${total}</p>
    </div>
  )
}

export default Cart