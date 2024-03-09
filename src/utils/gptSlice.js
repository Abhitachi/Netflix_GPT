import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const { toggleGPTSearch } = gptSlice.actions;

export default gptSlice.reducer;
