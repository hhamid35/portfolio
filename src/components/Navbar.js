/* import logo from '../Assets/logo.png'; */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    AiOutlineHome,
    AiFillGithub,
    AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { BsTerminal } from 'react-icons/bs';

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
          updateNavbar(true);
        } 
        else {
          updateNavbar(false);
        }
    }
    
    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed='top'
            expand='md'
            className={navColour ? 'sticky' : 'navbar'}
        >
            <Container>
                <Navbar.Brand href='/' className='d-flex'>
                    <BsTerminal style={{ marginTop: '0.4em', marginRight: '0.8em' }} />
                    <span style={{ fontSize: '1.2em' }}>Hamid Haris</span>
                    {/* <img src={logo} className='img-fluid logo' alt='brand' /> */}
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpanded(expand ? false : 'expanded');
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>    
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto' defaultActiveKey='#home'>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/about' onClick={() => updateExpanded(false)}>
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/resume' onClick={() => updateExpanded(false)}>
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='fork-btn'>
                            <Button
                                href='https://github.com/hhamid35'
                                target='_blank'
                                className='fork-btn-inner'
                            >
                                <span style={{ fontSize: '1.2em', color: 'black' }} >GitHub</span>{'  '}
                                <AiFillGithub style={{ fontSize: '1.2em', marginBottom: '0.3em', color: 'black' }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
