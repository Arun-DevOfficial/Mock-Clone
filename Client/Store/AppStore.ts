import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "@/features/mockSlice";
import userReducer from "@/features/userslice";

export const store = configureStore({
  reducer: {
    mock: mockReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
