import { useState, useEffect } from 'react';
const App = () => {
  const [time,  setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev=>prev+1);
    }, [1000])
    return () => clearInterval(id);
  }, [])
  const minutes = Math.floor(time/60);
  const seconds = time%60;
  return (
    <div>
      {(minutes/10<1&&'0')+minutes}:{(seconds/10<1&&'0')+seconds}
    </div>
  )
};

export default App;
