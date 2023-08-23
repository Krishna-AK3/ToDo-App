import { createSlice } from "@reduxjs/toolkit";

export const boardSizeSlice = createSlice({
    name: "boardSize",
    initialState: {
        boardListSize: 0
    },
    reducers: {
        setBoardListSize: (state, action) => {
            state.boardListSize = action.payload;
        },
    }
});

export const { setBoardListSize } = boardSizeSlice.actions;

export default boardSizeSlice.reducer;