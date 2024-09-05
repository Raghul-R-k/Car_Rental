import React from "react";
import { Col, Card, CardBody } from "reactstrap";
// import "../../styles/vehicle-card.css"; // Add styles if needed

const VehicleCard = (props) => {
  const { type, description, examples } = props.item;

  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
      <Card className="vehicle__card">
        <CardBody>
          <h5 className="vehicle__type">{type}</h5>
          <p className="vehicle__description">{description}</p>
          <p className="vehicle__examples">
            <strong>Examples: </strong>{examples}
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VehicleCard;
