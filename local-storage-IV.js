import React, { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(Number(localStorage.getItem('count'))||0)
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count])

  return (
    <div>
      <h2 data-testid="count-id" >Count: {count}</h2>
      <button data-testid="inc-id" onClick={() => setCount(count + 1)}>+</button>
      <button data-testid="dec-id" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter;
