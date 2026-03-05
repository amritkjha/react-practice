import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  const countStyles = {
    padding: '18px',
    fontSize: '52px'
  }
  const buttonStyles = {
    backgroundColor: '#24a0ed',
    color: 'white'
  }
  const resetButtonStyles = {
    marginLeft: '162px',
    backgroundColor: 'red',
    padding: '6px 36px',
    borderRadius: '6px',
    border: 0
  }
  const containerStyles = {
    padding: '12px 166px',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <>
      <div style={containerStyles}>
        <button style={buttonStyles} onClick={()=>setCount(count>0?count-1:0)}>-</button>
        <span style={countStyles}>{count}</span>
        <button style={buttonStyles} onClick={()=>setCount(count+1)}>+</button>
      </div>
      <button style={{...buttonStyles, ...resetButtonStyles}} onClick={()=>setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
