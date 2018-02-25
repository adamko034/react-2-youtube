import React from 'react'
import ReactDom from 'react-dom'
// create a new component, produce HTML

const API_KEY = 'AIzaSyDu9PFL8M4245aL6xe4AhNGAHHZvIQlBms';

const App = () => {
    return <div>Hi!</div>;
}


// put into html dom
ReactDom.render(<App />, document.querySelector('.container'));