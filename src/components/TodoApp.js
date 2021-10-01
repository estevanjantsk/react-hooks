import React from 'react';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        }
        return todo;
      });
    case 'UNDO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        }
        return todo;
      });
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = React.useReducer(
    todoReducer,
    initialTodos,
  );

  const handleChange = (todo) => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label htmlFor={`todo-${todo.id}`}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
              id={`todo-${todo.id}`}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoApp;
