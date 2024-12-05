import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/how i built this web page using react/i);
  expect(linkElement).toBeInTheDocument();
});
