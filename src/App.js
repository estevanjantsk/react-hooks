import React from 'react';
import TodoApp from './components/TodoApp';

const App = ({ title }) => (
  <div>
    {title}
    <div>
      useReducer sample
    </div>
    <div>
      <TodoApp />
    </div>
  </div>
);

export default App;
