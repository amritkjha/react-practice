import React from 'react';

function HolyGrail() {
  const appStyles = `
    .app {
      text-align: center;
      height: calc(100vh - 369px);
    }
    .header {
      height: 60px;
      background-color: blue;
      color: white;
    }
    .container {
      display: grid;
      grid-template-columns: 100px 1fr 100px;
      height: 100%;
    }
    .main {
      background-color: yellow;
      height: 100%;
      overflow-y: auto;
    }
    .left, .right {
      background-color: green;
      overflow-y: auto;
    }
    .footer {
      background-color: red;
      height: 100px;
      position: fixed;
      bottom: 200px;
      width: 100%;
      color: white;
    }
  `
  return (
    <>
      <style>{appStyles}</style>
      <div className="app">
        <header className="header">Header</header>
        <div className="container">
          <aside className="left">Left</aside>
          <main className="main">Main</main>
          <aside className="right">Right</aside>
        </div>
        <footer className="footer">Footer</footer>
      </div>
    </>
  );
}

export default HolyGrail;
