"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/lib/types';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  dispatch: (action: { type: string; payload?: any }) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: number };

function cartReducer(state: Product[], action: CartAction) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const dispatch = (action: { type: string; payload?: any }) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        setCart((prevCart) => [...prevCart, action.payload]);
        break;
      // Add more cases as needed
      default:
        break;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 