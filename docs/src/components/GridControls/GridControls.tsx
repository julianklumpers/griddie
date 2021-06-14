import React from "react";
import { Container, Row, Col } from "@zerodp/griddie";

import { Fluid, Gutters, Columns } from "./Controls";

import "./GridControls.scss";

export const GridControls = () => {
  return (
    <Container className="control-container" fluid>
      <Row gutter={[30, 50]}>
        <Col xs={12} md={6} lg={4}>
          <Fluid />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Columns />
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Gutters />
        </Col>
      </Row>
    </Container>
  );
};
