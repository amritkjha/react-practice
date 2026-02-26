import React from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(27);
  const progressBarContainerStyles = {
    border: '1px solid #A9A9A9',
    width: '240px',
    height: '18px',
    marginTop: '18px',
    borderRadius: '0px 6px 6px 0px'
  }
  const progressBarStyles = {
    height: '100%',
    backgroundColor: 'green',
    width: `${progress}%`,
    maxWidth: '100%',
    borderRadius: '0px 6px 6px 0px'
  }
  return (
    <div>
      <input type="number" value={progress} onChange={e=>setProgress(e.target.value, 100)} max='100' min="0" />
      <div style={progressBarContainerStyles}>
        <div style={progressBarStyles} />
      </div>
    </div>
  );
}
