import React from 'react';
import { render } from '@testing-library/react';
import Nav from './index';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => {},
}));

describe('Nav.tsx', () => {
  it('render 성공', () => {
    const utils = render(<Nav />);
    expect(utils.container).toMatchSnapshot();
  });

  it('제목, 장바구니, 주문목록 텍스트 확인', () => {
    const utils = render(<Nav />);
    utils.getAllByText('CLEAN CODE SHOP');
    utils.getAllByText('장바구니');
    utils.getAllByText('주문목록');
  });
});

export {};
