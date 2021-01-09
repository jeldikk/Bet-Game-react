import React from 'react'

import {Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                {/* <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
                
            </Navbar>
        </header>
    )
}

export default Header
