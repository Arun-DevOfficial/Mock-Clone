import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userTypes } from "@/types/users";

// Initial state
const initialState: userTypes = {
  email: "",
  password: ""
};

// Slice definition
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateUser: (state, action: PayloadAction<userTypes>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

// Export actions
export const { setUsername, updateUser } = userSlice.actions;

// ✅ Getters (selectors)
export const getUserEmail = (state: { user: userTypes }) => state.user.email;
export const getUser = (state: { user: userTypes }) => state.user;

// Export reducer
export default userSlice.reducer;
