import { useState, useEffect } from 'react';
function GreenLightRedLight() {
  const [time, setTime] = useState(15);
  const [active, setActive] = useState(false);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState('green');
  useEffect(() => {
    if(time === 0)setActive(false);
  }, [time])
  useEffect(() => {
    if(score >= 15)setActive(false);
  }, [score])
  useEffect(() => {
    let id = 0, id2 = 0;
    if(active) {
      id = setInterval(() => setTime(prev=>prev-1), 1000);
      changeColor();
    }
    return () => {
      clearInterval(id);
      clearInterval(id2);
    }
  }, [active])
  const changeColor = () => {
    console.log('color change called');
    setTimeout(() => {
      setColor(prev=>prev=='red'?'green':'red')
      changeColor();
    }, (Math.random()+1)*1000);
  }
  const handleBoxClick = () => {
    if(color === 'red') {
      setActive(false);
    } else {
      setScore(prev => prev+1);
    }
  }
  const handleStartGame = () => {
    setActive(true);
    setScore(0);
    setTime(15);
  }
  return (
    <div>
      <p>Time left: {time}s</p>
      {!active && <button onClick={handleStartGame}>Start Game</button>}
      <h2>Score: {score}</h2>
      {active?<div onClick={handleBoxClick} style={{ width: '72px', height: '72px', backgroundColor: color }}></div>:(score>=15?'You win!':'Game Over!')}
    </div>
  );
}

export default GreenLightRedLight;
