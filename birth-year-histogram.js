import React, { useEffect, useState, useMemo } from 'react';

export default function BirthYearHistogram() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(d=>setData(d.users))
    .catch(err=>setError('Error: ', err))
  }, []);

  const yearData = useMemo(() => {
    const map = new Map();
      data.forEach(item => {
        let val = 1;
        const key = item.birthDate.split('-')[0]
        if(map.has(key)) {
          val = map.get(key)
          val += 1;
        }
        map.set(key, val);
      })
    return map;
  }, [data])

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Birth Year Histogram</h2>
      <div style={{ display: 'flex', alignItems: 'end', overflowX: 'auto', borderBottom: '1px solid' }}>
        <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <div style={{ height: '40px' }}>2</div>
          <div style={{ height: '40px' }}>1.5</div>
          <div style={{ height: '40px' }}>1</div>
          <div style={{ height: '40px' }}>0.5</div>
        </div>
        <div style={{ height: '160px', width: '3px', border: '1px solid', margin: '0 6px' }}></div>
        {Array.from(yearData.entries()).map(([key, val]) => {
          return (
            <div key={key} style={{ height: `${val*80}px`, width: '15px', backgroundColor: key%2?'green':'red', flexShrink: 0, margin: '0 3px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
              <span>{key[0]}</span>
              <span>{key[1]}</span>
              <span>{key[2]}</span>
              <span>{key[3]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
