import React from 'react';

export default function GenerateTable() {
  const [rowCount, setRowCount] = React.useState(3);
  const [colCount, setColCount] = React.useState(3);
  const cellStyles = {
    border: '1px solid #A9A9A9',
    padding: '6px 27px'
  }
  return (
    <div>
      <input type="number" value={rowCount} onChange={e=>setRowCount(e.target.value)} />
      <input type="number" value={colCount} onChange={e=>setColCount(e.target.value)} />
      <table>
        {Array.from({length: rowCount}, (_,idx1)=><tr>{Array.from({length: colCount}, (_,idx2)=><td style={cellStyles}>R{idx1+1}C{idx2+1}</td>)}</tr>)}
      </table>
    </div>
  );
}
