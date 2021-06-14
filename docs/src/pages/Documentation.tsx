import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from "@zerodp/griddie";

import { documentationRoutes } from "../routes";
import { useMobile } from "@hooks/useMobile";

const Documentation = () => {
  const routes = Object.keys(documentationRoutes) as [keyof typeof documentationRoutes];
  const location = useLocation();
  const isMobile = useMobile();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <React.Suspense fallback="loading...">
      <Col style={{ width: `calc(100% - ${isMobile ? "0px" : "225px"})`, transition: "all 0.3s" }}>
        <Switch>
          {routes.map((route) =>
            documentationRoutes[route].map(({ path, Component }) => <Route key={path} path={path} component={Component} />)
          )}
        </Switch>
      </Col>
      <Col span={12}>
        <Container fluid>
          <Row>
            <Col span={12}>
              <div style={{ height: "200vh", backgroundColor: "#ddd", width: "100%" }}>Footer</div>
            </Col>
          </Row>
        </Container>
      </Col>
    </React.Suspense>
  );
};

export default Documentation;
