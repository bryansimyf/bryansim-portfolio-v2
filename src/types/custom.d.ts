// src/custom.d.ts or src/types/custom.d.ts
declare module "*.svg?react" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
