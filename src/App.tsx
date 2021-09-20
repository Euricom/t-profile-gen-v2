import * as React from 'react';
import { Checkbox, Slider } from './components';
import RadioButton from './components/RadioButton';

function App(): JSX.Element {
  const [boxSize, setBoxSize] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(false);
  const [selectedRadio, setSelectedRadio] = React.useState<string>();

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBoxSize(Number(event.currentTarget.value) / 100);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      // set flag in global state
    }
  };

  const handleRadioChange = (value: string) => setSelectedRadio(value);

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
      {/* radio buttons */}
      <div>
        <RadioButton
          checked={selectedRadio === 'fullname'}
          id="fullname-radio"
          label="Show full name"
          onChange={handleRadioChange}
          name="fullname-group"
          value="fullname"
        />
        <RadioButton
          checked={selectedRadio === 'address'}
          id="address-radio"
          label="Show address"
          onChange={handleRadioChange}
          name="fullname-group"
          value="address"
        />
      </div>
    </div>
  );
}

export default App;
