import { useState } from 'react'
const App = () => {
  const [celsius, setCelsius] = useState(0);
  let farhen = (celsius*9/5)+32;
  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={celsius}
          onChange={e=>setCelsius(e.target.value)}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {celsius}°C is {farhen.toFixed(2)}°F and {(Number(celsius)+273.15).toFixed(2)}K.
      </p>
    </div>
  );
};

export default App;
