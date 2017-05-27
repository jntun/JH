import React, { Component } from 'react'
import CardModal from './CardModal'

export default class ExpandedCard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <CardModal {...this.props} />
        )
    }
}