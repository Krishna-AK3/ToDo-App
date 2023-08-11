import React from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import { editTodosAndBoardsTitle, maxTodosSize, IEditColumnProps } from '../../Constants';

const EditColumn = (props: IEditColumnProps) => {
    const { 
        data,
        isBoardNameEditMode, 
        addNewTodo, 
        currentBoardName, 
        activeBoardItem, 
        toggleBoardNameEditMode, 
        setAddNewTodo, 
        setCurrentBoardName,
        setData
    } = props;

    const onCurrentBoardNameChange = (e: any) => {
        if (isBoardNameEditMode) {
            setCurrentBoardName(e.target.value)
        }
    }

    const onNewTodoInputChange = (e: any) => {
        setAddNewTodo(e.target.value)
    }

    const onAddNewTodoClick = () => {
        setData((oldTasks: any) => {
            const newTasks = oldTasks;
            const currentBoard = newTasks.get(activeBoardItem);
            currentBoard?.set(addNewTodo, false);
            return new Map(newTasks);
        })
        setAddNewTodo("");
    }

    return (
        <Grid.Column width={4}>
            <Grid centered>
                <h2>
                    {editTodosAndBoardsTitle}
                </h2>
            </Grid>

            <Grid centered>
                <Grid.Row columns={2}>
                    {
                        <Input
                            label={
                                isBoardNameEditMode
                                ? <Button
                                    key={"editModeButtonKey"}
                                    icon={"checkmark"}
                                    color={'blue'}
                                    onClick={toggleBoardNameEditMode}
                                />
                                : <Button
                                    key={"editModeButtonKeyy"}
                                    icon={"edit"}
                                    color={'blue'}
                                    onClick={toggleBoardNameEditMode}
                                />
                            }
                            size='large'
                            value={isBoardNameEditMode ? currentBoardName : currentBoardName + ' view'}
                            onChange={onCurrentBoardNameChange}
                            labelPosition='right'
                            placeholder='Edit your board name'
                            disabled={!isBoardNameEditMode}
                        />
                    }
                </Grid.Row>

                <Grid.Row>
                    <br />
                    <Input
                        label={
                            <Button
                                key={"editModeButtonKey"}
                                icon={"checkmark"}
                                color={'blue'}
                                onClick={onAddNewTodoClick}
                                disabled={(data?.get(activeBoardItem)?.size || 0) >= maxTodosSize}
                            />
                        }
                        size='large'
                        value={addNewTodo}
                        onChange={onNewTodoInputChange}
                        labelPosition='right'
                        placeholder='Add new todo...'
                        disabled={(data?.get(activeBoardItem)?.size || 0) >= maxTodosSize}
                    />
                </Grid.Row>
            </Grid>
        </Grid.Column>
    )
}

export default EditColumn;
