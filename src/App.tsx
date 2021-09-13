import * as React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';
import { Slider } from './components';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <Slider />
    </div>
  );
}

export default App;
