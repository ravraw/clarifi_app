import React from "react";
import styled from "styled-components";
import * as components from "../componentList";
import { Route, Switch } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const Lay = props => {
  return (
    <Layout>
      <components.Header />
      <components.Main>
        <Switch>
          <Route path="/" exact component={components.Home} />
          <Route path="/imageModule" component={components.ImageModule} />
          <Route path="/login" component={components.Login} />
          {/* <Route path component={components.InvalidPath} /> */}
        </Switch>
      </components.Main>
      <components.Footer />
    </Layout>
  );
};
export default Lay;
