import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import AppTitleArea from './AppTitleArea/AppTitleArea';
import BoardItemsArea from './BoardTabsArea/BoardItemsArea';
import TodosArea from './TodosArea/TodosArea';

const HomePage = () => {
    const [activeBoardItem, setActiveBoardItem] = useState<string>("");
    const [data, setData] = useState<Map<string, Map<string, boolean>>>(new Map());
    const [addNewTodo, setAddNewTodo] = useState<string>("");
    const [boardListSize, setBoardListSize] = useState<number>(0);

    useEffect(() => {
        if (boardListSize < 1) {
            const newBoardName = 'My List';
            const newTaskData: Map<string, Map<string, boolean>> = new Map<string, Map<string, boolean>>([
                [newBoardName, new Map<string, boolean>([
                    ['Add todos now!!', false],
                    ['completed todo!!', true],
                ])]
            ])

            setActiveBoardItem(newBoardName);
            setData(newTaskData);
            setBoardListSize(newTaskData.size)
        }
    }, [])

    return (
        <>
            <Grid
                centered 
                style={{minHeight: '100vh'}}
            >
                <AppTitleArea />

                <BoardItemsArea
                    data={data}
                    activeBoardItem={activeBoardItem}
                    boardListSize={boardListSize}
                    setActiveBoardItem={setActiveBoardItem}
                    setAddNewTodo={setAddNewTodo}
                    setBoardListSize={setBoardListSize}
                    setData={setData}
                />

                <TodosArea
                    data={data}
                    activeBoardItem={activeBoardItem}
                    addNewTodo={addNewTodo}
                    boardListSize={boardListSize}
                    setData={setData}
                    setAddNewTodo={setAddNewTodo}
                    setActiveBoardItem={setActiveBoardItem}
                />
            </Grid>
        </>
    )
}

export default HomePage;