import {
  getBasePath
} from "./chunk.S6TJZ6NJ.js";

// src/components/icon/library.default.ts
var library = {
  name: "default",
  resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`,
  mutator: (svg) => {
    svg.setAttribute("fill", "currentColor");
    [...svg.querySelectorAll("*")].map((el) => el.setAttribute("fill", "inherit"));
  }
};
var library_default_default = library;

export {
  library_default_default
};
