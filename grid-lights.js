import React, { useState } from 'react';

export default function GridLights() {
  const [lights, setLights] = React.useState(Array.from({length: 4}, ()=>Array.from({length: 4}, ()=>0)));
  const [store, setStore] = React.useState([]);
  const [allOn, setAllOn] = React.useState(false);
  const [onLights, setOnLights] = React.useState(0);

  React.useEffect(() => {
    if(onLights==16)setAllOn(true);
    else if(onLights==0)setAllOn(false);
  }, [onLights])

  const handleClick = (i, j) => {
    if(allOn && lights[i][j]==1) {
      let newStore = [...store];
      let a = newStore.pop();
      setStore(newStore);
      let idx1 = a[0], idx2 = a[1];
      let newLights = lights.map(item=>[...item]);
      newLights[idx1][idx2] = 0;
      setOnLights(prev=>prev-1);
      setLights(newLights);
    }
    else {
      if(lights[i][j] == 1)return;
      let newLights = lights.map(item=>[...item]);
      newLights[i][j] = 1;
      setLights(newLights);
      setOnLights(prev=>prev+1);
      let newStore = [...store];
      newStore.push([i,j]);
      setStore(newStore);
    }
  }

  const onBulb = {
    backgroundColor: 'yellow',
    border: '1px solid #a9a9a9',
    borderRadius: '50%',
    height: '36px',
    width: '36px'
  }

  const offBulb = {
    backgroundColor: '#d3d3d3',
    border: '1px solid #a9a9a9',
    borderRadius: '50%',
    height: '36px',
    width: '36px'
  }

  return (
    <div>
      <h2>Grid Lights</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", border: '1px solid #a9a9a9', width: 'fit-content', padding: '18px', borderRadius: '6px' }}>
        {lights.map((light, i) => {
          return (
            light.map((l, j) => {
              return (
                <div style={l==1?onBulb:offBulb} onClick={()=>handleClick(i, j)}></div>
              );
            })
          )
        })}
      </div>
    </div>
  );
}
