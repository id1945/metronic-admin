import React from "react";
import {Card, CardBody, CardHeader} from "../Card";
import {CodeBlock} from "./CodeBlock";

export function CodeExample({
  languages,
  beforeCodeTitle,
  children,
  toolbar,
  codeBlockInCard = true
}) {
  return (
    <>
      {codeBlockInCard && (
        <Card className="example example-compact">
          <CardHeader title={beforeCodeTitle} toolbar={toolbar} />
          <CardBody>
            <>{children}</>
            <CodeBlock languages={languages} />
          </CardBody>
        </Card>
      )}
      {!codeBlockInCard && (
        <>
          <Card>
            <CardHeader title={beforeCodeTitle} toolbar={toolbar} />
            <CardBody>{children}</CardBody>
          </Card>
          <div className="example example-compact">
            <CodeBlock languages={languages} />
          </div>
        </>
      )}
    </>
  );
}
