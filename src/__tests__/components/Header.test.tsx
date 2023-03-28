import { render } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('should contain my own name', async () => {
    const { findByText } = render(<Header />);

    expect(await findByText('Josteph')).toBeVisible();
  });
});
