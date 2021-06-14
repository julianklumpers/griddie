import React from "react";
import { Row, Col } from "@zerodp/griddie";
import { useControlStore } from "./../../stores/useControlStore";

export const GridOverlay = ({ gutter = 30, layout = 12, color = "#e4e4e4" }) => {
  const { row, columnCount } = useControlStore((state) => state);

  return (
    <Row
      gutter={row.gutter}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: "100%",
      }}
    >
      {Array.from({ length: row.layout || layout }).map((_, idx) => {
        return (
          <Col key={`col-${idx}`} span={1}>
            <span
              style={{
                backgroundColor: color,
                height: "100%",
                display: "block",
                position: "relative",
                width: "100%",
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};
