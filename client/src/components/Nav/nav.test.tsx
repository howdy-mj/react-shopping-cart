/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import Nav from './index';

it('제목을 누르면 /로 이동한다.', async () => {
  const { getByText } = render(<Nav />);

  fireEvent.click(getByText('CLEAN CODE SHOP'));

  // const header = getByText('CLEAN CODE SHOP');
  // expect(header).toBeInTheDocument();

  // clickTitleEvent.click(nav);

  // expect(nav).toHaveTextContent('CLEAN CODE SHOP');
});

export {};
