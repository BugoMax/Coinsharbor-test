
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Graph from '../components/graph/Graph';
import Table from '../components/table/Table';

class App extends React.Component {

    render() {

        return <div>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title">Coinsharbor test</Typography>
                </Toolbar>
            </AppBar>

            <Graph/>
            <Table/>
        </div>;
    }
}

export default App;
