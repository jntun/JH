import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Cards from './Cards'
import Footer from '../footer'

class CardViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='cards'>
                <Cards url={'/heroscape/api/cards'} pollInterval={3000} />
            </div>
        )
    }
}

ReactDOM.render(<CardViewer />, document.getElementById('card-container'))