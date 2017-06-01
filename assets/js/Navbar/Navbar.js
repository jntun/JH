import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap'
import Dropdown from './Dropdown'

class MainNav extends Component {
    constructor(props) {
        super(props)

        this.state = {toggle:true}
        
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        if(this.state.toggle) {
            this.setState({toggle:false})
        } else {
            this.setState({toggle:true})
        }
        console.log(this.state.toggle)
    }

    render() {
        if(this.state.toggle) {
            return (
                <div className='navbar'>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/heroscape">Heroscape</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav className="nav-items">
                            <MenuItem href="/heroscape/cards/" className="card-item">Cards</MenuItem>
                            <NavDropdown eventKey={2} title="Armys" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/heroscape/armys">All</MenuItem>
                                <MenuItem eventKey={3.2} href="">Army 1</MenuItem>
                                <MenuItem eventKey={3.3}>Army 2</MenuItem>
                                <MenuItem eventKey={3.4}>Army 3</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <MenuItem onClick={this.toggleNavbar}>Hide</MenuItem>
                        </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        } else {
            return (
                <Dropdown onToggle={this.toggleNavbar}/>
            )
        }
    }
}

ReactDOM.render(<MainNav />, document.getElementById('navbar'))
