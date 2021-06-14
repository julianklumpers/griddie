import React from "react";
import { containerWidths } from "@zerodp/griddie";
import { Hr, TextBlock, CodeBlock, Note, TextLink, PagePrevNext } from "@components";

const basicExampleCode = `render(
  <Container fluid>
    <Row gutter={[15]}>
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

const QuickStart = () => {
  return (
    <>
      <Hr title="Quick start" />
      <TextBlock>
        <p>This is a quick guide to get started with a basic responsive grid</p>
        <Note title="Grid defaults">
          <ul>
            <li>
              <strong>layout:</strong> 12 column
            </li>
            <li>
              <strong>container widths:</strong>{" "}
              {Object.entries(containerWidths)
                .map(([k, v]) => `${k}: ${v}px`)
                .join(" - ")}
            </li>
          </ul>
        </Note>
        <CodeBlock code={basicExampleCode} show />
        <h3>Lets break it down</h3>
        <p>
          The <code>Container</code> component is a wrapper for your Row(s). With no props provided it behaves like a centered
          container which adjust its size depending on which window breakpoint you are.
        </p>
        <Note>
          if you want to control the container sizes, you can check out this <TextLink link="/todo">example</TextLink>.
        </Note>
        <p>
          You can set the container to <code>fluid</code>, to get a 100% width container.
        </p>
        <CodeBlock code={`<Container fluid>...</Container>`} show showLineNumbers={false} />
        <p>Or maybe you just want a 100% widht container on specific breakpoints only.</p>
        <CodeBlock code={`<Container fluid xs sm md>...</Container>`} show showLineNumbers={false} />
        <h3>
          <code>Row</code>
        </h3>
        <p>
          With the <code>Row</code> component you control how your columns behave. The most cummon prop used here is the{" "}
          <code>gutter</code> prop. It behaves similar like a padding CSS property, if you provide a array with only 1 value it will
          space the vertical and horizontal gutters. if you provide 2 values, for example:
        </p>
        <CodeBlock code={`<Row gutter={[30, 60]}>...</Row>`} show showLineNumbers={false} />
        <p>It will space the vertical and horizontal gutter separately.</p>
        <Note title="Want breakpoint specific gutters?">
          Check out this <TextLink link="/examples/grid-gutters#responsive">example</TextLink>
        </Note>
        <h3>
          <code>Col</code>
        </h3>
        <p>
          With the Col component you can set the breakpoints for each column, it has a mobile first approach, which means it goes van
          left to right (xs, xxl).
        </p>
        <p>
          If you only set a column value for the <code>xs</code> breakpoint, it will apply to all breakpoints after <code>xs</code>, if
          no other breakspoints are set.
        </p>
        <CodeBlock code={`<Col xs={12}>...</Col>`} show showLineNumbers={false} />
        <p>
          Or until you set a different breakpoint.
          <br />
          In the example below, it will apply 12 columns from <code>xs</code> to <code>sm</code>, 6 columns from <code>md</code> to{" "}
          <code>lg</code>, and 3 columns for <code>xl</code> and higher.
        </p>
        <CodeBlock code={`<Col xs={12} md={6} xl={3}>...</Col>`} show showLineNumbers={false} />
        <Note title="More column options">
          Check out this <TextLink link="/todo">example</TextLink>.
        </Note>
        <br />
        <PagePrevNext prev={{ label: "Installation", to: "/installation" }} next={{ label: "Playground", to: "/playground" }} />
      </TextBlock>
    </>
  );
};

export default QuickStart;
