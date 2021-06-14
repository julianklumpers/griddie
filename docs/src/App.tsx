import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "@zerodp/griddie";

import { appRoutes } from "./routes";
import { Sidebar, Topbar } from "@components";

const App = () => {
  return (
    <React.Suspense fallback="loading...">
      <Router>
        <Topbar />
        <Container fluid style={{ overflow: "initial", padding: "0 2rem" }}>
          <Row gutter={[30]} auto>
            <Sidebar />
            <Switch>
              {appRoutes.map(({ path, exact, Component }) => (
                <Route key={path} path={path} exact={exact} component={Component} />
              ))}
            </Switch>
          </Row>
        </Container>
      </Router>
    </React.Suspense>
  );
};

export default App;
