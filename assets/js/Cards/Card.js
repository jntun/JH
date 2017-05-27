import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ExpandedCard from './ExpandedCard'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.expandCardInfo = this.expandCardInfo.bind(this)
        this.state = {expanded:false}
    }

    expandCardInfo(e) {
           ReactDOM.render(<ExpandedCard {...this.props}/>, document.getElementById('expanded-card'))
    }

    render() {
        return (
            <div className="card-container" id={this.props.faction + "-card"} onClick={this.expandCardInfo} >
                <p id={this.props.unit_name}>{this.props.unit_name}</p>
            </div>
        )
    }
}