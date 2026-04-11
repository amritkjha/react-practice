import { useState } from 'react';
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    setTodos(prev=>[...prev, input]);
    setInput('');
  }
  return (
    <div>
      <input data-testid="input-id" value={input} onChange={e=>setInput(e.target.value)} />
      <button data-testid="button-id" onClick={handleAdd}>Add a todo</button>
      <ul data-testid="ul-id">
        {todos?.map((todo) => {
          return (
            <li>{todo}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default App
