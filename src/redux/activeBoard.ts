import { createSlice } from "@reduxjs/toolkit";

export const activeBoardSlice = createSlice({
    name: "activeBoard",
    initialState: {
        activeBoardItem: ""
    },
    reducers: {
        setActiveBoardItem: (state, action) => {
            state.activeBoardItem = action.payload;
        },
        setBoardItemPostDeletion: (state, action) => {
            const prevBoardName = state.activeBoardItem;
            const { boardItemName } = action.payload;
            state.activeBoardItem = (prevBoardName === boardItemName)
                ? prevBoardName
                // ? [newTasks?.keys()][0].next().value
                : prevBoardName;
        },
    }
});

export const { setActiveBoardItem, setBoardItemPostDeletion } = activeBoardSlice.actions;

export default activeBoardSlice.reducer;