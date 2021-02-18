import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedCart, setStoredCart] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : initialValue
  });

  const setCart = cart => {
    setStoredCart(cart);
    window.localStorage.setItem(key, JSON.stringify(cart));
  }

  return [storedCart, setCart];
}

