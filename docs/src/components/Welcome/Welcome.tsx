import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

import { Logo } from "@components";

export const Welcome = () => {
  return (
    <div className="welcome">
      <Link to="/" className="welcome__logo-link">
        <Logo width={35} />
        <h1>Griddie</h1>
      </Link>
    </div>
  );
};
