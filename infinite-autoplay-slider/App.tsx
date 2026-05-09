import React, { useEffect } from 'react';
import './style.css';
import { cardDetails } from './cardDetails';

export default function App() {
  return (
    <div className="mainDiv">
      <h1>Infinite Moving Cards</h1>
      <div className="container">
        {cardDetails.map((item) => {
          return (
            <div
              className="cardStyle"
              onClick={() => window.open(item.href, '_blank')}
            >
              <h3>{item.content}</h3>
              <div className="avatarDiv">
                <img className="avatar" src={item.avatar} />
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
        {cardDetails.map((item) => {
          return (
            <div
              className="cardStyle"
              aria-hidden="true"
              onClick={() => window.open(item.href, '_blank')}
            >
              <h3>{item.content}</h3>
              <div className="avatarDiv">
                <img className="avatar" src={item.avatar} />
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
