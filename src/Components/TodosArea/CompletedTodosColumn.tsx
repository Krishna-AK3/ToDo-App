import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { completedTodosTitle, emptyCompletedTodosTitle, ICompletedTodosColumnProps } from '../../Constants';

const CompletedTodosColumn = (props: ICompletedTodosColumnProps) => {
    const { 
        activeBoardItem, 
        completedTodos, 
        onDeleteTodoClick, 
        setData 
    } = props;

    const onUndoTodoClick = (todo: string) => {
        setData(oldTasks => {
            const newTasks = oldTasks;
            newTasks?.get(activeBoardItem)?.set(todo, false);
            return new Map(newTasks);
        })
    }

    return (
        <Grid.Column width={6}>
            <Grid centered>
                <h2>
                    {completedTodosTitle}
                </h2>
            </Grid>

            <Grid centered>
                {
                    completedTodos?.length
                    ? completedTodos.map((completedTask, _key) => {
                        return (
                            <Grid.Row columns={3}>
                                <Grid.Column width={10}>
                                    <Segment 
                                        size='tiny' 
                                        style={{overflowX: 'auto'}}
                                    >
                                        {completedTask}
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column width={2}>
                                    <Button
                                        color='yellow'
                                        icon='redo'
                                        onClick={() => onUndoTodoClick(completedTask)}
                                        size='large'
                                    />
                                </Grid.Column>
                                
                                <Grid.Column width={2}>
                                    <Button
                                        inverted
                                        color='red' 
                                        icon='cancel'
                                        onClick={() => onDeleteTodoClick(completedTask)}
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
                            {emptyCompletedTodosTitle}
                        </Segment>
                    </>
                }
            </Grid>
        </Grid.Column>
    )
}

export default CompletedTodosColumn;
