import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('should render "About Page"', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About Page/i);
  expect(linkElement).toBeInTheDocument();
});
