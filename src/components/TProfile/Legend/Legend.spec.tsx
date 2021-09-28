import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test/render';
import Legend from './Legend';

describe('Legend component:', () => {
  test('renders by default', () => {
    const skillsDataMock = [
      {
        abbr: 'g1',
        id: 'g1',
        proficiency: 10,
        skill: 'se',
      },
      {
        abbr: 'g2',
        id: 'g2',
        proficiency: 10,
        skill: '',
      },
      {
        abbr: 'g3',
        id: 'g3',
        proficiency: 10,
        skill: '',
      },
      {
        abbr: 's1',
        id: 's1',
        proficiency: 84,
        skill: 'React',
      },
      {
        abbr: 's2',
        id: 's2',
        proficiency: 28,
        skill: '',
      },
      {
        abbr: 's3',
        id: 's3',
        proficiency: 10,
        skill: '',
      },
    ];

    render(<Legend skillsData={skillsDataMock} />);

    expect(screen.getByRole('list')).toBeVisible();
  });
});
