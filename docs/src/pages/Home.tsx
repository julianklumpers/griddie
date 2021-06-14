import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "@zerodp/griddie";
import { Button, Hero, Logo, Usp } from "@components";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Row gutter={[30]}>
        <Col span={12}>
          <Hero>
            <figure>
              <Logo width={200} />
            </figure>
            <h1>Griddie</h1>
            <p>
              Mobile first grid package with 0 dependencies for React.
              <br />
              In fact, this documentation website is build with it, so try it out!
            </p>
            <Button onClick={() => history.push("/overview")}>Get started</Button>
            <code>yarn add @zerodp/griddie</code>
          </Hero>
        </Col>
      </Row>
      <Row gutter={[10, 30]}>
        <Col xs={12} md={4}>
          <Usp title="📦 0 Dependencies">
            With 0 dependencies we mean this package does not rely on any external node modules other than <strong>React</strong>. This
            way we keep our bundles small.
          </Usp>
        </Col>
        <Col xs={12} md={4}>
          <Usp title="🔑 Typed API's">
            Griddie is written entirely in Typescript. So you will get full support with Typescript typing's and autocompletion out of
            the box. No extra package from @types needed.
          </Usp>
        </Col>
        <Col xs={12} md={4}>
          <Usp title="🛠️ Flexible features">
            Griddie comes with a lot of features and helper Components to make your mobile first projects as easy as possible.
          </Usp>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
