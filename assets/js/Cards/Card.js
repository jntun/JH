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
                <p className="card-displayTitle" id={this.props.unit_name}>{this.props.unit_name}</p>
                <p className="card-displayPoints">{this.props.points}</p>
                <p className="card-displayInfo">{this.props.ability_1_name}</p>
                <p className="card-displayInfo">{this.props.ability_2_name}</p>
                <p className="card-displayInfo">{this.props.ability_3_name}</p>
                <p className="card-displayInfo">{this.props.ability_4_name}</p>
            </div>
        )
    }
}