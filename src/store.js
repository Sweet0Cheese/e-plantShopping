// ✅ Importing Necessary Functions and Files
import { configureStore } from '@reduxjs/toolkit'; // Used to create the Redux store
import cartReducer from './CartSlice'; // Manages the shopping cart slice of the state

// ✅ Configuring the Store
// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // 'cart' is the slice name in the store, managed by cartReducer
    cart: cartReducer,
  },
});

// ✅ Exporting the Store
// Export the store so it can be used throughout the app (e.g., in <Provider store={store}>)
export default store;
