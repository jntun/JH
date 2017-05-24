import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap'

class MainNav extends Component {
    render() {
        return (
            <div className='navbar'>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">React</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="">Cards</NavItem>
                        <NavDropdown eventKey={2} title="Armys" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Army 1</MenuItem>
                            <MenuItem eventKey={3.2}>Army 2</MenuItem>
                            <MenuItem eventKey={3.3}>Army 3</MenuItem>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

ReactDOM.render(<MainNav />, document.getElementById('navbar'))