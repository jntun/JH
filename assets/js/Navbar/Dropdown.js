import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <button className="dropdown-button" onClick={this.props.onToggle} />
        )
    }
}