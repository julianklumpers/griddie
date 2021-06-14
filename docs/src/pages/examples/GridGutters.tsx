import React from "react";
import { Container, Row, Col, useBreakpoint, ContainerBreakpoints, breakpoints, getCurrentScreen } from "@zerodp/griddie";
import { ColContent, Hr, TextBlock, Resizeable, Slider, ScreenInfo, Note } from "@components";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { CodeEditor } from "@components/CodeBlock/Prism";

const scope = { Container, Row, Col, ColContent };

const columns = `
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
      <Col span={4}>
        <ColContent>Col-4</ColContent>
      </Col>
      <Col span={12}>
        <ColContent>Col-12</ColContent>
      </Col>
      <Col span={6}>
        <ColContent>Col-6</ColContent>
      </Col>
      <Col span={6}>
        <ColContent>Col-6</ColContent>
      </Col>
`.trim();

const genSnippet = (gutter: any = []) => {
  return `render(
  <Container fluid>
    <Row gutter={${JSON.stringify(gutter)}}>
      ${columns}
    </Row>
  </Container>
)`;
};

const responsiveSnippet = (gutter: any = {}) => {
  return `render(
  <Container>
    <Row gutter={${JSON.stringify(gutter)}} animated>
      ${columns}
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

const Bold: React.FC = ({ children }) => (
  <span style={{ fontWeight: 800, color: "#292d3e", textTransform: "uppercase" }}>{children}</span>
);

const GridGutters = () => {
  const [showEditor, setShowEditor] = React.useState({ one: false, two: false });

  const [gutter, setGutter] = React.useState([16, 24]);
  const [responsiveGutter, setReponsiveGutter] = React.useState([
    { xs: 60, sm: 50, md: 40, lg: 30, xl: 20, xxl: 10 },
    { xs: 10, sm: 20, md: 30, lg: 40, xl: 50, xxl: 60 },
  ]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const screen = useBreakpoint(containerRef, containerBreakpoints);
  const currentScreen = getCurrentScreen(screen);

  return (
    <>
      <Hr title="Grid gutters" />
      <TextBlock>
        <p>This example demostrates how to use vertical and horizontal grid gutters.</p>
        <p>
          Use a array to set <code>[vertical, horizontal]</code> gutters, it works similair like a CSS padding property.
          <br /> For example, to only set horizontal spacing you can do the following
          <code onClick={() => setGutter([0, 30])}>{"gutter={[0, 30]}"}</code>
        </p>
        <Note title="Note">
          Use <code onClick={() => setGutter([24])}>{"gutter={[24]}"}</code> if vertical and horizontal value is the same.
        </Note>
        <p>You van adjust the sliders to see the effect of the gutters in the preview below.</p>
        <Col md={12} lg={6}>
          <Hr title="Gutters" small />
          <Slider title="Vertical" onChange={(v) => setGutter((prev) => [v, prev[1]])} sliderValue={gutter[0]} />
          <Slider title="Horizontal" onChange={(v) => setGutter((prev) => [prev[0], v])} sliderValue={gutter[1]} />
        </Col>
        <LiveProvider code={genSnippet(gutter)} noInline scope={scope}>
          <Hr
            title="Preview"
            actions={
              <small onClick={() => setShowEditor((prev) => ({ ...prev, one: !prev.one }))}>
                {showEditor.one ? "hide editor" : "Live editor"}
              </small>
            }
          />
          <CodeEditor show={showEditor.one} />
          <LiveError />
          <br />
          <Resizeable>
            <LivePreview />
          </Resizeable>
        </LiveProvider>
      </TextBlock>

      <Hr id="responsive" title="Responsive gutters" />
      <TextBlock>
        <p>This example demostrates how to use responsive gutters.</p>
        <p>
          Use a object with breakpoints to set specific gutter values that will be used when the window or container breakpoint is in
          range.
        </p>
        <p>
          For example to set reponsive vertical and horizontal gutters
          <br />
          <code>{"gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 36, xxl: 40 }]}"}</code>
        </p>
        <p>
          Or different breakpoints for responsive vertical and horizontal gutters.
          <br />
          <code>
            {`gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 36, xxl: 40 }, { xs: 8, sm: 16, md: 24, lg: 32, xl: 36, xxl: 40 }]}`}
          </code>
        </p>
        <Note title="Note">
          You can mix different types. If you want static vertical gutters and responsive horizontal gutters you can do this.
          <br />
          <code>{"gutter={[24, { xs: 8, sm: 16, md: 24, lg: 32, xl: 36, xxl: 40 }]}"}</code>
        </Note>
        <Row gutter={[0, 60]}>
          <Col xs={12} lg={6}>
            <Hr title="Vertical gutters" small />
            {breakpoints.map((bp) => {
              return (
                <Slider
                  key={`vert-${bp}`}
                  title={bp === currentScreen ? <Bold>{bp}</Bold> : bp}
                  onChange={(v) => setReponsiveGutter((prev) => [{ ...prev[0], [bp]: v }, prev[1]])}
                  sliderValue={responsiveGutter[0][bp]}
                />
              );
            })}
          </Col>
          <Col xs={12} lg={6}>
            <Hr title="Horizontal gutters" small />
            {breakpoints.map((bp) => {
              return (
                <Slider
                  key={`hort-${bp}`}
                  title={bp === currentScreen ? <Bold>{bp}</Bold> : bp}
                  onChange={(v) => setReponsiveGutter((prev) => [prev[0], { ...prev[1], [bp]: v }])}
                  sliderValue={responsiveGutter[1][bp]}
                />
              );
            })}
          </Col>
        </Row>
        <LiveProvider code={responsiveSnippet(responsiveGutter)} noInline scope={scope}>
          <Hr
            title="Preview"
            actions={
              <small onClick={() => setShowEditor((prev) => ({ ...prev, two: !prev.two }))}>
                {showEditor.two ? "hide editor" : "Live editor"}
              </small>
            }
          />
          <CodeEditor show={showEditor.two} />
          <LiveError />
          <br />
          <Resizeable>
            <ContainerBreakpoints ref={containerRef} {...containerBreakpoints}>
              <LivePreview />
            </ContainerBreakpoints>
          </Resizeable>
        </LiveProvider>
      </TextBlock>
    </>
  );
};

export default GridGutters;
