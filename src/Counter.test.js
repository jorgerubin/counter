import Counter from './Counter';
import { render, screen } from '@testing-library/react';


test('renders bottom Incremental', () => {
    render(<Counter />);
    const buttonelement = screen.getByText(/incrementar/i);
    expect(buttonelement).toBeInTheDocument();
  });
  
  test('increment Incremental at moment to push bottom', () => {
    render(<Counter />);
    const buttonelement = screen.getByText(/incrementar/i);
    const counterelement = screen.getByText(/Contador/i);
    expect(buttonelement).toBeInTheDocument();
  });
  