import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { fetchProducts } from '../../store/product/productSlice';
import { getProductsAll } from '../../store/product/productSelector';
import { useNavigate } from 'react-router-dom';
import { formattedPrice } from '../../utils';

const ListPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useSelector(getProductsAll);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const goToProductDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const addToCart = () => {
    //
  };

  return (
    <section className="product-container">
      {products?.map((product) => (
        <div key={product.id}>
          <img
            className="w-280 h-280"
            src={product.imageUrl}
            alt={product.name}
            onClick={() => goToProductDetail(product.id)}
          />
          <div className="flex justify-between w-280 p-5">
            <div className="product-info">
              <span className="product-info__name">{product.name}</span>
              <span className="product-info__price">
                {formattedPrice(product.price)}원
              </span>
            </div>
            <img
              src="/assets/svgs/cart.svg"
              alt="장바구니"
              className="pointer"
              onClick={addToCart}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListPage;
