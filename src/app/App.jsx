
import React from 'react';

import * as echarts from 'echarts';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.createChart = this.createChart.bind(this);
    }

    componentDidMount() {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:3000/data');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const res = JSON.parse(xhr.responseText);
                // const res = xhr.responseText;

                log.warn('test', res);
                this.createChart(res);

                this.setState({items: res});

            } else {
                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);
            }
        };
        xhr.send(null);
    }

    createChart(rdata) {

        const amountArr = rdata.food.map((item) => item.amount);

        const myChart = echarts.init(this.ChartElem);

        const option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},
            legend: {
                data: ['Sales']
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Sales',
                data: amountArr,
                type: 'line',
                smooth: true
            }]
        };

        myChart.setOption(option);
    }

    render() {

        return <div>
            <h1>TEST ITEMS</h1>
            <br/>
            <hr/>
            <br/>
            <div ref={ChartElem => this.ChartElem = ChartElem} style={{width: '500px', height: '500px'}} />
        </div>;
    }
}

export default App;
