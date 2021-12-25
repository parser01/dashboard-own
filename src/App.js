import React from 'react';
import './App.css';
import Btns from './components/Btns';
import Rows from './components/Rows';

function App(props) {
  return (
    <div className="app">
      <Rows rows={props.state.dashboard} />
      <Btns />
    </div>
  );
}

export default App;
