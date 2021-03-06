import React from 'react';
import { render } from '@testing-library/react';
import { GridHeader, GridHeaderProps } from './GridHeader';
import { Fakes } from '../../test-utils/Fakes';

describe('<GridHeader>', () => {
  let props: GridHeaderProps;

  beforeEach(() => {
    props = { score: Fakes.number(), gameOver: Fakes.booleanOptional() };
  });

  test('Score', () => {
    const { getByText } = render(<GridHeader {...props} />);

    const Score = getByText(`Score: ${props.score}`);

    expect(Score).toBeInTheDocument();
  });

  test('GameOver', () => {
    const { getByText } = render(<GridHeader {...props} gameOver />);

    const GameOver = getByText(`Game Over - Congratulation!`);

    expect(GameOver).toBeInTheDocument();
  });
});
