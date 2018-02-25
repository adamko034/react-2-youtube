import React from 'react'
import ReactDom from 'react-dom'
// create a new component, produce HTML

const App = () => {
    return <div>Hi!</div>;
}

// put into html dom
ReactDom.render(<App />, document.querySelector('.container'));