import React from "react";
// import { Link, useParams, useRouteMatch } from "react-router-dom";
// import { Routes } from "../../routes";

import "./Breadcrumb.scss";

export const Breadcrumb = () => {
  // const match = useRouteMatch();
  // const params = useParams<any>();

  // const activeRoutes = Routes.filter((route) => match.path.includes(route.path)).map(({ breadcrumbName, path }) => {
  // replace :placeholderId for real id
  // path = Object.keys(params).reduce((prev, key) => prev.replace(`:${key}`, params[key]), path);

  // const interpolatedKeys = breadcrumbName.match(/[^{\}]+(?=})/gi);

  // if (interpolate && interpolatedKeys) {
  //   const interpolatedName = interpolatedKeys.reduce((prev, key) => {
  //     if (`{{${key}}}` === prev && React.isValidElement(interpolate[key])) {
  //       return React.cloneElement(interpolate[key]);
  //     }
  //     return prev.replace(`{{${key}}}`, interpolate[key] || "...");
  //   }, breadcrumbName);

  //   return { breadcrumbName: interpolatedName, path };
  // }

  //   return { breadcrumbName, path };
  // });

  return null;

  // return (
  //   <div className="breadcrumb">
  //     {activeRoutes.map((route) => {
  //       const last = activeRoutes.indexOf(route) === activeRoutes.length - 1;
  //       if (last) return <span key={route.path}>{route.breadcrumbName}</span>;
  //       return (
  //         <React.Fragment key={route.path}>
  //           <Link to={route.path}>{route.breadcrumbName}</Link>
  //           <span className="breadcrumb__separator">{" > "}</span>
  //         </React.Fragment>
  //       );
  //     })}
  //   </div>
  // );
};
