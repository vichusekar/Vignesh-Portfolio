import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import vignesh from '../images/vichu.png'

function Header() {
  let navigate = useNavigate()
  return <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }} ><img src={vignesh} alt='loading...' /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>Projects</Navbar.Brand>
            <Navbar.Brand onClick={() => navigate('/skills')} style={{ cursor: 'pointer' }}>Skills</Navbar.Brand>
          </Navbar.Text>
        </Navbar.Collapse>
        <a href='https://github.com/vichusekar' target='_blank' rel='noreferrer' style={{ marginLeft: '30px' }}><i className="fa-brands fa-2x fa-github"></i></a>
        <a href='https://www.linkedin.com/in/vignesh-rajasekar-a9943526a/' target='_blank' rel='noreferrer' style={{ marginLeft: '30px' }}><i style={{ color: 'blue' }} className="fa-brands fa-2x fa-linkedin"></i></a>
      </Container>

    </Navbar>
  </>
}

export default Header
