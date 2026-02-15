import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  const modalContainerStyles = {
    border: '1px solid #A9A9A9',
    padding: '6px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D3D3D3',
    marginTop: '12px'
  }
  const crossButtonStyles = {
    marginLeft: 'auto',
    backgroundColor: '#D3D3D3',
    border: 0
  }
  return (
    <div style={modalContainerStyles}>
      <button style={crossButtonStyles} onClick={onClose}>✖</button>
      {children}
    </div>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const content = (
    <div>
      <h2>Modal Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/* Use your Modal component here */}
      {isOpen &&
        <Modal isOpen onClose={()=>setIsOpen(false)} children={content} />
      }
    </div>
  );
}
