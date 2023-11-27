import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
const App = () => {
  return (
    <div>
      <Item Name="Macbook Pro" Price= {100000}/>
      <Item Name="Iphone" Price={45000}/>
      <Item Name="Pendrive" Price={4000}/>
      <Cart/>
    </div>
  )
}

export default App