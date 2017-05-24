import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap'

class MainNav extends Component {
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('navbar'))
    }

    render() {
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
                            <MenuItem eventKey={3.1} href="">Army 1</MenuItem>
                            <MenuItem eventKey={3.2}>Army 2</MenuItem>
                            <MenuItem eventKey={3.3}>Army 3</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <MenuItem onClick={this.unmount}>Hide</MenuItem>
                    </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

ReactDOM.render(<MainNav />, document.getElementById('navbar'))
