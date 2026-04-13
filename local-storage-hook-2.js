import { useEffect, useState } from 'react'
export const useLocalStorage = (key, initialValue) => {
  const [value, setVal] = useState(localStorage.getItem(key) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, initialValue);
  }, [])
  function setValue(val) {
    localStorage.setItem(key, val);
    setVal(localStorage.getItem(key));
  }
  return {value, setValue};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
