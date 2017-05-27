import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {
    render() {
        return (
            <div className="main-center">
                <h1>Welcome to Justin's Heroscape</h1>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('container'))