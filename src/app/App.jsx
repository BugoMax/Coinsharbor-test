
import React from 'react';

// import * as echarts from 'echarts';
import Graph from '../components/graph/Graph';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {

    render() {

        return <div>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title">Coinsharbor test</Typography>
                </Toolbar>
            </AppBar>

            <Graph/>
        </div>;
    }
}

export default App;
