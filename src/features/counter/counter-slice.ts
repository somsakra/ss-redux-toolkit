import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initalState: CounterState = {
  value: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    incremented(state) {
      state.value = state.value + 1;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
  },
});

export const { incremented, amountAdded } = countSlice.actions;
export default countSlice.reducer;
