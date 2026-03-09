import React, { useState, useEffect } from 'react';

function ProgressBars() {
  const [bars, setBars] = useState(3);
  const [progress, setProgress] = useState(100);

  const addBar = () => {
    setProgress(0);
    setBars(prev=>prev+1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev=> {
        if(prev>=100) {
          clearInterval(timer);
          return prev;
        }
        return prev+5;
    });
    }, 100)
  }, [bars])

  const barStyles = {
    height: '15px',
    backgroundColor: '#d3d3d3',
    borderRadius: '0 6px 6px 0',
    margin: '9px 0'
  }

  const progressStyles = {
    backgroundColor: 'green',
    height: '100%',
    borderRadius: '0 6px 6px 0',
    width: `${progress}%`,
    transition: 'width 0.5s ease'
  }

  const fixedStyles = {
    backgroundColor: 'green',
    height: '100%',
    borderRadius: '0 6px 6px 0',
    width: '100%'
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={addBar}>Add</button>
      <div>
        {Array.from({length: bars}).map((bar, idx) => {
          return (
            <div style={barStyles}>
              <div style={idx==bars-1?progressStyles:fixedStyles}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBars;
