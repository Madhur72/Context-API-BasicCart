import React, { useContext } from 'react'

import { CounterContext } from '../Redux/Counter'

const counter = () => {
    const CounterState = useContext(CounterContext)
  return (
      <div>
          <button onClick={()=>CounterState.setCount(CounterState.count+1)}>Incerement</button>
          <button onClick={()=>CounterState.setCount(CounterState.count-1)}>Decrement</button>
    </div>
  )
}

export default counter