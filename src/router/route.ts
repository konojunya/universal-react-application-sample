import loadable from "@loadable/component";

// Index
export const Index = loadable(() =>
  import(/* webpackChunkName: "Index" */ "../foundation/components/pages/Index")
);

// About
export const About = loadable(() =>
  import(/* webpackChunkName: "About" */ "../foundation/components/pages/About")
);
