import { createSlice } from "@reduxjs/toolkit";

export const newTodoSlice = createSlice({
    name: "newTodo",
    initialState: {
        addNewTodo: ""
    },
    reducers: {
        setNewTodo: (state, action) => {
            state.addNewTodo = action.payload;
        },
    }
});

export const { setNewTodo } = newTodoSlice.actions;

export default newTodoSlice.reducer;