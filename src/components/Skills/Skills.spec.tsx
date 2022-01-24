import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SkillProvider, { initialSkillSets, SkillContext } from '../../contexts/skills';
import { render } from '../../utils/test/render';
import Skills from '.';

describe('Skills', () => {
  it('should fill in and clear skill form', () => {
    const changeSkill = jest.fn();
    const changeProficiency = jest.fn();
    const changeFullName = jest.fn();
    const resetProfile = jest.fn();
    const sortSkills = jest.fn();

    render(
      <SkillContext.Provider
        value={{
          fullName: '',
          changeFullName,
          skillSets: initialSkillSets,
          changeSkill,
          changeProficiency,
          resetProfile,
          sortSkills,
        }}
      >
        <Skills />
      </SkillContext.Provider>,
    );

    const gen1SkillInput = screen.getByRole('textbox', { name: /generalisme 1/i });
    userEvent.type(gen1SkillInput, 'React');
    expect(changeSkill).toHaveBeenNthCalledWith(3, 'g1', 'a');

    screen.getByRole('textbox', { name: /generalisme 2/i });
    screen.getByRole('textbox', { name: /generalisme 3/i });
    screen.getByRole('textbox', { name: /specialisme 1/i });
    screen.getByRole('textbox', { name: /specialisme 2/i });
    screen.getByRole('textbox', { name: /specialisme 3/i });

    const fullNameInput = screen.getByRole('textbox', { name: /full name/i });
    userEvent.type(fullNameInput, 'Tim');
    expect(changeFullName).toHaveBeenCalledTimes(3);

    expect(screen.getByRole('button', { name: /clear/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /sort/i })).toBeVisible();

    const clearButton = screen.getByRole('button', { name: /clear/i });
    userEvent.click(clearButton);
    expect(resetProfile).toHaveBeenCalledTimes(1);
  });

  it('should fill in and sort skill form', () => {
    render(
      <SkillProvider>
        <Skills />
      </SkillProvider>,
    );

    const gen1SkillInput = screen.getByRole('textbox', { name: /generalisme 1/i });
    userEvent.type(gen1SkillInput, 'NodeJs');
    const gen1SkillRange = screen.getByRole('slider', { name: /generalisme 1/i });
    fireEvent.change(gen1SkillRange, { target: { value: 50 } });

    const gen2SkillInput = screen.getByRole('textbox', { name: /generalisme 2/i });
    userEvent.type(gen2SkillInput, 'Javascript');
    const gen2SkillRange = screen.getByRole('slider', { name: /generalisme 2/i });
    fireEvent.change(gen2SkillRange, { target: { value: 60 } });

    const gen3SkillInput = screen.getByRole('textbox', { name: /generalisme 3/i });
    userEvent.type(gen3SkillInput, 'DevOps');
    const gen3SkillRange = screen.getByRole('slider', { name: /generalisme 3/i });
    fireEvent.change(gen3SkillRange, { target: { value: 80 } });

    const spec1SkillInput = screen.getByRole('textbox', { name: /specialisme 1/i });
    userEvent.type(spec1SkillInput, 'Java');

    const spec2SkillInput = screen.getByRole('textbox', { name: /specialisme 2/i });
    userEvent.type(spec2SkillInput, '#Net');

    const spec3SkillInput = screen.getByRole('textbox', { name: /specialisme 3/i });
    userEvent.type(spec3SkillInput, 'React');

    const sortButton = screen.getByRole('button', { name: /sort/i });
    userEvent.click(sortButton);

    expect(gen1SkillInput).toHaveValue('DevOps');
  });
});
