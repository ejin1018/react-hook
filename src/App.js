import React from 'react';
import MemoOne from './useMemo/memo01';
import MemoTwo from './useMemo/memo02';
import CBone from './useCallback/Callback01';
import CBtwo from './useCallback/Callback02';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <MemoOne /> */}
      {/* <MemoTwo /> */}
      {/* <CBone /> */}
      <CBtwo />
    </div>
  );
}

export default App;
