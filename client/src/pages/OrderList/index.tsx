import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/store';
import { fetchOrderList, getOrdersAll } from '@/store/order';
import useDevice from '@/hooks/useDevice';
import { formattedPrice } from '@/utils';

const OrderListPage = () => {
  const device = useDevice();
  const isMobile = device === 'mobile';
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const orderList = useSelector(getOrdersAll);

  useEffect(() => {
    dispatch(fetchOrderList());
  }, []);

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      {orderList.length === 0 ? (
        <div>주문 목록이 비어있습니다. </div>
      ) : (
        <div className="order-list">
          {orderList.map((list) => (
            <React.Fragment key={list.id}>
              <div className="order-list__header">
                <span>주문번호: {list.id}</span>
                <span
                  className="pointer"
                  onClick={() => navigate(`/order/${list.id}`)}
                >
                  상세보기 &#62;
                </span>
              </div>
              {list.orderDetails.map((detail) => (
                <div key={detail.id} className="order-list-item">
                  <div className="flex gap-15 mt-10">
                    <img
                      className={isMobile ? 'w-100 h-100' : 'w-144 h-144'}
                      src={detail.imageUrl}
                      alt={detail.name}
                    />
                    <div className="flex-col gap-15">
                      <span className="order-name">{detail.name}</span>
                      <span className="order-info">
                        {formattedPrice(detail.price)}원 / 수량:{' '}
                        {detail.quantity}개
                      </span>
                    </div>
                  </div>
                  <button className="primary-button-small flex-center self-start">
                    장바구니
                  </button>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderListPage;
