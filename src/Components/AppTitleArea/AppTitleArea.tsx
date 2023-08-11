import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { appTitle, IAppTitleAreaProps } from '../../Constants';

const AppTitleArea = (_props: IAppTitleAreaProps) => {

    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Segment 
                    inverted 
                    color='purple'
                >
                    <h1>
                        {appTitle}
                    </h1>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}

export default AppTitleArea;
