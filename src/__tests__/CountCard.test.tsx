import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CountCard from '../CountCard';
import '@testing-library/jest-dom/vitest';

describe('CountCard', () => {
  it('should render the initial count', () => {
    const { getByText } = render(<CountCard count={0} setCount={() => {}} />);
    expect(getByText('count is 0')).toBeInTheDocument();
  });

  it('should increment count when clicked', async () => {
    const setCount = vi.fn();
    const { getByRole } = render(<CountCard count={5} setCount={setCount} />);

    const button = getByRole('button');
    await userEvent.click(button);

    expect(setCount).toHaveBeenCalled();
    const updateFn = setCount.mock.calls[0][0];
    expect(updateFn(5)).toBe(6);
  });

  it('should display the HMR instruction text', () => {
    const { getByText } = render(<CountCard count={0} setCount={() => {}} />);
    const codeElement = getByText('src/App.tsx');

    expect(getByText(/Edit/)).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(getByText(/and save to test HMR/)).toBeInTheDocument();
  });
});
