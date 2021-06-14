import React from "react";
import { Hr, TextBlock, TextLink, PagePrevNext } from "@components";

const Overview = () => {
  return (
    <>
      <Hr title="Overview" />
      <TextBlock>
        <p>First off you might want to consider the following frameworks/library's first.</p>
        <ul>
          <li>
            <TextLink link="https://ant.design/components/grid/">Ant-Design</TextLink>
          </li>
          <li>
            <TextLink link="https://react-bootstrap.github.io/layout/grid/">Bootstrap</TextLink>
          </li>
          <li>
            <TextLink link="https://sealninja.github.io/react-grid-system/">React Grid System</TextLink>
          </li>
        </ul>
        <h3>Okay, but why this package?</h3>
        <p>
          They are great library's, and all have their strong points. But we usually ended up with custom components with a lot of edge
          cases, because they did not support most of our needs. Sometimes we even ended up with two grid library's or frameworks to
          use the best of both worlds.
        </p>
        <p>
          Another thing to bear in mind is maybe you don't want to install a complete component library to just use its grid features,
          or you just want to build a mobile first project within your own design system/component library.
        </p>
        <p>
          This library is framework agnostic, has 0 dependencies (other then React), which keeps your bundle small, and is full with
          features that make your life as easy as possible building mobile first websites.
        </p>
        <h3>Fair enough... what now?</h3>
        <PagePrevNext next={{ label: "Installation", to: "/installation" }} />
      </TextBlock>
    </>
  );
};

export default Overview;
