import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { fetchOrderById } from '../../store/order/orderSlice';
import { useSelector } from 'react-redux';
import { getSelectedOrder } from '../../store/order/orderSelector';
import Loading from '../../components/Loading';
import { formattedPrice } from '../../utils';

const OrderDetailPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const orderDetailInfo = useSelector(getSelectedOrder);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchOrderById(params.id));
    }
  }, []);

  const totalAmount = orderDetailInfo.orderDetails.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const addToCart = () => {
    //
  };

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문내역상세</h2>
        <hr className="divide-line mt-20" />
      </header>

      {orderDetailInfo ? (
        <>
          <div className="order-list">
            <div className="order-list__header">
              <span>주문번호: {orderDetailInfo.id}</span>
            </div>
            {orderDetailInfo.orderDetails.map((item) => (
              <div key={item.id} className="order-list-item">
                <div className="flex gap-15 mt-10">
                  <img
                    className="w-144 h-144"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div className="flex-col gap-15">
                    <span className="order-name">{item.name}</span>
                    <span className="order-info">
                      {formattedPrice(item.price)}원 / 수량: {item.quantity}개
                    </span>
                  </div>
                </div>
                <button
                  className="primary-button-small flex-center self-start pointer"
                  onClick={addToCart}
                >
                  장바구니
                </button>
              </div>
            ))}
          </div>

          <div className="order-detail-container">
            <div className="w-480">
              <span className="order-detail-title">결제금액 정보</span>
              <hr className="divide-line-thin my-20" />
              <div className="flex justify-between">
                <span className="highlight-text">총 결제금액</span>
                <span className="highlight-text">
                  {formattedPrice(totalAmount)}원
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default OrderDetailPage;
