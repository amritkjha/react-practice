import * as React from 'react';
import './style.css';

function Checkbox({ checked, label, onChange }) {
  return <div style={{color: 'white'}}>
    <input type='checkbox' checked={checked} onChange={onChange} />
    <label>{label}</label>
  </div>;
}

export default function App() {
  const items = ['Kingfisher', 'Heineken', 'Bira', 'Budweiser', 'Carlsberg'];
  const [values, setValues] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [allChecked, setAllChecked] = React.useState(false);
  React.useEffect(() => {
    console.log('values: ', values);
    values.every((item) => item === true) && setAllChecked(true);
  }, [values]);
  const handleChange = (e, idx) => {
    console.log('called');
    setValues((prev) => {
      let newArr = [...prev];
      newArr[idx] = e.target.checked ? true : false;
      return newArr;
    });
    !e.target.checked && setAllChecked(false);
  };
  const handleAllSelected = (e) => {
    if (e.target.checked) {
      setValues((prev) => prev.map((item) => true));
      setAllChecked(true);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <h1 className="font-medium text-white text-base">Algochurn</h1>
      <h2 className="font-bold text-white text-xl mb-4">
        Select All Implementation
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllSelected}
        />
      </h2>
      <p className="text-white text-sm text-center">
        Read the description to start solving the problem.
      </p>
      <div>
        {items.map((item, idx) => (
          <Checkbox
            checked={values[idx]}
            label={item}
            onChange={(e) => handleChange(e, idx)}
          />
        ))}
      </div>
    </div>
  );
}
