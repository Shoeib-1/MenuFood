import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
        <Col sm="12" className='text-res'>
            <div>
            قائمة الطعام
            </div>
            <div className='justify-content-center d-flex'>
            <p className='underLine'></p>
            </div>
        </Col>
    </Row>
    
  )
}
// justify-content-center text-center 

export default Header