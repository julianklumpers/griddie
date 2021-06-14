export const fromDefaultSnippet = (snippet: string) => {
  return `
import React from "react";
import { Container, Row, Col } from "@zerodp/griddie";

const App = () => {
  return (
    ${snippet.trim()}
  )
}
`.trim();
};

export const classes = (...args) => {
  return [...args].filter(Boolean).join(" ").trim();
};
