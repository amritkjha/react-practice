import React, { useEffect, useState } from 'react';
import './style.css';
import toast, { Toaster } from 'react-hot-toast';
import useShiftEnter from './useKeyPress';

const useShiftEnter = () => {
  const [keyPress, setKeyPress] = useState(false);
  const handleKeyDown = (e) => {
    if (e.shiftKey && e.key == 'Enter') {
      console.log('down');
      setKeyPress((prev) => !prev);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return keyPress;
};

export default function App() {
  const notify = () => toast('Shift + Enter pressed');
  const shiftEnter = useShiftEnter();
  useEffect(() => {
    console.log('shiftEnter: ', shiftEnter);
    shiftEnter && notify();
  }, [shiftEnter]);
  return (
    <div>
      <div className="container">
        <h1>useKeyPress</h1>
        <span>Algochurn</span>

        <p>Read the description for more information</p>
        {shiftEnter && <Toaster />}
      </div>
    </div>
  );
}
