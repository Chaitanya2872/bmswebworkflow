// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders Sign In page when user is not logged in', () => {
//   localStorage.removeItem('authToken'); // Simulate logged-out state

//   render(<App />);
  
//   const signInText = screen.getByText(/sign in/i); // Adjust this to match real visible text in SignInPage
//   expect(signInText).toBeInTheDocument();
// });
// src/App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders sign in page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if something from SignInPage renders, adjust according to your actual content
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});
