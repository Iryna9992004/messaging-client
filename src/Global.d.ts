declare module "*.module.css";
declare module "*.module.scss";
declare module "*.svg" {
    import React from "react";
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  