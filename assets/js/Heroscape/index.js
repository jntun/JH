import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron } from 'react-bootstrap'

class Main extends Component {
    render() {
        return (
            <div className="main-center">
                <Jumbotron>
                    <h1>Welcome to Justin's Heroscape</h1>
                </Jumbotron>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('container'))