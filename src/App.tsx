import * as React from 'react';
import { Checkbox, Slider } from './components';

function App(): JSX.Element {
  const [boxSize, setBoxSize] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(false);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBoxSize(Number(event.currentTarget.value) / 100);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      // set flag in global state
    }
  };

  return (
    <div className="App">
      Page
      {/* for demo purposes -> remove when needed */}
      {/* slider */}
      <Slider ariaLabel="Generalisme 1 slider" onChange={handleSlider} value={boxSize * 100} />
      <div style={{ transform: `scaleX(${boxSize})`, backgroundColor: '#4EB439', marginTop: '2rem', height: '2rem' }} />
      {/* checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Checkbox isChecked={checked} labelText="Standard Checkbox" name="1" onChange={handleCheckboxChange} />
        <Checkbox isChecked isDisabled name="2" labelText="Disabled Checkbox" />
      </div>
    </div>
  );
}

export default App;
