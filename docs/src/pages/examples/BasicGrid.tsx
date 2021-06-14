import React from "react";
import { Container, Row, Col } from "@zerodp/griddie";
import { ColContent, Hr, TextBlock, Resizeable, TextLink, Note } from "@components";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { CodeEditor } from "@components/CodeBlock/Prism";

const scope = { Container, Row, Col, ColContent };

const codeSnippet = `render(
  <Container>
    <Row gutter={[16]}>
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
    </Row>
    <br />
    <Row gutter={[15]}>
      <Col span={6}>
        <ColContent>Col-6</ColContent>
      </Col>
      <Col span={6}>
        <ColContent>Col-6</ColContent>
      </Col>
    </Row>
    <br />
    <Row gutter={[15]}>
      <Col span={12}>
        <ColContent>Col-12</ColContent>
      </Col>
    </Row>
  </Container>
)`;

const BasicExample = () => {
  const [showEditor, setShowEditor] = React.useState(false);

  return (
    <>
      <Hr title="Basic grid" />
      <TextBlock>
        <p>This example demostrates a simple static grid.</p>
        <p>The default column layout is 12 columns</p>
        <Note title="Note">
          If you want a different layout, this can be configured globally. see this <TextLink link="">example</TextLink>
        </Note>
        <p>
          The <code>Container</code> component is optional, but is recommended to enforce a maximum width for the your grid which will
          adjust on each specific breakpoint.
          <br />
          If you want a full width container, pass the <code>fluid</code> property to your container.
          <br />
          To see what default container sizes are used you can check this <TextLink link="">example</TextLink>
          <br />
        </p>
        <p>
          The <code>gutter</code> property is for the vertical and horizontal spacing of your columns. More on gutters, you can check
          this <TextLink link="/examples/grid-gutters">example</TextLink>
        </p>
        <p>
          The <code>span</code> property gives you column a percentage width which will be the same on each breakpoint.
        </p>
        <LiveProvider code={codeSnippet} noInline scope={scope}>
          <CodeEditor show={showEditor} />
          <LiveError />
          <Hr
            title="Preview"
            actions={<small onClick={() => setShowEditor((b) => !b)}>{showEditor ? "hide editor" : "Live editor"}</small>}
          />
          <Resizeable>
            <LivePreview />
          </Resizeable>
        </LiveProvider>
      </TextBlock>
    </>
  );
};

export default BasicExample;
