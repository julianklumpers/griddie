import React from "react";
import { Container, Row, Col } from "@zerodp/griddie";
import { useMobile } from "@hooks/useMobile";
import { useMenuStore } from "@stores/useMenuStore";
import { Welcome, TopbarNav } from "@components";

import { ReactComponent as HamburgerIcon } from "../../assets/bars-solid.svg";

import "./topbar.scss";

export const Topbar = () => {
  const isMobile = useMobile();
  const { toggle } = useMenuStore();

  return (
    <>
      <header className="topbar">
        <Container fluid style={{ overflow: "initial", padding: "0 2rem" }}>
          <Row gutter={[0, 30]} justify="space-between">
            <Col span={4}>
              <Welcome />
            </Col>
            <Col span={4}>
              {isMobile ? (
                <div className="topbar__hamburger-menu">
                  <HamburgerIcon onClick={toggle} height={26} color="#666" cursor="pointer" />
                </div>
              ) : (
                <TopbarNav />
              )}
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
