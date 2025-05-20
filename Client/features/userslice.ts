import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userTypes } from "@/types/users";

// Initial state
const initialState: userTypes = {
  email: "",
  password: "",
  token: "",
};

// Slice definition
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLocalStorageData: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setLocalStorage: (state, action: PayloadAction<userTypes>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      localStorage.setItem("user", JSON.stringify(state));
    },
    clearLocalStorage: () => {
      localStorage.clear(); // Remove user data from localStorage
    },
  },
});

// Export actions
export const { getLocalStorageData, setLocalStorage, clearLocalStorage } =
  userSlice.actions;

// ✅ Getters (selectors)
export const getUserEmail = (state: { user: userTypes }) => state.user.email;
export const getUser = (state: { user: userTypes }) => state.user;
export const getAuthToken = (state: { user: userTypes }) => state.user.token;

// Export reducer
export default userSlice.reducer;
