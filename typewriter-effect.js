import React, { useEffect, useState } from 'react';

export default function TextGenerate({ sampleText }) {
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const timeoutIds = [];
    if (typing) {
      for (let i = 0; i < sampleText.length; i++) {
        let id = setTimeout(() => {
          // console.log('sample i: ', sampleText[i], text);
          setText((prev) => prev + sampleText[i]);
        }, i * 10);
        timeoutIds.push(id);
      }
    }
    () => {
      timeoutIds?.forEach((id) => clearTimeout(id));
    };
  }, [typing]);
  return (
    <div>
      <div>
        <button onClick={() => setTyping(true)}>Start generating</button>
        <button
          onClick={() => {
            setTyping(false);
            setText('');
          }}
        >
          Reset
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
}
