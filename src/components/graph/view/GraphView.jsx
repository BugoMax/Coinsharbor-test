
import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import * as echarts from 'echarts';

class GraphView extends React.Component {

    constructor(props) {
        super(props);

        this.setGraphOption = this.setGraphOption.bind(this);
    }

    componentDidMount() {
        this.setGraphOption();
    }

    componentDidUpdate() {
        this.setGraphOption();
    }

    setGraphOption() {

        const myChart = echarts.init(this.ChartElem);
        const option = {
            tooltip: {},
            legend: {
                data: ['Food', 'Books', 'Transport', 'Restaurants']
            },
            xAxis: {
                type: 'category',
                data: this.props.displayOption.days
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Food',
                    data: this.props.displayOption.food,
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'Books',
                    data: this.props.displayOption.books,
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'Transport',
                    data: this.props.displayOption.transport,
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'Restaurants',
                    data: this.props.displayOption.restaurants,
                    type: 'line',
                    smooth: true
                }
            ]
        };

        myChart.setOption(option);
    }

    render() {

        return <div>

            <BottomNavigation value={this.props.displayOption.selectedMonth} showLabels>
                {this.props.monthList.map((item, i) =>
                    <BottomNavigationAction
                        label={item}
                        value={item}
                        onClick={() => this.props.onChangeMonth(item)}
                        key={i}
                    />
                )}
            </BottomNavigation>

            <div ref={ChartElem => this.ChartElem = ChartElem} style={{width: '500px', height: '500px'}} />
        </div>;
    }
}

if (process.env !== 'production') {

    GraphView.propTypes = {
        food: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        transport: PropTypes.array.isRequired,
        restaurants: PropTypes.array.isRequired,
        displayOption: PropTypes.object.isRequired,
        monthList: PropTypes.array.isRequired,
        onChangeMonth: PropTypes.func.isRequired
    };
}

export default GraphView;
