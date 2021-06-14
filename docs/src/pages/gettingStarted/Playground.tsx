import React from "react";
import { Container, Row, Col, ContainerBreakpoints, useBreakpoint } from "@zerodp/griddie";
import { ColContent, Hr, GridOverlay, GridControls, Resizeable, PagePrevNext, ScreenInfo } from "@components";
import { useControlStore } from "@stores/useControlStore";

const factor = 0.7;
const containerBreakpoints = {
  xs: [400, 400],
  sm: [600, 600 * factor],
  md: [900, 900 * factor],
  lg: [1100, 1100 * factor],
  xl: [1300, 1300 * factor],
  xxl: [1500, 1500],
};

const Playground = () => {
  const { container, row, column, columnCount, setGridProps, setColumnCount, resetGrid } = useControlStore();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const screen = useBreakpoint(containerRef, containerBreakpoints);

  React.useEffect(() => {
    resetGrid();
    setColumnCount(8);
    setGridProps({
      container: { fluid: false },
      row: { gutter: [30, 20], layout: 12 },
      column: { xs: 12, md: 6, xl: 3 },
    });
  }, []);

  return (
    <>
      <Hr title="Grid controls" />
      <GridControls />
      <Hr title="Playground" actions={<ScreenInfo screen={screen} />} />
      <Resizeable>
        <ContainerBreakpoints ref={containerRef} {...containerBreakpoints}>
          <Container {...container}>
            <GridOverlay />
            <Row {...row}>
              {Array.from({ length: columnCount }).map((_, idx) => (
                <Col key={`col-${idx}`} {...column}>
                  <ColContent>Col {idx + 1}</ColContent>
                </Col>
              ))}
            </Row>
          </Container>
        </ContainerBreakpoints>
      </Resizeable>
      <br />
      <PagePrevNext prev={{ label: "Quick start", to: "/quick-start" }} next={{ label: "Examples", to: "/examples/basic-grid" }} />
    </>
  );
};

export default Playground;
