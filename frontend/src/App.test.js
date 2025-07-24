// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
// // App.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders Sign in heading', () => {
//   render(<App />);
//   const heading = screen.getByText(/sign in/i); // updated to match your UI
//   expect(heading).toBeInTheDocument();
// });
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

  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});
