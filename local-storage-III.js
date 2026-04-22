import { useState, useEffect } from 'react';
export const useTodoList = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  useEffect(() => {
    console.log(localStorage.getItem('todos'));
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  const addTodo = (text) => {
    setTodos(prev => [...prev, {
      id: todos.length==0?1:prev[prev.length-1].id+1,
      text: text,
      completed: false
    }])
  }
  const removeTodo = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(item => {
      if(item.id === id) {
        return {...item, completed: !item.completed}
      } else return item;
    }))
  }
  return { todos, addTodo, removeTodo, toggleTodo };
};

const App = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Incomplete' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
