import React from "react";
import GriddieLogo from "../../assets/griddie.svg";

interface ILogo {
  width?: number;
  height?: number;
}

export const Logo: React.FC<ILogo> = ({ width = 50, height = width }) => {
  return <img src={GriddieLogo} width={width} height={height} alt="Logo Griddie" />;
};
