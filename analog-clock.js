import React from 'react';

export default function AnalogClock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date();
      setTime(time);
    }, 1000)
    return ()=>clearInterval(timer);
  }, [])
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hourAngle = (hours%12)*30+(minutes*0.5);
  const minuteAngle = minutes*6;
  const secondAngle = seconds*6;
  const clockStyles = {
    height: '324px',
    width: '324px',
    border: '1px solid black',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
  const handStyles = {
    transformOrigin: 'left center',
    top: '50%',
    left: '50%',
    position: 'absolute'
  }
  const hourHandStyles = {
    height: '3.5px',
    backgroundColor: 'red',
    width: '104px',
    transform: `rotate(${hourAngle-90}deg)`,
  }
  const minuteHandStyles = {
    height: '3px',
    backgroundColor: 'blue',
    width: '121px',
    transform: `rotate(${minuteAngle-90}deg)`,
  }
  const secondHandStyles = {
    height: '1.5px',
    backgroundColor: 'green',
    width: '148px',
    transform: `rotate(${secondAngle-90}deg)`,
  }
  const digitalClock = {
    fontSize: '36px'
  }
  return (
    <div style={clockStyles}>
      <div style={{...handStyles, ...hourHandStyles}}></div>
      <div style={{...handStyles, ...minuteHandStyles}}></div>
      <div style={{...handStyles, ...secondHandStyles}}></div>
      <p style={digitalClock}>{('0'+hours).slice(-2)}:{('0'+minutes).slice(-2)}:{('0'+seconds).slice(-2)}</p>
    </div>
  );
}
