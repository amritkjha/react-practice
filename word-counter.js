import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const len = input.length>0 ? input.trim().split(' ').length : 0;
  return (
    <>
      <textarea data-testid='textarea-id' value={input} onChange={e=>setInput(e.target.value)} />
      <h1 data-testid='output-id'>Your article has {len} words</h1>
    </>
  )
}

export default App
