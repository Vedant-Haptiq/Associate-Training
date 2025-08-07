
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import wishlistSlice from './slices/wishlistSlice';
import productsSlice from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    products: productsSlice,
  },  
});

export default store;