import React from "react";
import { Hr, TextBlock } from "@components";
import { breakpoints } from "@zerodp/griddie";

const Container = () => {
  return (
    <>
      <Hr title="Container" />
      <TextBlock>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia incidunt quo eaque culpa repellat labore deleniti rerum.
          Consectetur, qui sunt fugit delegniti labore saepe voluptatem explicabo doloribus perferendis illo amet.
        </p>
        <h3>Container</h3>
        <ul style={{ fontSize: 16 }}>
          <li>
            <code style={{ backgroundColor: "#ddd", padding: 5, borderRadius: 5 }}>fluid: boolean</code>
            <ul style={{ marginLeft: "1.1rem" }}>
              <li>optional</li>
            </ul>
          </li>
          {breakpoints.map((bp) => (
            <li>
              <code style={{ backgroundColor: "#ddd", padding: 5, borderRadius: 5 }}>{bp}: boolean</code>
              <ul style={{ marginLeft: "1.1rem" }}>
                <li>depends on fluid</li>
                <li>optional</li>
              </ul>
            </li>
          ))}
        </ul>
      </TextBlock>
    </>
  );
};

export default Container;
