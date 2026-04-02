import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState(localStorage.getItem('query')||'');
  const handleChange = (e) => {
    setInput(e.target.value);
    localStorage.setItem('query', e.target.value);
  }
  return (
    <div>
      <input data-testid='input-id' value={input} onChange={handleChange} type="text"/>
    </div>
  );
};

export default App;
