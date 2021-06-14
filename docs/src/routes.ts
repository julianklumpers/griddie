import React from "react";

export const appRoutes = [
  {
    label: "Home",
    path: "/",
    exact: true,
    Component: React.lazy(() => import("./pages/Home")),
  },
  {
    path: "/",
    exact: false,
    Component: React.lazy(() => import("./pages/Documentation")),
  },
];

export const documentationRoutes = {
  getStarted: [
    {
      label: "Overview",
      path: "/overview",
      sidebarName: "Overview",
      Component: React.lazy(() => import("./pages/gettingStarted/Overview")),
    },
    {
      label: "Installation",
      path: "/installation",
      sidebarName: "Installation",
      Component: React.lazy(() => import("./pages/gettingStarted/Installation")),
    },
    {
      label: "Quick start",
      sidebarName: "Quick start",
      path: "/quick-start",
      Component: React.lazy(() => import("./pages/gettingStarted/QuickStart")),
    },
    {
      label: "Playground",
      sidebarName: "Playground",
      path: "/playground",
      Component: React.lazy(() => import("./pages/gettingStarted/Playground")),
    },
  ],
  examples: [
    {
      label: "Basic grid",
      path: "/examples/basic-grid",
      sidebarName: "Basic grid",
      Component: React.lazy(() => import("./pages/examples/BasicGrid")),
    },
    {
      label: "Responsive grid",
      path: "/examples/responsive-grid",
      sidebarName: "Responsive grid",
      Component: React.lazy(() => import("./pages/examples/ResponsiveGrid")),
    },
    {
      label: "Grid gutters",
      path: "/examples/grid-gutters",
      sidebarName: "Grid gutters",
      Component: React.lazy(() => import("./pages/examples/GridGutters")),
    },
    {
      label: "Column offset",
      path: "/examples/column-offset",
      sidebarName: "Column offset",
      Component: React.lazy(() => import("./pages/examples/ColumnOffset")),
    },
  ],
  apiReference: [
    {
      label: "Container",
      path: "/api/container",
      sidebarName: "Container",
      Component: React.lazy(() => import("./pages/apiReference/Container")),
    },
    {
      label: "Row",
      path: "/api/row",
      sidebarName: "Row",
      Component: React.lazy(() => import("./pages/apiReference/Row")),
    },
    {
      label: "Col",
      path: "/api/col",
      sidebarName: "Col",
      Component: React.lazy(() => import("./pages/apiReference/Col")),
    },
    {
      label: "Visible",
      path: "/api/visible",
      sidebarName: "Visible",
      Component: React.lazy(() => import("./pages/apiReference/Visible")),
    },
    {
      label: "Container",
      path: "/api/hidden",
      sidebarName: "Hidden",
      Component: React.lazy(() => import("./pages/apiReference/Hidden")),
    },
    {
      label: "useBreakpoint",
      path: "/api/useBreakpoint",
      sidebarName: "useBreakpoint",
      Component: React.lazy(() => import("./pages/apiReference/UseBreakpoint")),
    },
    {
      label: "useMobile",
      path: "/api/useMobile",
      sidebarName: "useMobile",
      Component: React.lazy(() => import("./pages/apiReference/UseBreakpoint")),
    },
    {
      label: "setGridOptions",
      path: "/api/setGridOptions",
      sidebarName: "setGridOptions",
      Component: React.lazy(() => import("./pages/apiReference/UseBreakpoint")),
    },
  ],
};
