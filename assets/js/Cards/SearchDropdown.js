import React, {Component} from 'react'
import {SplitButton, MenuItem } from 'react-bootstrap'

export default class SearchDropdown extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div id="SearchDropdown">
                <SplitButton id="search-button" title="Search by" key="1">
                    <MenuItem id="search-name">Name</MenuItem>
                    <MenuItem id="search-ability">Ability</MenuItem>
                </SplitButton>
            </div>
        )
    }
}