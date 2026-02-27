import React from 'react';

export default function TemperatureConverter() {
  const [cVal, setCVal] = React.useState(0);
  const [fVal, setFVal] = React.useState(32);
  const [flag1, setFlag1] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);
  React.useEffect(() => {
    if(flag1) {
      let newFVal = (cVal*9/5)+32;
      setFVal(newFVal);
      setFlag1(false);
    }
  }, [cVal])
  React.useEffect(() => {
    if(flag2) {
      let newCVal = (fVal-32)*5/9;
      setCVal(newCVal);
      setFlag2(false);
    }
  }, [fVal])
  return (
    <div>
      <input type='number' value={cVal} onChange={e=>{setCVal(e.target.value);setFlag1(true);}} />
      <input type='number' value={fVal} onChange={e=>{setFVal(e.target.value);setFlag2(true);}} />
    </div>
  );
}
