
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://localhost:3000/posts');
        xhr.onload = () => {

            if (xhr.status === 200) {

                const res = JSON.parse(xhr.responseText);
                // const res = xhr.responseText;

                log.warn('test', res);

                this.setState({items: res});

            } else {
                console.error('Error in request. Status: ' + xhr.status);
                console.error('Response text: ' + xhr.responseText);
            }
        };
        xhr.send(null);
    }

    render() {

        return <div>
            <h1>TEST ITEMS</h1>
            <br/>
            <hr/>
            <br/>
            <ul>
                {this.state.items.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>;
    }
}

export default App;
