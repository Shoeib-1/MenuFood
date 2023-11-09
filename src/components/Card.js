import React from "react";
import { Col, Row } from "react-bootstrap";

const Card = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Col key={item.id} sm="12" className="mb-3">
              <div className="Card">
                <div className="photo">
                  <img
                    alt="zz"
                    src={item.img}
                  ></img>
                </div>
                <div className="contanierForText">
                  <div className="txt-card">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className="txt-description">
                    <p>
                     {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })
      ) : (
        <h3 className="txt-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};

export default Card;
