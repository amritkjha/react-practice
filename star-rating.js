import React, { useState } from 'react';

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(3);
  const starStyles = {
    fontSize: '36px',
    cursor: 'pointer'
  }
  return (
    <div>
      {Array.from({ length: totalStars })?.map((str, idx) => {
        return (
          <span style={starStyles} onClick={()=>setRating(idx+1)}>{idx>rating-1?'☆':'★'}</span>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Star Rating</h2>
      <StarRating />
    </div>
  );
}
