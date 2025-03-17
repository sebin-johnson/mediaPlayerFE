import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/favicon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className="navbar bg-dark w-100" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='d-flex justify-content-center'>
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                style={{ objectFit: "contain" }}
                            />{' '}
                            <Link style={{ textDecoration: "none" }} to="/"><p className='text-white fw-semibold ms-2'>StreamiFy</p></Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div>
                                <Link style={{ textDecoration: "none", color: "white" }} className='fw-semibold' to="/home">Home</Link>
                                <Link style={{ textDecoration: "none", color: "white" }} className='fw-semibold ms-3' to="/history">Watch History</Link>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
