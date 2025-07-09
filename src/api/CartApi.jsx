// src/api/CartApi.js
let cart = [];

export const fetchCart = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(cart), 300)
  );
};

export const addToCart = async (item) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const newItem = { id: Date.now(), ...item };
      cart.push(newItem);
      resolve(newItem);
    }, 300)
  );
};

export const updateCart = async (id, updatedItem) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      cart = cart.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      );
      resolve({ id, ...updatedItem });
    }, 300)
  );
};

export const deleteFromCart = async (id) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      cart = cart.filter((item) => item.id !== id);
      resolve(id);
    }, 300)
  );
};
