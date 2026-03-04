import React, { useState } from 'react';

export default function GridLights() {
  const [lights, setLights] = React.useState(Array.from({length: 4}, ()=>Array.from({length: 4}, ()=>0)));
  const [store, setStore] = React.useState([]);
  const [onLights, setOnLights] = React.useState(0);
  const checkedAll = () => {
    for(let i=0; i<lights.length; i++) {
      for(let j=0; j<lights[0].length; j++) {
        if(lights[i][j] == 0)return false;
      }
    }
    return true;
  }
  const handleClick = (i, j) => {
    if(onLights == 16) {
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
  return (
    <div>
      <h2>Grid Lights</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px" }}>
        {lights.map((light, i) => {
          return (
            light.map((l, j) => {
              return (
                <div onClick={()=>handleClick(i, j)}>light {l==1?'on':'off'}</div>
              );
            })
          )
        })}
      </div>
      {store}
      {lights}
    </div>
  );
}
