import React from "react";
import * as components from "../componentList";

const Layout = props => {
  return (
    <React.Fragment>
      <components.Header />
      <components.Main />
      <components.Footer />
    </React.Fragment>
  );
};
export default Layout;
