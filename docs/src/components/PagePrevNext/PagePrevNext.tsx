import React from "react";
import { Row, Col } from "@zerodp/griddie";
import { TextLink } from "@components";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

type PrevNext = {
  label: string;
  to: string;
};

interface IPagePrevNext {
  prev?: PrevNext;
  next?: PrevNext;
}

export const PagePrevNext: React.FC<IPagePrevNext> = ({ prev, next }) => {
  return (
    <Row justify="space-between">
      <Col>
        {prev && (
          <TextLink link={prev.to} iconLeft={<ArrowLeft width={16} />}>
            {prev.label}
          </TextLink>
        )}
      </Col>
      <Col>
        {next && (
          <TextLink link={next.to} iconRight={<ArrowRight width={16} />}>
            {next.label}
          </TextLink>
        )}
      </Col>
    </Row>
  );
};
