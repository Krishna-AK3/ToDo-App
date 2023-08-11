import { Dispatch, SetStateAction } from "react";

export const maxBoardsSize = 50;
export const maxTodosSize = 20;

export const appTitle = "Todo - the way to do";
export const newTodosTitle = "New Todos";
export const completedTodosTitle = "Completed Todos";
export const editTodosAndBoardsTitle = "Add/Edit";
export const emptyNewTodosTitle = "Any new todos added will appear here";
export const emptyCompletedTodosTitle = "Completed todos will appear here, so go ahead and do it!!";

export interface IAppTitleAreaProps {}
export interface ICompletedTodosColumnProps {
    activeBoardItem: string;
    completedTodos: string[];
    onDeleteTodoClick(todo: string): void;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
}
export interface IBoardTabsAreaProps {
    data: Map<string, Map<string, boolean>>;
    activeBoardItem: string;
    boardListSize: number;
    setActiveBoardItem: Dispatch<SetStateAction<string>>;
    setAddNewTodo: Dispatch<SetStateAction<string>>;
    setBoardListSize: Dispatch<SetStateAction<number>>;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
}
export interface ICompletedTodosColumnProps {
    activeBoardItem: string;
    completedTodos: string[];
    onDeleteTodoClick(todo: string): void;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
}

export interface IEditColumnProps {
    isBoardNameEditMode: boolean;
    currentBoardName: string;
    addNewTodo: string;
    activeBoardItem: string;
    data: Map<string, Map<string, boolean>>;
    toggleBoardNameEditMode(): void;
    setAddNewTodo: Dispatch<SetStateAction<string>>;
    setCurrentBoardName: Dispatch<SetStateAction<string>>;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
}
export interface ITodosAreaProps {
    boardListSize: number;
    activeBoardItem: string;
    addNewTodo: string;
    data: Map<string, Map<string, boolean>>;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
    setAddNewTodo: Dispatch<SetStateAction<string>>;
    setActiveBoardItem: Dispatch<SetStateAction<string>>;
}
export interface INewTodosColumnProps {
    activeBoardItem: string;
    newTodos: string[];
    onDeleteTodoClick(todo: string): void;
    setData: Dispatch<SetStateAction<Map<string, Map<string, boolean>>>>;
}