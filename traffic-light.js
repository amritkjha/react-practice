import React from 'react';

function TrafficLight() {
  const [activeLight, setActiveLight] = React.useState('red')
  const containerStyles = {
    border: '1px solid',
    width: 'fit-content',
    padding: '9px',
    height: 'fit-content',
    borderRadius: '17%',
    backgroundColor: '#454545'
  }
  const lightStyles = {
    border: '1px solid black',
    borderRadius: '50%',
    width: '108px',
    height: '108px',
    margin: '12px 0',
  }
  const redLightStyles = {
    backgroundColor: '#B81D13',
    opacity: `${activeLight=='red'?1:0.5}`
  }
  const yellowLightStyles = {
    backgroundColor: '#EFB700',
    opacity: `${activeLight=='yellow'?1:0.5}`
  }
  const greenLightStyles = {
    backgroundColor: '#008450',
    opacity: `${activeLight=='green'?1:0.5}`
  }
  React.useEffect(() => {
    const durations = {
      red: '6000',
      yellow: '3000',
      green: '9000'
    }
    const next = {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }
    const timeout = setTimeout(() => setActiveLight(prev=>next[prev]), durations[activeLight]);
    return () => clearTimeout(timeout);
  }, [activeLight])
  return (
    <div style={containerStyles}>
      <div style={{...redLightStyles, ...lightStyles}}></div>
      <div style={{...yellowLightStyles, ...lightStyles}}></div>
      <div style={{...greenLightStyles, ...lightStyles}}></div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Traffic Light</h2>
      <TrafficLight />
    </div>
  );
}
