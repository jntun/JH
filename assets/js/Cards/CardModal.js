import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Modal, Button } from 'react-bootstrap'

export default class CardModal extends Component{
    constructor(props) {
        super(props)
        this.state = {showModal:true}
        this.close = this.close.bind(this)  
    }

    close() {
        this.setState({ showModal: false });
        ReactDOM.unmountComponentAtNode(document.getElementById('expanded-card'))
    }


    render() {
        return (
        <div>
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.unit_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card-expanded-info">
                    <p>Faction: {this.props.faction}</p>
                    <p>Race: {this.props.race}</p>
                    <p>Class: {this.props.classification}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Nature: {this.props.nature}</p>
                    <p>Size: {this.props.size}</p>
                    <p>Life: {this.props.life}</p>
                    <p>Move: {this.props.move}</p>
                    <p>Range: {this.props.range}</p>
                    <p>Attack: {this.props.attack}</p>
                    <p>Defense: {this.props.defense}</p>
                    <p>Points: {this.props.points}</p>
                    <p>Unit count: {this.props.unit_count}</p>
                </div>
                <hr />
                
                <h4>{this.props.ability_1_name}</h4>
                <p>{this.props.ability_1}</p>
                
                <h4>{this.props.ability_2_name}</h4>
                <p>{this.props.ability_2}</p>
                
                <h4>{this.props.ability_3_name}</h4>
                <p>{this.props.ability_3}</p>
                
                <h4>{this.props.ability_4_name}</h4>
                <p>{this.props.ability_4}</p>
                
            </Modal.Body>
            {/*
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
            */}
            </Modal>
        </div>
        )
    }
}