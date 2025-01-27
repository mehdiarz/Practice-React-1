import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shopping from '../containers/Shopping/Shopping';

const ShoppingWrapper = () => {
  const navigate = useNavigate();

  const handlePurchaseContinue = () => {
    navigate('/checkout');
  };

  return <Shopping onPurchaseContinue={handlePurchaseContinue} />;
};

export default ShoppingWrapper;