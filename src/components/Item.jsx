import React from 'react'

import { CartContext } from '../Redux/Cart'
import { useContext } from 'react'

const Item = (props) => {
    const Store = useContext(CartContext)
  return (
    <div>
        <h4>{props.Name}</h4>
        <p>Price:${props.Price}</p>
        <button onClick={()=>Store.setItems([...Store.items,{name:props.Name,price:props.Price}])}>Add To Cart</button>
    </div>
  )
}

export default Item