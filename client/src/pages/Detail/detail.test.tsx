import React from 'react';
import { render } from '@testing-library/react';
import Detail from './index';
import { ProductI } from '@/models/product';

// jest.mock('react-redux', () => ({
//   ...(jest.requireActual('react-redux') as any),
//   useSelector: () => {},
//   useAppDispatch: () => {},
// }));

// const product: ProductI = {
//   id: 1,
//   name: '냉면용기(대)',
//   price: 83700,
//   imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
// };
//
// describe('Detail.tsx', () => {
//   it('render', () => {
//     const utils = render(<Detail />);
//   });
// });

it('추후 컴포넌트 테스트 추가', () => {
  expect(2 + 2).toBe(4);
});
