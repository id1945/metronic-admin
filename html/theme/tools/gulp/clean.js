import del from "del";
import { build } from "./build.js";
import { getDemo } from "./helpers.js";

// task to clean and delete dist directory content
const getPaths = (outPaths) => {
  if (typeof outPaths === "undefined") {
    outPaths = [];
  }

  const paths = [];
  const outputs = build.config.dist;
  outputs.forEach((output) => {
    paths.push(output.replace("{demo}", getDemo()));
  });

  const realpaths = [];
  paths.forEach((path) => {
    realpaths.push(path + "/*");
  });

  return realpaths;
};

export const cleanTask = () => {
  return del(getPaths(), { force: true });
};
