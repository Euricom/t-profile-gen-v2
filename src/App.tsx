import * as React from 'react';
import { Slider } from './components';

function App(): JSX.Element {
  const [boxSize, setBoxSize] = React.useState<number>(0);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBoxSize(Number(event.currentTarget.value) / 100);

  return (
    <div className="App">
      Page
      {/* for demo purposes -> remove when needed */}
      <Slider ariaLabel="Generalisme 1 slider" onChange={handleSlider} value={boxSize * 100} />
      <div style={{ transform: `scaleX(${boxSize})`, backgroundColor: '#4EB439', marginTop: '2rem', height: '2rem' }} />
    </div>
  );
}

export default App;
