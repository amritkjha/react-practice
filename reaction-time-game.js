import { useState, useEffect } from 'react'
function ReactionTest() {
  const [colour, setColour] = useState('red');
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    let timer;
    if(started) {
      timer = setTimeout(() => setColour('green'), (Math.floor(Math.random()*5)+1)*1000);
    }
    return () => clearTimeout(timer);
  }, [started])
  useEffect(() => {
    let timeout;
    if(colour==='green') {
      timeout = setInterval(() => setTime(prev=>prev+1), 1);
    }
    return () => clearInterval(timeout);
  }, [colour])
  const handleBoxClick = () => {
    if(colour === 'red')setMessage('You clicked too early!');
    else {
      let t = time;
      setMessage(`You took ${t}ms!`);
    }
    setTime(0);
    setColour('red');
    setStarted(false);
  }
  return (
    <div>
      {started?
        <div onClick={handleBoxClick} style={{ height: '6rem', backgroundColor: colour, width: '6rem' }}></div>:
        <button onClick={()=>setStarted(true)} style={{ color: 'white', backgroundColor: 'black', padding: '9px 24px', borderRadius: '6px' }}>Start Game</button>
      }
      <p style={{ fontSize: '36px', fontWeight: 600 }}>{message}</p>
    </div>
  );
}

export default ReactionTest;
