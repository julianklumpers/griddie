import React from "react";
import { Container, Row, Col } from "@zerodp/griddie";
import { ColContent, Hr, TextBlock, Resizeable, TextLink, Gutters } from "@components";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { CodeEditor } from "@components/CodeBlock/Prism";
import { useControlStore } from "@stores/useControlStore";

const scope = { Container, Row, Col, ColContent };

const genSnippet = (gutter: any = "") => {
  return `render(
    <Container fluid>
      <Row gutter={[30]}>
        <Col span={4} offset={1}>
          <ColContent>Col-4</ColContent>
        </Col>
        <Col span={4} offset={1}>
          <ColContent>Col-4</ColContent>
        </Col>
        <Col span={7} offset={3}>
          <ColContent>Col-7</ColContent>
        </Col>
        <Col span={5} offset={2}>
          <ColContent>Col-5</ColContent>
        </Col>
        <Col span={2} offset={2}>
          <ColContent>Col-2</ColContent>
        </Col>
      </Row>
    </Container>
  )`;
};

const ColumnOffset = () => {
  const [showEditor, setShowEditor] = React.useState(false);

  return (
    <>
      <Hr title="Column offset" />
      <TextBlock>
        <p>
          This example demostrates the grid gutters.
          <br />
          You can click on "Live editor" to adjust the <code>gutter</code> or play with the sliders and see the effect live.
        </p>
        <p>Drag the resize handle to see how the grid behaves on different breakpoints.</p>
        <LiveProvider code={genSnippet()} noInline scope={scope}>
          <Hr
            title="Preview"
            actions={<small onClick={() => setShowEditor((b) => !b)}>{showEditor ? "hide editor" : "Live editor"}</small>}
          />
          <CodeEditor show={showEditor} />
          <LiveError />
          <br />
          <Resizeable>
            <LivePreview />
          </Resizeable>
        </LiveProvider>
      </TextBlock>
    </>
  );
};

export default ColumnOffset;
