import React from "react";
import { Col } from "@zerodp/griddie";
import { NavLink, useLocation } from "react-router-dom";
import { documentationRoutes } from "../../routes";
import { useMobile } from "@hooks/useMobile";
import { useClickOutside } from "@hooks/useClickOutside";
import { useMenuStore } from "@stores/useMenuStore";
import { TopbarNav } from "@components";

import "./Sidebar.scss";

export const Sidebar = () => {
  const location = useLocation();
  const isMobile = useMobile();
  const isHome = location.pathname === "/" && !isMobile;
  const { isOpen, closeMenu } = useMenuStore();

  const sidebarRef = useClickOutside<HTMLDivElement>(() => {
    if (isMobile && isOpen) closeMenu();
  });

  React.useEffect(() => {
    if (!isMobile && isOpen) closeMenu();
  }, [isMobile]);

  return (
    <Col
      className="sidebar-column"
      style={{
        // set with to 0 to set auto with of sibling columns
        ...(isMobile && { width: "0rem" }),
      }}
    >
      <aside
        ref={sidebarRef}
        className={["sidebar", isMobile || isHome ? "sidebar--hide" : ""].join(" ")}
        style={{
          ...(isMobile && isOpen && { transform: "translateX(0rem)" }),
        }}
      >
        <div className="sidebar__menu">
          {isMobile && <TopbarNav />}
          <section>
            <h3>Getting started</h3>
            {documentationRoutes.getStarted.map(({ sidebarName, path }) => (
              <NavLink key={path} to={path} activeClassName="sidebar__menu--active">
                {sidebarName}
              </NavLink>
            ))}
            <h3>Examples</h3>
            {documentationRoutes.examples.map(({ sidebarName, path }) => (
              <NavLink key={path} to={path} activeClassName="sidebar__menu--active">
                {sidebarName}
              </NavLink>
            ))}
            <h3>API Reference</h3>
            {documentationRoutes.apiReference.map(({ sidebarName, path }) => (
              <NavLink key={path} to={path} activeClassName="sidebar__menu--active">
                {sidebarName}
              </NavLink>
            ))}
          </section>
        </div>
      </aside>
    </Col>
  );
};
