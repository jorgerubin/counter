import Counter from './Counter';
import { render, screen, fireEvent  } from '@testing-library/react';


test('renders bottom Incremental', () => {
    render(<Counter />);
    const buttonelement = screen.getByText(/incrementar/i);
    expect(buttonelement).toBeInTheDocument();
  });
  
  test('increment Incremental at moment to push bottom', () => {
    render(<Counter />);
    const buttonelement = screen.getByText(/incrementar/i);
    fireEvent.click(buttonelement);
    const counterelement = screen.getByText(/Contador: 1/i);
    expect(counterelement).toBeInTheDocument();
  });
  