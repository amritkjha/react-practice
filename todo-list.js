import React, { useState } from 'react';

function TodoList() {
  const [todoListItems, setTodoListItems] = useState([
    {
      id: '1',
      title: 'Note 1',
      status: true
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const createNote = () => {
    setTodoListItems(prev => [...prev, {
      id: todoListItems.length+1,
      title: inputVal,
      status: false
    }])
    setInputVal('');
  }
  const handleDelete = (id) => {
    setTodoListItems(prev => prev.filter(item => item.id !== id))
  };
  const todolistContainerStyles = {
    margin: '12px auto',
    width: '266px',
    border: '1px solid #D3D3D3',
    padding: '6px'
  }
  const noteItemStyles = {
    width: '100%',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '6px 0px'
  }
  return (
    <div>
      <div>
        <input value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
        <button onClick={createNote}>Create</button>
      </div>
      <div style={todolistContainerStyles}>
        {todoListItems?.map((item) => {
          return (
            <div style={noteItemStyles}>
              {/*<input type="checkbox" checked={item.status} />*/}
              {item?.title}
              <button onClick={()=>handleDelete(item.id)}>🗑</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <TodoList />
    </div>
  );
}
