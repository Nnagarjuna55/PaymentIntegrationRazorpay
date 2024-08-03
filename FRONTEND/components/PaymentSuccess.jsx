// PaymentSuccess.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get('reference');

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-2xl font-bold uppercase">Order Successful</h1>
      <p className="mt-2 text-lg">Reference No. {referenceNum}</p>
    </div>
  );
};

export default PaymentSuccess;
