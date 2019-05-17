import * as React from "react";
import { Route, withRouter } from "react-router-dom";
import { Location } from "history";
import { loadMatchPathData } from "../../foundation/utils/loadMatchPathData";

interface Props {
  location: Location;
}
const NavigatorContainer: React.FunctionComponent<Props> = props => {
  const preState = (window as any).__STATE__;
  if (preState) {
    delete (window as any).__STATE__;
  } else {
    (async () => {
      await loadMatchPathData(location.pathname);
    })();
  }
  return <Route location={props.location} render={() => props.children} />;
};

export const Navigator = withRouter(NavigatorContainer);
