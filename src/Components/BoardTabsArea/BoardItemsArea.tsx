import React, { useEffect } from 'react';
import { Grid, Menu, Button } from 'semantic-ui-react';
import { maxBoardsSize, IBoardTabsAreaProps } from '../../Constants';

const BoardItemsArea = (props: IBoardTabsAreaProps) => {
    const { data, activeBoardItem, boardListSize, setActiveBoardItem, setAddNewTodo, setBoardListSize, setData } = props;

    const onBoardTabClick = (_e: any, {name}: any) => {
        setActiveBoardItem(name);
        setAddNewTodo("");
    }

    const onAddNewBoardClick = () => {
        let newBoardName: string = "";
        for (let index = 1; index <= maxBoardsSize; ++index) {
            newBoardName = `Board ${index}`;
            if (!data.has(newBoardName)) {
                break;
            }
        }
        const newTasks = data;
        newTasks.set(newBoardName, new Map());
        setData(new Map(newTasks));
        setBoardListSize(newTasks.size);
    }

    const onDeleteBoardClick = (boardItemName: string) => {

        setData(prevTasks => {
            const newTasks = prevTasks;
            newTasks?.delete(boardItemName);
            setBoardListSize(newTasks.size);
            setActiveBoardItem(prevItem => (prevItem === boardItemName) ? [newTasks?.keys()][0].next().value : prevItem);
            return new Map(newTasks);
        })
    }

    const displayBoardItems = (): JSX.Element[] => {
        const boardNodes: JSX.Element[] = [];
        let index = 0;
        for (const [key, _val] of data.entries()) {
            boardNodes.push(
                <>
                    <Menu.Item
                        key={"Board" + index}
                        name={key}
                        active={activeBoardItem === key}
                        onClick={onBoardTabClick}
                    >
                        {key}
                        &nbsp;
                        &nbsp;
                        <Button
                            key={index}
                            icon='close'
                            color='red'
                            onClick={_ => onDeleteBoardClick(key)}
                            disabled={boardListSize <= 1 || !(activeBoardItem === key)}
                        />
                    </Menu.Item>
                </>
            )
            ++index;
        }
        return boardNodes;
    }

    useEffect(() => {
        displayBoardItems()
    }, [data])

    return (
        <Grid.Row 
            divided 
            style={{minHeight: "10vh"}}
        >
            <Grid.Column width={14} >
                <Menu 
                    tabular 
                    key={"BoardsMenu"}
                >
                    { <> {displayBoardItems()} </> }
                </Menu>
            </Grid.Column>

            <Grid.Column width={2}>
                <Button
                    inverted
                    color='green'
                    icon='add'
                    content='New board'
                    onClick={onAddNewBoardClick}
                />
            </Grid.Column>
        </Grid.Row>
    )
}

export default BoardItemsArea;
