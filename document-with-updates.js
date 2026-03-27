import React, { useState } from 'react';

export const Document = () => {
  const [input, setInput] = useState('');
  const [content, setContent] = useState([]);
  const [style, setStyle] = useState({ backgroundColor: '', color: 'black' });
  const handleAdd = () => {
    setContent((prev) => [...prev, input]);
    setStyle({ backgroundColor: 'blue', color: 'white' });
    setTimeout(() => setStyle({ backgroundColor: '', color: 'black' }), 2000);
    setInput('');
  };
  const transitionStyle = {
    transition: 'background-color 0.5s ease-out',
  };
  const btnStyles = {
    backgroundColor: '#04AA6D',
    color: 'white',
    borderRadius: '6px',
    padding: '6px 24px',
  };

  const contentStyles = {
    backgroundColor: '#d3d3d3',
    height: '225px',
    borderRadius: '6px',
    padding: '6px',
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button style={btnStyles} onClick={handleAdd}>
        Enter
      </button>
      <div style={contentStyles}>
        {content.map((item, idx) => (
          <span
            style={{
              ...(idx == content.length - 1 ? style : { color: 'black' }),
              ...transitionStyle,
            }}
          >
            {item}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};
