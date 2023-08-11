import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import NewTodosColumn from './NewTodosColumn';
import CompletedTodosColumn from './CompletedTodosColumn';
import EditColumn from './EditColumn';
import { ITodosAreaProps } from '../../Constants';

const TodosArea = (props: ITodosAreaProps) => {
    const { 
        data, 
        boardListSize, 
        addNewTodo, 
        activeBoardItem, 
        setData, 
        setAddNewTodo, 
        setActiveBoardItem 
    } = props;

    const [isBoardNameEditMode, setIsBoardNameEditMode] = useState<boolean>(false);
    const [currentBoardName, setCurrentBoardName] = useState<string>("");
    const [newTodos, setNewTodos] = useState<string[]>([]);
    const [completedTodos, setCompletedTodos] = useState<string[]>([]);

    const onDeleteTodoClick = (todo: string) => {
        setData(oldTasks => {
            const newTasks = oldTasks;
            newTasks?.get(activeBoardItem)?.delete(todo);
            return new Map(newTasks);
        })
    }

    const toggleBoardNameEditMode = () => {
        if (boardListSize > 0) {
            if (!!currentBoardName?.length) {
                if (isBoardNameEditMode && currentBoardName !== activeBoardItem) {
                    const newTasks: Map<string, Map<string, boolean>> = new Map();
                    
                    for (const [key, val] of data.entries()) {
                        const newBoardName: string = (key !== activeBoardItem) ? key : currentBoardName;
                        newTasks.set(newBoardName, new Map(val));
                    }
                    setData(new Map(newTasks));
                    setActiveBoardItem(currentBoardName);
                }
                setIsBoardNameEditMode(prev => !prev);
            } else {
                alert("Board name cannot be empty");
            }
        }
    }

    const updateNewAndCompletedTasks = () => {
        const tempNewTasks: string[] = [];
        const tempCompletedTasks: string[] = [];
        if (data && data?.get(activeBoardItem)) {

            for (const todoItem of data?.get(activeBoardItem)!.keys()) {
                if (data?.get(activeBoardItem)?.get(todoItem)) {
                    tempCompletedTasks.push(todoItem)
                } else {
                    tempNewTasks.push(todoItem)
                }
            }
        }
        setCompletedTodos(tempCompletedTasks);
        setNewTodos(tempNewTasks);
    }

    useEffect(() => {
        setIsBoardNameEditMode(false);
        setCurrentBoardName(activeBoardItem);
        updateNewAndCompletedTasks();
    }, [activeBoardItem])

    useEffect(() => {
        updateNewAndCompletedTasks();
    }, [data])

    return (
        <Grid.Row 
            divided 
            style={{
                minHeight: '80vh', 
                textAlign: 'center'
            }}
        >
            <NewTodosColumn
                newTodos={newTodos}
                activeBoardItem={activeBoardItem}
                setData={setData}
                onDeleteTodoClick={onDeleteTodoClick}
            />

            <EditColumn
                data={data}
                currentBoardName={currentBoardName}
                isBoardNameEditMode={isBoardNameEditMode}
                addNewTodo={addNewTodo}
                activeBoardItem={activeBoardItem}
                setAddNewTodo={setAddNewTodo}
                toggleBoardNameEditMode={toggleBoardNameEditMode}
                setCurrentBoardName={setCurrentBoardName}
                setData={setData}
            />

            <CompletedTodosColumn
                activeBoardItem={activeBoardItem}
                completedTodos={completedTodos}
                onDeleteTodoClick={onDeleteTodoClick}
                setData={setData}

            />
            
        </Grid.Row>
    )
}

export default TodosArea;
