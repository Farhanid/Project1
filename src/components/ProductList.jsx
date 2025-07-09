// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { postCart } from '../slices/CartSlice';

const products = [
  { name: 'iPhone 15', price: 999 },
  { name: 'MacBook Air', price: 1199 },
  { name: 'AirPods Pro', price: 199 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Products</h2>
      {products.map((p, i) => (
        <div key={i} className="border p-3 mb-2 flex justify-between">
          <div>
            <p className="font-semibold">{p.name}</p>
            <p>₹{p.price}</p>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded"
            onClick={() => dispatch(postCart({ ...p, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
