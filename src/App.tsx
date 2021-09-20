import * as React from 'react';
import { Checkbox, ColorPicker, Slider } from './components';

function App(): JSX.Element {
  const [boxSize, setBoxSize] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(false);
  const [color, setColor] = React.useState('#4eb439');

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
      {/* sliders */}
      <Slider ariaLabel="Test slider 1" onChange={handleSlider} value={boxSize * 100} />
      <Slider ariaLabel="Test slider 2" isDisabled onChange={() => null} value={50} />
      <div style={{ transform: `scaleX(${boxSize})`, backgroundColor: '#4EB439', marginTop: '2rem', height: '2rem' }} />
      {/* checkboxes */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Checkbox isChecked={checked} labelText="Standard Checkbox" name="1" onChange={handleCheckboxChange} />
        <Checkbox isChecked isDisabled name="2" labelText="Disabled Checkbox" />
      </div>
      {/* color picker */}
      <p style={{ margin: '1.5rem 0 1rem 0', fontWeight: 700, fontSize: '1.1rem' }}>Color Picker Component</p>
      <ColorPicker ariaLabel="Color picker" color={color} onChange={setColor}>
        Pick your color
      </ColorPicker>
    </div>
  );
}

export default App;
