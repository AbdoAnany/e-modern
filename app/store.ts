import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
}

interface Order {
  id: string;
  items: CartItem[];
}

interface CartState {
  items: CartItem[];
}

interface OrdersState {
  orders: Order[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] } as CartState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: { orders: [] } as OrdersState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const { addOrder } = ordersSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;