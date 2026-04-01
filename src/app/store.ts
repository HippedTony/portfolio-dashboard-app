import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import { getAuth } from "@/shared/utils/authStorage";

const persistedAuth = getAuth();

const preloadedState = {
  auth: persistedAuth || {
    isAuthenticated: false,
    token: null,
    user: null,
    status: null
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
