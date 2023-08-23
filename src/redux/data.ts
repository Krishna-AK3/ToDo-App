import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: new Map() as Map<string, Map<string, boolean>>,
    },
    reducers: {
        resetData: (state, action) => {
            state.data = new Map(action.payload);
        },
        addTodo: (state, action) => {
            const newTasks = state.data;
            const { activeBoardItem, addNewTodo } = action.payload;

            const currentBoard = newTasks.get(activeBoardItem);
            currentBoard?.set(addNewTodo, false);
            state.data =  new Map(newTasks);
        },
        completeTodo: (state, action) => {
            const newTasks = state.data;
            const { activeBoardItem, todo } = action.payload;

            newTasks?.get(activeBoardItem)?.set(todo, true);
            state.data =  new Map(newTasks);
        },
        undoTodo: (state, action) => {
            const newTasks = state.data;
            const { activeBoardItem, todo } = action.payload;

            newTasks?.get(activeBoardItem)?.set(todo, false);
            state.data =  new Map(newTasks);
        },
        deleteTodo: (state, action) => {
            const newTasks = state.data;
            const { activeBoardItem, todo } = action.payload;

            newTasks?.get(activeBoardItem)?.delete(todo);
            state.data = new Map(newTasks);
        },
        deleteBoard: (state, action) => {
            const newTasks = state.data;
            const { boardItemName } = action.payload;

            newTasks?.delete(boardItemName);
            // setBoardListSize(newTasks.size);
            // setActiveBoardItem(prevItem => (prevItem === boardItemName) ? [newTasks?.keys()][0].next().value : prevItem);
            state.data = new Map(newTasks);
        }
    }
});

export const { resetData, addTodo, completeTodo, undoTodo, deleteTodo, deleteBoard } = dataSlice.actions;

export default dataSlice.reducer;