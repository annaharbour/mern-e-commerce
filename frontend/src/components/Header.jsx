import React from 'react'
import {useSelector} from 'react-redux'
import {Navbar, Nav, Container, Badge} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart)
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand href="/">Shop Brand</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                            <Nav.Link><FaShoppingCart/>
                            Cart
                            {cartItems.length > 0 && (
                                <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                    { cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                                </Badge>
                            )}
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header

