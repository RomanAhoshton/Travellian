import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  value: boolean;
}

const initialState: authState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});


export const { setUser } = authSlice.actions;

export default authSlice.reducer;
