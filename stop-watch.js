import React from 'react';

export default function Stopwatch() {
  const [time, setTime] = React.useState(0);
  let timer = React.useRef(null);
  const handleStart = () => {
    if(timer.current)return;
    timer.current = setInterval(() => {
      setTime(prev=>prev+1);
    }, 1000);
  }
  const handleStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  }
  const handleReset = () => {
    clearInterval(timer.current);
    timer.current = null;
    setTime(0);
  }
  const timerBlock = {
    border: '1px solid #A9A9A9',
    padding: '9px',
    margin: '12px',
    borderRadius: '6px'
  }
  const timerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '42px'
  }
  const buttonContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const buttonStyles = {
    backgroundColor: '#FFA500',
    color: 'white',
    padding: '15px 27px',
    fontSize: '24px',
    borderRadius: '9px',
    margin: '0 12px',
    cursor: 'pointer',
    border: '0'
  }
  const redButton = {
    backgroundColor: '#CA0B00',
    gridColumn: '1 / 3'
  }
  const greenButton = {
    backgroundColor: '#008000'
  }
  return (
    <div>
      <div style={timerStyles}>
        <div style={timerBlock}>{('0'+Math.floor(time/3600)).slice(-2)}</div>:
        <div style={timerBlock}>{('0'+Math.floor((time%3600)/60)).slice(-2)}</div>:
        <div style={timerBlock}>{('0'+Math.floor(time%60)).slice(-2)}</div>
      </div>
      <div style={buttonContainerStyles}>
        <button style={{...buttonStyles, ...greenButton}} onClick={handleStart}>START</button>
        <button style={buttonStyles} onClick={handleStop}>STOP</button>
        <button style={{...buttonStyles, ...redButton}} onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}
