import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({filterByCategory , allCategory}) => {
  
  const onFilter=(meal)=>{
    filterByCategory(meal);
  }
  return (
    <Row mb-5>
        <Col  sm="12" className='justify-content-center d-flex categ'>
          {
            allCategory.length>=1 ? (
              allCategory.map((meal)=>{
                  return(
                    <button onClick={()=>onFilter(meal)}>{meal}</button>
                  )
              })
            ): null
          }
       
        </Col>
        
    </Row>
  )
}

export default Category