import * as React from 'react';
import { Button, Checkbox, ColorPicker, Slider, SkillSetControl } from './components';
import RadioButton from './components/RadioButton';

function App(): JSX.Element {
  const [boxSize, setBoxSize] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(false);
  const [color, setColor] = React.useState('#4eb439');
  const [selectedRadio, setSelectedRadio] = React.useState<string>();

  const [skill, setSkill] = React.useState('');
  const [proficiency, setProficiency] = React.useState<number>(0);
  const handleSkillChange = (skill: string) => setSkill(skill);
  const handleProficiencyChange = (proficiency: number) => setProficiency(proficiency);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBoxSize(Number(event.currentTarget.value) / 100);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      // set flag in global state
    }
  };

  const handleRadioChange = (value: string) => setSelectedRadio(value);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    // do something with event
    event;

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
      {/* SkillSetControl */}
      <div>
        <SkillSetControl
          label="Generalisme 1"
          skill={skill}
          proficiency={proficiency}
          onSkillChange={handleSkillChange}
          onProficiencyChange={handleProficiencyChange}
          id="G1"
        />
      </div>
      {/* color picker */}
      <p style={{ margin: '1.5rem 0 1rem 0', fontWeight: 700, fontSize: '1.1rem' }}>Color Picker Component</p>
      <ColorPicker ariaLabel="Color picker" color={color} onChange={setColor}>
        Pick your color
      </ColorPicker>
      {/*  buttons */}
      <p style={{ margin: '1.5rem 0 1rem 0', fontWeight: 700, fontSize: '1.1rem' }}>Buttons</p>
      <Button size="small" onClick={handleButtonClick}>
        Small Primary Button
      </Button>
      <Button size="medium" onClick={handleButtonClick}>
        Medium Primary Button
      </Button>
      <Button size="large" onClick={handleButtonClick}>
        Large Primary Button
      </Button>
      <br />
      <Button size="small" onClick={handleButtonClick} variant="secondary">
        Small Secondary Button
      </Button>
      <Button size="medium" onClick={handleButtonClick} variant="secondary">
        Medium Secondary Button
      </Button>
      <Button size="large" onClick={handleButtonClick} variant="secondary">
        Large Secondary Button
      </Button>
    </div>
  );
}

export default App;
