import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

const FirstLoadCard = ({ onClick }) => (
  <Col xs="12" sm={{ size: 8, offset: 2 }}>
    <Card>
      <CardBody>
        <CardTitle>
          <b>Hey there!</b>
        </CardTitle>
        <hr />
        <CardText>
          After you share your location, we will show you the services closest
          to you.
        </CardText>
        <br />
        <Button color="primary" onClick={onClick}>
          Share location
        </Button>
      </CardBody>
    </Card>
  </Col>
);

export default FirstLoadCard;
