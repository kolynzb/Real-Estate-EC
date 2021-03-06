import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

// TODO: get with route alternative
function ScrollToTop({ history, children }: any) {
  useEffect(() => {
    if (!window.location.href.includes("/templates")) {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      };
    }
  });

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
