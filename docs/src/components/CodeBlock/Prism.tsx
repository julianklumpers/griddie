import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import defaultTheme from "prism-react-renderer/themes/palenight";

import { Editor, LiveContext, EditorProps } from "react-live";

import "./Highlight.scss";

export interface IPrism extends EditorProps {
  showLineNumbers?: boolean;
}

export const Prism: React.FC<IPrism> = ({ code = "", language = "tsx", theme = defaultTheme, showLineNumbers = true }) => {
  return (
    <Highlight {...defaultProps} theme={theme} language={language} code={code}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={[className, "pre-highlight"].join(" ")} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i, className: "line" })}>
              {showLineNumbers && <span className="line__no">{i + 1}</span>}
              <span className="line__content">
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

class CustomCodeEditorr extends Editor {
  highlightCode = (code: string) => {
    return <Prism {...this.props} code={code} />;
  };
}

export const CodeEditor = (ownProps: any) => {
  return (
    <LiveContext.Consumer>
      {({ theme = defaultTheme, code, language, disabled, onChange }: EditorProps) => (
        <div
          className={["custom-editor", !ownProps.show ? "hide-editor" : ""].join(" ")}
          style={{ overflow: "auto", maxWidth: "100vw" }}
        >
          <CustomCodeEditorr
            theme={theme}
            code={code}
            language={language}
            disabled={disabled}
            onChange={(c) => {
              onChange?.(c);
              ownProps.onChange?.(c);
            }}
          />
        </div>
      )}
    </LiveContext.Consumer>
  );
};
