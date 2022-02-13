import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useDevice from '@/hooks/useDevice';
import { useAppDispatch } from '@/store';
import { fetchCartList, getCartAll } from '@/store/cart';
import { formattedPrice } from '@/utils';
import { deleteCartItem } from '@/apis/cart';

const CardPage = () => {
  const device = useDevice();
  const isTablet = device === 'tablet';

  const dispatch = useAppDispatch();

  const cartItems = useSelector(getCartAll);

  useEffect(() => {
    dispatch(fetchCartList());
  }, [cartItems]);

  const toggleAllItems = () => {};

  const toggleItemsToBuy = () => {};

  const deleteItem = () => {};

  const setAmountOfItem = () => {};

  const totalAmount = cartItems.reduce((acc, curr) => {
    return acc + curr.product.price;
  }, 0);

  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>

      {cartItems?.length === 0 ? (
        <div className="flex items-center mt-40">
          장바구니에 담긴 물건이 없습니다.
        </div>
      ) : (
        <div className="flex cart-section-wrap">
          <section className="cart-left-section">
            <div className="flex justify-between items-center">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked={true}
                  onChange={toggleAllItems}
                />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="delete-button" onClick={deleteItem}>
                상품삭제
              </button>
            </div>
            <h3 className="cart-title">든든배송 상품({cartItems.length}개)</h3>
            <hr className="divide-line-gray mt-10" />

            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <div className="cart-container">
                  <div className="flex gap-15 mt-10">
                    <input
                      className="checkbox"
                      name="checkbox"
                      type="checkbox"
                      checked={true}
                      onChange={toggleItemsToBuy}
                    />
                    <img
                      className={isTablet ? 'w-120 h-120' : 'w-144 h-144'}
                      src={item.product.imageUrl}
                      alt={item.product.name}
                    />
                    <span className="cart-name">{item.product.name}</span>
                  </div>
                  <div className="flex-col-center justify-end gap-15">
                    <img
                      className="cart-trash-svg pointer"
                      src="assets/svgs/trash.svg"
                      alt="삭제"
                      onClick={() => deleteCartItem(item.id)}
                    />
                    <div className="number-input-container">
                      <input
                        type="number"
                        className="number-input"
                        value="1"
                        onChange={setAmountOfItem}
                      />
                      <div>
                        <button className="number-input-button">▲</button>
                        <button className="number-input-button">▼</button>
                      </div>
                    </div>
                    <span className="cart-price">
                      {formattedPrice(item.product.price)}원
                    </span>
                  </div>
                </div>
                <hr className="divide-line-thin mt-10" />
              </React.Fragment>
            ))}
          </section>
          <section className="cart-right-section">
            <div className="cart-right-section__top">
              <h3 className="cart-title">결제예상금액</h3>
            </div>
            <hr className="divide-line-thin" />
            <div className="cart-right-section__bottom">
              <div className="flex justify-between p-20 mt-20 order-right-section__amount">
                <span className="highlight-text">결제예상금액</span>
                <span className="highlight-text">
                  {formattedPrice(totalAmount)}원
                </span>
              </div>
              <div className="flex-center mt-30 mx-10 order-right-section__buy-button">
                <button className="primary-button flex-center">
                  주문하기({cartItems.length}개)
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default CardPage;
