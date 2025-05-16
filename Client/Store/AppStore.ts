import { configureStore } from "@reduxjs/toolkit";
import mockReducer from "@/features/mockSlice";

export const store = configureStore({
  reducer: {
    mock: mockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
