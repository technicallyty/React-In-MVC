import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <React.Fragment>
        <h1>This is a react function</h1>
        <div>This is rendered via react</div>
    </React.Fragment>
);

render(<App />, document.getElementById('app'));
