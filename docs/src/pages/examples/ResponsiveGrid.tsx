import React from "react";
import { Container, Row, Col, useBreakpoint, ContainerBreakpoints, getCurrentScreen } from "@zerodp/griddie";
import { ColContent, Hr, TextBlock, Resizeable, TextLink, Note } from "@components";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { CodeEditor } from "@components/CodeBlock/Prism";

const scope = { Container, Row, Col, ColContent };

const codeSnippet = () => {
  return `render(
  <Container>
    <Row gutter={[16]}>
      <Col xs={12} md={6} xl={4}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={6} xl={4}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={6} xl={4}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={6} xl={3}>
        <ColContent>Col</ColContent>
      </Col>
      <Col xs={12} md={12} xl={3}>
        <ColContent>Col</ColContent>
      </Col>
    </Row>
  </Container>
)`;
};

const factor = 0.7;
const containerBreakpoints = {
  xs: [400, 400],
  sm: [600, 600 * factor],
  md: [900, 900 * factor],
  lg: [1100, 1100 * factor],
  xl: [1300, 1300 * factor],
  xxl: [1500, 1500],
};

const ResponsiveGrid = () => {
  const [showEditor, setShowEditor] = React.useState(false);

  return (
    <>
      <Hr title="Responsive grid" />
      <TextBlock>
        <p>Try to resize the container below to see how the breakpoints apply's on specific widths</p>
        <p>
          This package has a mobile first approach, just like Bootstrap, this means if you only provide the <code>{`xs={12}`}</code>{" "}
          property and no other breakpoint are provided, your columns will always be 12 columns width.
          <br />
          Untill you set a new breakpoint properties. For example: <code>{`xs={12} md={6}`}</code> from <code>xs</code> to{" "}
          <code>sm</code> will be 12 columns, and from <code>md</code> to <code>xxl</code> will be 6 columns.
        </p>
        <LiveProvider code={codeSnippet()} noInline scope={scope}>
          <CodeEditor show={showEditor} />
          <LiveError />
          <Hr
            title="Preview"
            actions={<small onClick={() => setShowEditor((b) => !b)}>{showEditor ? "hide editor" : "Live editor"}</small>}
          />
          <Resizeable>
            <ContainerBreakpoints {...containerBreakpoints}>
              <LivePreview />
            </ContainerBreakpoints>
          </Resizeable>
        </LiveProvider>
      </TextBlock>
    </>
  );
};

export default ResponsiveGrid;
