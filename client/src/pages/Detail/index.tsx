import React, { useEffect } from 'react';
import useDevice from '../../hooks/useDevice';
import { useAppDispatch } from '../../store';
import { fetchProductById } from '../../store/product/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedProduct } from '../../store/product/productSelector';
import Loading from '../../components/Loading';
import { formattedPrice } from '../../utils';

const DetailPage = () => {
  const device = useDevice();
  const isMobile = device === 'mobile';

  const params = useParams();
  const dispatch = useAppDispatch();

  const product = useSelector(getSelectedProduct);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchProductById(params.id));
    }
  }, []);

  const addToCart = () => {
    //
  };

  return (
    <>
      {product ? (
        <div className="product-detail-container">
          <div
            className={isMobile ? 'flex-col-center' : 'flex-col-center w-520'}
          >
            <img
              className={isMobile ? 'mb-10' : 'w-480 h-480 mb-10'}
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="product-detail-info">
              <span className="product-detail-info__name">{product.name}</span>
              <hr className="divide-line-gray my-20" />
              <div className="flex justify-between">
                <span>금액</span>
                <span className="product-detail-info__price">
                  {formattedPrice(product.price)}원
                </span>
              </div>
            </div>
            <button
              className="product-detail-button flex-center mt-20 pointer"
              onClick={addToCart}
            >
              장바구니
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailPage;
