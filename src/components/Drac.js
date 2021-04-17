import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Drac = ({ title, subtitle, text }) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="http://via.placeholder.com/318x180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {subtitle}
        </CardSubtitle>
        <CardText>{text}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default Drac;
