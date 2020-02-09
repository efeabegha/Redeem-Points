import React from 'react';
import './App.css';

import {Card} from './components/card.jsx';
import {Input} from './components/input.jsx';
import {Graph} from './components/graph.jsx';

function App() {
  return (
    <div className="App">
      <h1>RedeeM</h1><hr />
      <div className="wrapper">
        <div className="div">
            <Input />
        </div>
        <div className="div">
          <Graph/>
        </div>
        <div className="div">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;


