import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define the TS type for the counter slice's state
export interface CounterState {
  value: number;
}

// Define the initial value for the slice state
const initialState: CounterState = {
  value: 0,
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectCount = (state: RootState) => state.loads.value;

// Export the slice reducer for use in the store configuration
export default counterSlice.reducer;
