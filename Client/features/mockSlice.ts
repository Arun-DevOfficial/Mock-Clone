import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of each mock
export interface Mock {
  id: string;
  message: string;
  endpoint: string;
}

// Define the state shape: a dictionary of mocks keyed by ID
interface MockState {
  mocks: Record<string, Mock>;
}

// Initial state
const initialState: MockState = {
  mocks: {},
};

// Slice definition
export const mockSlice = createSlice({
  name: "mock",
  initialState,
  reducers: {
    // Replace all mocks with a new set
    setMocks: (state, action: PayloadAction<Mock[]>) => {
      state.mocks = action.payload.reduce((acc, mock) => {
        acc[mock.id] = mock;
        return acc;
      }, {} as Record<string, Mock>);
    },

    // Add or update a single mock
    addMock: (state, action: PayloadAction<Mock>) => {
      state.mocks[action.payload.id] = action.payload;
    },

    // Remove a mock by ID
    removeMock: (state, action: PayloadAction<string>) => {
      delete state.mocks[action.payload];
    },
  },
});

// Export actions and reducer
export const { setMocks, addMock, removeMock } = mockSlice.actions;
export default mockSlice.reducer;
