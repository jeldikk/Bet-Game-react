import React from 'react'

import {Link} from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">Coda Global</Link>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Players List</Link>
                    </Nav>
                </Container>
                
                
            </Navbar>
        </header>
    )
}

export default Header
