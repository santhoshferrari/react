import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

ReactDOM.findDOMNode(this.refs.myInput);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
