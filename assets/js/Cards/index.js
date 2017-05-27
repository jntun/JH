import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/lib/Button'
import Cards from './Cards'

class CardViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='cards'>
                <Cards url={'/heroscape/api/cards'} pollInterval={10000} />
            </div>
        )
    }
}

ReactDOM.render(<CardViewer />, document.getElementById('card-container'))