import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { fetchProducts, getProductsAll } from '@/store/product';
import { formattedPrice } from '@/utils';
import { addCartItem } from '@/apis/cart';
import { ProductI } from '@/models/product';

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

  const addToCartAndNavigate = (cartItem: ProductI) => {
    return addCartItem(cartItem).then(() => navigate('/cart'));
  };

  return (
    <section className="product-container">
      {products?.map((product) => (
        <div key={product.id}>
          <img
            className="w-280 h-280 pointer"
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
              onClick={() => addToCartAndNavigate(product)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListPage;
