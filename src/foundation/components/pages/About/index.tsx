import * as React from "react";

const About: React.FunctionComponent = () => <h1>hello about page</h1>;

const loadData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("about page result");
    }, 1000);
  });
};

export default About;
