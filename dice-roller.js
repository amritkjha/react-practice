import React, { useState } from 'react';

function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '24%',
    margin: '0 auto',
    textAlign: 'center',
  }
  const handleRoll = () => {
    setLoading(true);
    setTimeout(()=>{
      setDiceNumber(Math.floor(Math.random()*6)+1);
      setLoading(false);
    }, 1000)
  }
  return (
    <div style={containerStyles}>
      <h1>{loading?'🎲':diceNumber}</h1>
      <button onClick={handleRoll}>Roll</button>
    </div>
  );
}

export default DiceRoller;
