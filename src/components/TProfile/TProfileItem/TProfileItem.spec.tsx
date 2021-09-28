import React from 'react';
import { screen } from '@testing-library/react';
import TProfileItem from './TProfileItem';
import { render } from '../../../utils/test/render';

describe('TProfileItem component:', () => {
  test('reders by default - generalisme version', () => {
    render(
      <TProfileItem legend="Test Legend" scale={50} type="generalisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test skill/i);

    expect(skillBarElement).toBeVisible();
    expect(skillBarElement).toHaveStyleRule('background-color', '#4eb439');
    expect(skillBarElement).toHaveStyleRule('width', '50%');
    expect(skillBarElement).not.toHaveStyleRule('border');
  });

  test('reders by default - specialisme version', () => {
    render(
      <TProfileItem legend="Test Legend" scale={50} type="specialisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test skill/i);

    expect(skillBarElement).toBeVisible();
    expect(skillBarElement).toHaveStyleRule('background-color', '#4eb439');
    expect(skillBarElement).toHaveStyleRule('height', '50%');
    expect(skillBarElement).not.toHaveStyleRule('border');
  });

  test('reders legend abbreviation', () => {
    render(
      <TProfileItem legend="Test Legend" scale={20} type="generalisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test legend/i);

    expect(skillBarElement).toBeVisible();
    expect(skillBarElement).toHaveStyleRule('width', '20%');
  });

  test('renders custom color', () => {
    render(
      <TProfileItem bgColor="#F804FF" legend="Test Legend" scale={80} type="generalisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test skill/i);

    expect(skillBarElement).toHaveStyleRule('background-color', '#F804FF');
  });

  test('renders border', () => {
    render(
      <TProfileItem border legend="Test Legend" scale={60} type="generalisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test skill/i);

    expect(skillBarElement).toHaveStyleRule('outline', '1px solid #000000');
  });

  test('renders custom border color', () => {
    render(
      <TProfileItem border borderColor="#32FF04" legend="Test Legend" scale={35} type="generalisme">
        Test Skill
      </TProfileItem>,
    );

    const skillBarElement = screen.getByText(/test skill/i);

    expect(skillBarElement).toHaveStyleRule('outline', '1px solid #32FF04');
  });
});
