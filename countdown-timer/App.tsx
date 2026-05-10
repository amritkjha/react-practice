import * as React from 'react';
import Countdown from './Countdown';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Countdown Timer</h1>
        <span>Algochurn</span>
        <p>Read the description to start solving the problem</p>
        <Countdown />
      </div>
    </div>
  );
}
