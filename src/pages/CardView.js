import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import Drac from '../components/Drac';

const CardView = (props) => {
  return (
    <Row>
      {props.cards.map((card, i) => {
        return (
          <Col key={i} xs="6">
            <Drac
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default CardView;
