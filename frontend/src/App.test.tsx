import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign In page when user is not logged in', () => {
  localStorage.removeItem('authToken'); // Simulate logged-out state

  render(<App />);
  
  const signInText = screen.getByText(/sign in/i); // Adjust this to match real visible text in SignInPage
  expect(signInText).toBeInTheDocument();
});
