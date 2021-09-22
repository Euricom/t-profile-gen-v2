import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../utils/test/render';
import SkillSetControl from '.';

describe('SkillSetControl', () => {
  it('should render by default', () => {
    const handleSkillChange = jest.fn();
    const handleProficiencyChange = jest.fn();

    const skill = 'React';
    const proficiency = 10;

    render(
      <SkillSetControl
        label="Generalisme 1"
        id="g1"
        name="gen1"
        skill={skill}
        onSkillChange={handleSkillChange}
        proficiency={proficiency}
        onProficiencyChange={handleProficiencyChange}
      />,
    );

    const textField = screen.getByRole('textbox', { name: /generalisme 1/i });
    expect(textField).toHaveValue(skill);

    userEvent.type(textField, '123');
    expect(handleSkillChange).toHaveBeenCalledTimes(3);
    expect(handleSkillChange).toHaveBeenNthCalledWith(2, 'gen1', 'React2');

    const slider = screen.getByRole('slider', { name: /generalisme 1/i });
    expect(slider).toHaveValue(proficiency.toString());
    fireEvent.change(slider, { target: { value: 13 } });
    expect(handleProficiencyChange).toHaveBeenCalledWith('gen1', 13);
  });

  it('should have a disabled slider when no skill is entered', () => {
    const handleSkillChange = jest.fn();
    const handleProficiencyChange = jest.fn();

    const skill = '';
    const proficiency = 5;

    render(
      <SkillSetControl
        label="Generalisme 1"
        id="g1"
        name="gen1"
        skill={skill}
        onSkillChange={handleSkillChange}
        proficiency={proficiency}
        onProficiencyChange={handleProficiencyChange}
      />,
    );

    const slider = screen.getByRole('slider', { name: /generalisme 1/i });
    expect(slider).toBeDisabled();
    fireEvent.focus(slider);
    userEvent.keyboard('{arrowright}');
    expect(handleProficiencyChange).not.toHaveBeenCalled();
  });
});
