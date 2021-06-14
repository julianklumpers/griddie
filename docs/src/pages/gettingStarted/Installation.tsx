import React from "react";
import { Hr, Note, TextBlock, TextLink, CodeBlock, PagePrevNext } from "@components";

const Intallation = () => {
  return (
    <>
      <Hr title="Installation" />
      <TextBlock>
        <p>
          You can install Griddie with <TextLink link="https://yarnpkg.com/">Yarn</TextLink> or{" "}
          <TextLink link="https://www.npmjs.com/">NPM</TextLink>
        </p>
        <Note title="Note" description="Griddie's only dependency is React >= 16.8" />
        <p>With yarn</p>
        <CodeBlock code={`yarn add @zerodp/griddie`} language="bash" show showLineNumbers={false} />
        <p>With NPM</p>
        <CodeBlock code={`npm install @zerodp/griddie`} language="bash" show showLineNumbers={false} />
        <p>
          If you wanna try it out before adding it to your project. Try our <TextLink link="/playground">Playground</TextLink>
          <br />
          Or check out our <TextLink link="/examples/basic-example">examples</TextLink>
        </p>
        <PagePrevNext prev={{ label: "Overview", to: "/overview" }} next={{ label: "Quick start", to: "/quick-start" }} />
      </TextBlock>
    </>
  );
};

export default Intallation;
