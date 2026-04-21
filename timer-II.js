import { useState, useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(localStorage.getItem('time')||600);
  useEffect(() => {
    const timer = setInterval(() => setTime(prev=>prev>0?prev-1:600), 1000);
    return () => clearInterval(timer);
  }, [])
  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);
  const minutes = Math.floor(time/60);
  const seconds = time%60;
  return (
    <div>
      {(minutes<10?'0':'')+minutes}:{(seconds<10?'0':'')+seconds}
    </div>
  );
};

export default App;
