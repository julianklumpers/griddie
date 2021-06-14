import React from "react";
import debounce from "lodash.debounce";
import { ReactComponent as DotsVertical } from "../../assets/ellipsis-v.svg";
import { useMobile } from "@hooks/useMobile";

import "./Resizeable.scss";

export const Resizeable: React.FC = ({ children }) => {
  const [coordinates, setCoordinates] = React.useState<React.CSSProperties>({ width: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const resizeContainer = React.useRef<HTMLDivElement>(null);

  const isMobile = useMobile();

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const { width: containerWidth } = containerRef.current.getBoundingClientRect();

      setCoordinates((prev) => {
        let newWidth = Number(typeof prev.width === "string" ? containerWidth : prev.width) + Number(e.movementX);

        if (newWidth > containerWidth) {
          newWidth = containerWidth;
        }
        if (newWidth < 100) {
          newWidth = 100;
        }

        return {
          ...prev,
          width: newWidth,
        };
      });
    }
  }, []);

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", () => window.removeEventListener("mousemove", handleMouseMove));
  };

  const handleWindowResize = (e: UIEvent) => {
    if (containerRef.current) {
      const { innerWidth } = e.target as Window;
      const { width: containerWidth } = containerRef.current.getBoundingClientRect();

      // let newWidth = innerWidth;

      // if (!isMobile) {
      //   newWidth -= 350;
      // } else {
      // }
      // if (innerWidth - 230 < containerWidth) {

      // }
      setCoordinates({ width: "100%" });
    }
  };

  React.useEffect(() => {
    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      setCoordinates({
        width: containerBounds.width,
      });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <div ref={resizeContainer} className="resize-container" style={{ ...coordinates }}>
        {children}
        <div className="drag-handle" onMouseDown={handleMouseDown}>
          <DotsVertical width={6} color="#fff" />
        </div>
      </div>
    </div>
  );
};
