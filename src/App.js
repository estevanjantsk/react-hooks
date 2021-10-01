import React from 'react';
import TodoApp from './components/TodoApp';
import EffectApp from './components/EffectApp';
import EffectTimer from './components/EffectTimer';
import RefApp from './components/RefApp';
import MemoApp from './components/MemoApp';

const App = ({ title }) => (
  <div>
    <div>
      {title}
    </div>
    <div style={{ margin: '10px 0' }}>
      <div>
        useReducer sample
      </div>
      <div>
        <TodoApp />
      </div>
    </div>

    <div style={{ margin: '10px 0' }}>
      <div>
        useEffect sample
      </div>
      <div>
        <EffectApp />
      </div>
      <div>
        timer sample
      </div>
      <div>
        <EffectTimer />
      </div>
    </div>

    <div style={{ margin: '10px 0' }}>
      <div>useRef sample</div>
      <div>
        <RefApp />
      </div>
    </div>

    <div style={{ margin: '10px 0' }}>
      <div>useMemo sample</div>
      <div>
        <MemoApp />
      </div>
    </div>
  </div>
);

export default App;
