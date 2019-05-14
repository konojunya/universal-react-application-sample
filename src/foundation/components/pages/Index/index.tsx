import * as React from "react";

const Index: React.FunctionComponent = () => (
  <>
    <h1>hello</h1>
  </>
);

const loadData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("index action result");
    }, 1000);
  });
};

export default {
  component: Index,
  loadData
};
