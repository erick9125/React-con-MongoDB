import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
    render() {
        return(
            <h1>FUNCIONA</h1>
        )
    }
}

render(<App/>, document.getElementById('app'));

