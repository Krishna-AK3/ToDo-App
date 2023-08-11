import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { emptyNewTodosTitle, newTodosTitle, INewTodosColumnProps } from '../../Constants';

const NewTodosColumn = (props: INewTodosColumnProps) => {
    const { 
        activeBoardItem, 
        newTodos, 
        setData, 
        onDeleteTodoClick 
    } = props;

    const onCompletedTodoClick = (todo: string) => {
        setData(oldTasks => {
            const newTasks = oldTasks;
            newTasks?.get(activeBoardItem)?.set(todo, true);
            return new Map(newTasks);
        })
    }

    return (
        <Grid.Column width={6}>
            <Grid centered>
                <h2>
                    {newTodosTitle}
                </h2>
            </Grid>
            
            <Grid centered>
                {
                    newTodos?.length
                    ? newTodos.map((newTodo: string, _key: number) => {
                        return (
                            <Grid.Row columns={3}>
                                <Grid.Column width={10}>
                                    <Segment 
                                        size='tiny' 
                                        style={{overflowX: 'auto'}}
                                    >
                                        {newTodo}
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column width={2}>
                                    <Button
                                        color='green'
                                        icon='checkmark'
                                        onClick={() => onCompletedTodoClick(newTodo)}
                                        size='large'
                                    />
                                </Grid.Column>

                                <Grid.Column width={2}>
                                    <Button
                                        inverted
                                        color='red' 
                                        icon='cancel'
                                        onClick={() => onDeleteTodoClick(newTodo)}
                                        size='large'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        )
                    })
                    : <>
                        <br />
                        <br />
                        <Segment>
                            {emptyNewTodosTitle}    
                        </Segment>
                    </>
                }
            </Grid>
        </Grid.Column>
    )
}

export default NewTodosColumn;
