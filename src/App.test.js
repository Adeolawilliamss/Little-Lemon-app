import { render, screen } from '@testing-library/react';
import HomePage from './components/Homepage';

// Test suite for HomePage component
describe('HomePage', () => {
  test('renders the BookingForm form-header', () => {
    render(<HomePage />);
    
    // Assert that the form header is rendered
    const headingElement = screen.getByText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Add more tests as needed for other components or functionalities
});

describe('Homepage', () => {
  test('Trying to find out if the initalState will render',() => {
    const render = jest.fn();
    render()
  })


})