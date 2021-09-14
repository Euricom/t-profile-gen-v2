import * as React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';
import { WrapperComponent } from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <WrapperComponent />
    </div>
  );
}

export default App;
