import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import activeBoardReducer from "./activeBoard";
import newTodoReducer from "./newTodo";
import boardSizeReducer from "./boardSize";

export default configureStore({
    reducer: {
        data: dataReducer,
        activeBoard: activeBoardReducer,
        newTodo: newTodoReducer,
        boardSize: boardSizeReducer,
    }
});