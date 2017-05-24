import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/lib/Button'
import Card from './Cards/Card'

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='cards'>
                <Card url={'/heroscape/api/cards'} pollInterval={10000} />
            </div>
        )
    }
}

ReactDOM.render(<Cards />, document.getElementById('container'))