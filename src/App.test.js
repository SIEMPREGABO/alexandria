import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links from routes', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});
