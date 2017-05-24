import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Army from './ArmyBuilder/Army'

class Builder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Army url='/heroscape/api/armys' pollInterval={10000} />
    }
}

ReactDOM.render(<Builder />, document.getElementById('container'))