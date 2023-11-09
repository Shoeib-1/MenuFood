import React from 'react'
import { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavBar = ({filterBySearch}) => {
  const[searchValue , setSearchValue]=useState('')
  const onSearch=()=>{
    filterBySearch(searchValue)
    setSearchValue('');
  }
  return (
    <Row>
          <Navbar expand="lg" className="navBar-color" bg='#7B886B' variant='#7B886B'>
      <Container >
        <Navbar.Brand href="#" className='res'>المطعم</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '90px' }}
            navbarScroll>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="search"
              onChange={(e)=> setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button type='button' onClick={()=> onSearch('')} className='bt' >بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar